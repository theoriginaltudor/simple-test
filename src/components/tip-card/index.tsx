import { memo, type FC } from "react";
import { TipButton } from "../tip-button";
import { Amount } from "./label-amount";

export const Card: FC<{ tip: number; total: number; onReset: () => void }> =
  memo(({ onReset, tip, total }) => {
    const disabled = tip + total == 0;
    console.log("render card");
    return (
      <div className="bg-green-900 py-6 px-8 rounded-[5px] flex flex-col gap-32">
        <div className="flex-col gap-6">
          <Amount label="tip Amount">${tip.toFixed(2)}</Amount>
          <Amount label="Total">${total.toFixed(2)}</Amount>
        </div>
        <TipButton
          disabled={disabled}
          className="uppercase w-full"
          onClick={() => onReset()}
        >
          Reset
        </TipButton>
      </div>
    );
  });
