"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch("/api/categories");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const menuItemsResponse = await fetch("/api/menu-items");
        const menuItemsData = await menuItemsResponse.json();
        setMenuItems(menuItemsData);

        setLoading(false); // Set loading to false when both API calls are complete
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const dealsCategory = categories.find(
    (category) => category.name === "Deals"
  );

  return (
    <section className="mt-8">
      {loading ? (
        <p>Loading best sellers for you.....</p>
      ) : (
        dealsCategory && (
          <div>
            <div className="text-center text-[#FFA500] font-bold text-4xl italic">
              {/* <SectionHeaders mainHeader={dealsCategory.name} /> */}
              Our Best Sellers
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
              {menuItems
                .filter((item) => item.category === dealsCategory._id)
                .map((item) => (
                  <MenuItem key={item._id} {...item} />
                ))}
            </div>
          </div>
        )
      )}
    </section>
  );
}
