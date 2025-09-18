import { lazy } from "react";
import type { DateInput } from "./definition";

//edit date format for blog dates
const toDate = (input: DateInput): Date => {
  return input instanceof Date ? input : new Date(input);
};

const getDataWithSuffix = (input: DateInput): String => {
  const date = toDate(input);
  const day: number = date.getDate();

  day > 3 && day > 21 ? `${day}th` : "";

  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

export const formatFullDate = (
  input: DateInput,
  locale: string = "en-GB"
): string => {
  const date = toDate(input);
  const weekDayWithSuffix = getDataWithSuffix(date);
  const month: string = date.toLocaleDateString(locale, { month: "long" });
  const year: string = date.getFullYear().toString();
  return `${weekDayWithSuffix} ${month} ${year}`;
};


// Lazy loading for optimizing pages
export function lazyLoad(importPath: string, namedExport?: string) {
  return lazy(async () => {
    try {
      // For Vite, we need to use a dynamic import with a string literal
      // The path should be relative to the project root (src/)
      const module = await import(/* @vite-ignore */ `/src/${importPath}.tsx`);
      
      if (!namedExport) {
        return { default: module.default || module };
      }
      
      return { 
        default: module[namedExport] || module.default || module 
      };
    } catch (error) {
      console.error(`Error loading module at ${importPath}:`, error);
      throw error;
    }
  });
}

interface addToCartProps {
  product_id: number
  quantity:number
  price:number
}
export function saveAddToCartToLocalStorage(items: addToCartProps[]) {
  if (!items) return
  localStorage.setItem("cart", JSON.stringify(items))
}

export function getCartFromLocalStorage(): addToCartProps[] {
  const data = localStorage.getItem("cart")
  return data ? JSON.parse(data) : []
}