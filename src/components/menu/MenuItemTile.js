import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div
      // className="bg-gray-200 p-4 rounded-lg text-center
      // group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
      className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all flex flex-col items-center justify-center"
    >
      <div className="text-center h-52 md:w-56">
        <img
          src={image}
          // className="max-h-auto max-h-44 block mx-auto"
          className="mx-auto w-full h-full object-cover rounded-lg"
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}

// import AddToCartButton from "@/components/menu/AddToCartButton";

// export default function MenuItemTile({ onAddToCart, ...item }) {
//   const { image, description, name, basePrice, sizes, extraIngredientPrices } =
//     item;
//   const hasSizesOrExtras =
//     sizes?.length > 0 || extraIngredientPrices?.length > 0;

//   return (
//     <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all flex flex-col items-center justify-center">
//       <div
//         // className="h-40 w-72"
//         style={{ height: "10rem", width: "18rem" }}
//       >
//         <img
//           src={image}
//           className="mx-auto w-full h-full object-cover rounded-lg"
//           // className="mx-auto max-w-full max-h-full object-cover rounded-lg"
//           alt="pizza"
//         />
//       </div>

//       <h4 className="font-semibold text-xl my-3">{name}</h4>
//       <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
//       <AddToCartButton
//         image={image}
//         hasSizesOrExtras={hasSizesOrExtras}
//         onClick={onAddToCart}
//         basePrice={basePrice}
//       />
//     </div>
//   );
// }
