import type { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../utils";
import { Text } from "./text";

const presetList = {
  dark: "bg-green-900 text-grey-50",
  light: "bg-green-200 text-green-900",
  base: "bg-green-400 text-green-900",
} as const;

type Preset = keyof typeof presetList;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  preset?: Preset;
  className?: string;
}

const TipButton: FC<Props> = ({
  preset = "base",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex justify-center rounded-[5px] items-center w-[122px] h-12",
        presetList[preset],
        className
      )}
      {...props}
    >
      <Text preset={3}>{children}</Text>
    </button>
  );
};

export { TipButton };
