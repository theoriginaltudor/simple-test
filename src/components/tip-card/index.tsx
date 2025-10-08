import { TipButton } from "../tip-button";
import { Amount } from "./label-amount";

export const Card = () => {
  return (
    <div className="bg-green-900 py-6 px-8 rounded-[5px] flex flex-col gap-32">
      <div className="flex-col gap-6">
        <Amount label="tip Amount">$4.27</Amount>
        <Amount label="Total">$32.79</Amount>
      </div>
      <TipButton disabled className="uppercase w-full">
        Reset
      </TipButton>
    </div>
  );
};
