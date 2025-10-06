import type { ReactNode } from "react";
import { cn } from "../../utils";

interface Props {
  preset?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export const Text = ({ preset = 6, children }: Props) => {
  const presetList = [
    "text-5xl leading-[71px] -tracking-[1px]",
    "text-[42px] leading-[47px] -tracking-[0.67px]",
    "text-2xl leading-9",
    "text-xl leadning-[30px]",
    "text-base leading-6",
    "text-[13px] leading-[19px]",
  ];

  return (
    <span className={cn("tracking-normal", presetList[preset - 1])}>
      {children}
    </span>
  );
};
