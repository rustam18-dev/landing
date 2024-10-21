import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { buttonSizes } from "../theme";

type Props = PropsWithChildren<{
  disabled?: boolean;
  href?: string;
  htmlType?: HTMLButtonElement["type"];
  onClick?: () => void;
  variant?: "primary" | "outlined";
  className?: string;
  size?: "small" | "medium" | "large";
}>;

export const Button: FC<Props> = ({
  children,
  disabled,
  href,
  htmlType = "button",
  variant = "primary",
  className,
  size = "medium",
  onClick,
}) => {
  const buttonColors = {
    primary: clsx(
      "bg-gold",
      "text-white",
      "active:bg-gold-active",
    ),
    outlined: clsx(
      "border-[1.5px]",
      "border-gold",
      "text-gold",
      "active:border-gold-active",
      "active:bg-[#fbf9f8]",
    ),
  };
  const buttonClasses = clsx(
    !href && buttonColors[variant],
    !href && buttonSizes[size],
    `${!href ? 'w-full  rounded-[38px]' : ''} text-[14px] font-bold`,
    className,
  );

  if (href) {
    return (
      <a className={buttonClasses} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  );
};
