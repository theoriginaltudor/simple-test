import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import { createElement } from "react";
import { cn } from "../../utils";

type AllowedElements =
  | "span"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type Props<T extends AllowedElements = "span"> = {
  preset?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export const Text = <T extends AllowedElements = "span">({
  preset = 6,
  children,
  as: El = "span" as T,
  className,
  ...rest
}: Props<T>): ReactElement => {
  const presetList = [
    "text-5xl leading-[71px] -tracking-[1px]",
    "text-[42px] leading-[47px] -tracking-[0.67px]",
    "text-2xl leading-9",
    "text-xl leading-[30px]",
    "text-base leading-6",
    "text-[13px] leading-[19px]",
  ];

  const props = {
    className: cn(
      "font-space-mono tracking-normal",
      presetList[preset - 1],
      className
    ),
    ...(rest as unknown as Record<string, unknown>),
  };

  return createElement(El, props, children);
};
