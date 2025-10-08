import type { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../utils";
import { Text } from "./text";

const presetList = {
  dark: "bg-green-900 text-grey-50",

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
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex justify-center rounded-[5px] items-center w-[122px] h-12 hover:bg-green-200 hover:text-green-900 transition-colors duration-150",
        presetList[preset],
        className,
        { "bg-green-750 text-green-800": disabled }
      )}
      disabled={disabled}
      {...props}
    >
      <Text preset={3}>{children}</Text>
    </button>
  );
};

export { TipButton };
