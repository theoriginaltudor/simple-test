import type { FC } from "react";
import { Text } from "../text";

interface Props extends React.PropsWithChildren {
  className?: string;
  label: string;
}

export const Amount: FC<Props> = ({ children, label }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <Text className="text-white capitalize" preset={5}>
          {label}
        </Text>
        <Text className="text-grey-400">/ person</Text>
      </div>
      <Text className="text-green-400" preset={1} data-testid={label}>
        {children}
      </Text>
    </div>
  );
};
