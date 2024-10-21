import { FC } from "react";
import { Color, IconName, Size, textColors } from "../theme";
import clsx from "clsx";

import LogoIcon from "./icons/user.tsx";
import ProductIcon from "./icons/product.tsx";
import ArrowIcon from "./icons/arrow.tsx";
import HeartIcon from "./icons/heart.tsx";
import VectorIcon from "./icons/vector.tsx";

type Props = {
  className?: string;
  name: IconName;
  size?: Size;
  color?: Color;
  onClick?: () => void;
};

const iconSvgList: Record<IconName, FC> = {
  logo: LogoIcon,
  product: ProductIcon,
  arrow: ArrowIcon,
  heart: HeartIcon,
  vector: VectorIcon,
};

export const Icon: FC<Props> = ({ className, color, name, onClick }) => {
  const SvgIcon = iconSvgList[name];

  const iconClasses = clsx(
    className,
    "flex items-center justify-center",
    color ? textColors[color] : "",
    onClick ? "cursor-pointer" : "",
  );

  return (
    <div className={iconClasses} onClick={onClick}>
      <SvgIcon />
    </div>
  );
};
