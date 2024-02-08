import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to Grill X, where sizzling innovation meets culinary
            delight! We take pride in crafting a diverse menu that caters to
            every palate. Indulge in our mouthwatering burgers, artfully crafted
            pizzas, soul-soothing soups, flavorful wraps, crispy fries, and an
            array of succulent steaks.
          </p>
          <p>
            At Grill X, we are not just a restaurant; we are an experience,
            dedicated to serving up delicious memories. Our commitment to
            quality ingredients and expert grilling ensures that every bite is a
            celebration of taste. Join us for a gastronomic journey that
            promises satisfaction with every dish.
          </p>
          <p>Grill X – Where Great Food Meets Great Moments.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+923004002687"
          >
            0300-400-26-87
          </a>
        </div>
      </section>
    </>
  );
}
