export type FontSize =
  | "headline-xl"
  | "headline-l"
  | "text-xl"
  | "text-l"
  | "text-m"
  | "text-s";

export const fontSizes: Record<FontSize, string> = {
  "headline-xl": "text-[36px]",
  "headline-l": "text-[32px]",
  "text-xl": "text-[24px]",
  "text-l": "text-[20px]",
  "text-m": "text-[16px]",
  "text-s": "text-[14px]",
};

export type FontWeight = "light" | "regular" | "medium" | "semibold" | "bold";

export const fontWeights: Record<FontWeight, string> = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};
