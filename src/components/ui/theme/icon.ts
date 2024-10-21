import { Size } from "./size.ts";

export type IconName = "logo" | "product" | "arrow" | "heart" | "vector";

export const iconSizes: Record<Size, string> = {
  small: "min-w-[16px] h-[16px] max-w-[16px]",
  medium: "min-w-[18px] h-[18px] max-w-[18px]",
  large: "min-w-[20px] h-[20px] max-w-[20px]",
  xLarge: "min-w-[24px] h-[24px] max-w-[24px]",
  xxLarge: "min-w-[28px] h-[28px] max-w-[28px]",
  xSmall: "min-w-[10px] h-[10px] max-w-[10px]",
  xxSmall: "min-w-[8px] h-[8px] max-w-[8px]",
};
