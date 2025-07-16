import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// to prevents Tailwind class conflicts

// The cn function takes multiple class inputs and returns a single, optimized string of CSS classes.
// It's commonly used in modern React projects, especially those using Tailwind CSS.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
