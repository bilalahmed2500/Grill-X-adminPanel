"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export function cartProductPrice(cartProduct) {
  let price = cartProduct.basePrice;
  if (cartProduct.size) {
    price += cartProduct.size.price;
  }
  if (cartProduct.extras?.length > 0) {
    for (const extra of cartProduct.extras) {
      price += extra.price;
    }
  }
  return price;
}

export function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, [ls]);

  function clearCart() {
    setCartProducts([]);
    saveCartProductsToLocalStorage([]);
  }

  function removeCartProduct(indexToRemove) {
    setCartProducts((prevCartProducts) => {
      const newCartProducts = prevCartProducts.filter(
        (v, index) => index !== indexToRemove
      );
      saveCartProductsToLocalStorage(newCartProducts);
      return newCartProducts;
    });
    toast.success("Product removed");
  }

  function saveCartProductsToLocalStorage(cartProducts) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }

  function addToCart(product, size = null, extras = []) {
    const existingItemIndex = cartProducts.findIndex(
      (item) =>
        item.name === product.name &&
        item.size === size &&
        arraysEqual(item.extras, extras)
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartProducts];
      const existingItem = updatedItems[existingItemIndex];
      existingItem.count = Number.isFinite(existingItem.count)
        ? existingItem.count + 1
        : 1;
      setCartProducts(updatedItems);
      saveCartProductsToLocalStorage(updatedItems);
    } else {
      const newProduct = {
        ...product,
        size,
        extras,
        count: Number.isFinite(product.count) ? product.count + 1 : 1,
      };
      setCartProducts([...cartProducts, newProduct]);
      saveCartProductsToLocalStorage([...cartProducts, newProduct]);
    }
  }
  // Helper function to check if two arrays are equal
  function arraysEqual(arr1, arr2) {
    return (
      arr1.length === arr2.length &&
      arr1.every((value, index) => value === arr2[index])
    );
  }

  const handleIncrement = (index) => {
    const updatedItems = [...cartProducts];
    const currentItem = updatedItems[index];
    currentItem.count += 1;
    setCartProducts(updatedItems);
    saveCartProductsToLocalStorage(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...cartProducts];
    const currentItem = updatedItems[index];

    if (currentItem.count > 0) {
      currentItem.count -= 1;

      if (currentItem.count === 0) {
        updatedItems.splice(index, 1);
      }
      setCartProducts(updatedItems);
      saveCartProductsToLocalStorage(updatedItems);
    }
  };
  return (
    <SessionProvider>
      <CartContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          addToCart,
          removeCartProduct,
          clearCart,
          handleIncrement,
          handleDecrement,
        }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
