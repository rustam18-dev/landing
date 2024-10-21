export type Color =
  | "alabaster100"
  | "alabaster200"
  | "alabaster300"
  | "mute"
  | "primaryBlack"
  | "secondary"
  | "white"
  | "gray"
  | "primary"
  | "lightBlue"
  | "slate"
  | "green"
  | "transparent"
  | "error";

export const textColors: Partial<Record<Color, string>> = {
  alabaster100: "text-alabaster-100",
  alabaster200: "text-alabaster-200",
  mute: "text-mute-200",
  primaryBlack: "text-primary-black",
  secondary: "text-secondary",
  white: "text-white",
  gray: "text-gray",
  primary: "text-primary",
  slate: "text-slate-100",
  green: "text-green",
  transparent: "transparent",
  error: "text-error-message",
};

export const bgColors: Partial<Record<Color, string>> = {
  alabaster100: "bg-alabaster-100",
  alabaster200: "bg-alabaster-200",
  alabaster300: "bg-alabaster-300",
  mute: "bg-mute-200",
  primaryBlack: "bg-primary-black",
  secondary: "bg-secondary",
  white: "bg-white",
  lightBlue: "bg-light-blue-100",
};
