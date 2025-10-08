import { useState } from "react";
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
  const [bill, setBill] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);
  const [tip, setTip] = useState<number | null>(null);
  let tipForPerson;
  let totalForPerson;
  if (bill && people && tip && bill > 0 && people > 0) {
    tipForPerson = (bill * tip) / 100 / people;
    totalForPerson = bill / people + tipForPerson;
  }
  return (
    <div className="flex flex-col items-center pt-40 bg-grey-200 min-h-dvh gap-[88px]">
      <Logo />
      <div className="bg-white rounded-[25px] p-8 flex gap-12">
        <div className="flex gap-10 flex-col">
          <Field value={bill} setValue={setBill}>
            <Label>Bill</Label>
            <Input icon={Dollar} strategy={parseFloat} />
          </Field>
          <div className="flex flex-col gap-2">
            <Text as="span" preset={5}>
              Select Tip %
            </Text>
            <div className="grid grid-cols-3 gap-4">
              <TipButton
                onClick={() => {
                  if (tip == 5) setTip(null);
                  else setTip(5);
                }}
                preset={tip == 5 ? "base" : "dark"}
              >
                5%
              </TipButton>
              <TipButton
                onClick={() => {
                  if (tip == 10) setTip(null);
                  else setTip(10);
                }}
                preset={tip == 10 ? "base" : "dark"}
              >
                10%
              </TipButton>
              <TipButton
                onClick={() => {
                  if (tip == 15) setTip(null);
                  else setTip(15);
                }}
                preset={tip == 15 ? "base" : "dark"}
              >
                15%
              </TipButton>
              <TipButton
                onClick={() => {
                  if (tip == 25) setTip(null);
                  else setTip(25);
                }}
                preset={tip == 25 ? "base" : "dark"}
              >
                25%
              </TipButton>
              <TipButton
                onClick={() => {
                  if (tip == 50) setTip(null);
                  else setTip(50);
                }}
                preset={tip == 50 ? "base" : "dark"}
              >
                50%
              </TipButton>
              <TipButton>Custom</TipButton>
            </div>
          </div>
          <Field value={people} setValue={setPeople}>
            <Label>Number of People</Label>
            <Input icon={Person} />
          </Field>
        </div>
        <Card
          tip={tipForPerson && tipForPerson >= 0 ? tipForPerson : 0}
          total={totalForPerson && totalForPerson >= 0 ? totalForPerson : 0}
          onReset={() => {
            setBill(null);
            setPeople(null);
            setTip(null);
          }}
        />
      </div>
    </div>
  );
}

export default App;
