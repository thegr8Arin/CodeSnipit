"use client";
import { LanguagesT } from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { customLanguages } from "./supportedCodeLanguage";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertHexToRgbaWithOpacity = (
  hexColor: string,
  opacity: number,
) => {
  // Remove the '#' symbol if it exists
  hexColor = hexColor.replace("#", "");

  // Parse the hex color into its RGB components
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Ensure opacity is between 0 and 1
  opacity = Math.min(1, Math.max(0, opacity));

  // Create rgba string with the specified opacity
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgbaColor;
};

export const getLanguageClassNameByKey = (
  languages: LanguagesT,
  language: string,
) => {
  return Object.keys(languages).find(
    (key) => languages[key].name === language && languages[key].className,
  ) as string;
};

export const getLanguageNameByClassName = (
  languages: LanguagesT,
  className: string,
) => {
  return Object.keys(languages).find(
    (key) => languages[key].className === className && languages[key].name,
  ) as string;
};

export const getLanguageName = (name: string) => {
  return Object.keys(customLanguages).find((value) => {
    return customLanguages[value].name === name && customLanguages[value].name;
  });
};
