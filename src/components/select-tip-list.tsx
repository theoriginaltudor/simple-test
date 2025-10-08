import { memo, type FC } from "react";
import { Text } from "./text";
import { TipButton } from "./tip-button";

export const TipList: FC<{
  tip: number | null;
  setTip: React.Dispatch<React.SetStateAction<number | null>>;
  values: number[];
}> = memo(({ tip, setTip, values }) => {
  return (
    <div className="flex flex-col gap-2">
      <Text as="span" preset={5}>
        Select Tip %
      </Text>
      <div className="grid grid-cols-3 gap-4">
        {values.map((value, index) => (
          <TipButton
            key={value + index}
            onClick={() => {
              if (tip == value) setTip(null);
              else setTip(value);
            }}
            preset={tip == value ? "base" : "dark"}
          >
            {value}%
          </TipButton>
        ))}
        <TipButton>Custom</TipButton>
      </div>
    </div>
  );
});
