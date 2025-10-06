import type { ElementType, ReactNode } from "react";
import { cn } from "../../utils";

interface Props {
  preset?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export const Text = ({
  preset = 6,
  children,
  as: El = "span",
  className,
}: Props) => {
  const presetList = [
    "text-5xl leading-[71px] -tracking-[1px]",
    "text-[42px] leading-[47px] -tracking-[0.67px]",
    "text-2xl leading-9",
    "text-xl leading-[30px]",
    "text-base leading-6",
    "text-[13px] leading-[19px]",
  ];

  return (
    <El className={cn("tracking-normal", presetList[preset - 1], className)}>
      {children}
    </El>
  );
};
