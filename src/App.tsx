import Dollar from "./assets/images/icon-dollar.svg?react";
import Person from "./assets/images/icon-person.svg?react";
import Logo from "./assets/images/logo.svg?react";
import { Field } from "./components/form-field";
import { Input } from "./components/form-field/form-input";
import { Label } from "./components/form-field/form-label";
import { Text } from "./components/text";
import { TipButton } from "./components/tip-button";
import { Card } from "./components/tip-card";

function App() {
  return (
    <div className="flex flex-col items-center pt-40 bg-grey-200 min-h-dvh gap-[88px]">
      <Logo />
      <div className="bg-white rounded-[25px] p-8 flex gap-12">
        <div className="flex gap-10 flex-col">
          <Field>
            <Label>Bill</Label>
            <Input icon={Dollar} strategy={parseFloat} />
          </Field>
          <div className="flex flex-col gap-2">
            <Text as="span" preset={5}>
              Select Tip %
            </Text>
            <div className="grid grid-cols-3 gap-4">
              <TipButton preset="dark">5%</TipButton>
              <TipButton preset="dark">10%</TipButton>
              <TipButton preset="dark">15%</TipButton>
              <TipButton preset="dark">25%</TipButton>
              <TipButton preset="dark">50%</TipButton>
              <TipButton preset="light">Custom</TipButton>
            </div>
          </div>
          <Field>
            <Label>Number of People</Label>
            <Input icon={Person} />
          </Field>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default App;
