import { useRef, useState } from "react";
import Dollar from "./assets/images/icon-dollar.svg?react";
import Person from "./assets/images/icon-person.svg?react";
import Logo from "./assets/images/logo.svg?react";
import { Field } from "./components/form-field";
import { Input } from "./components/form-field/form-input";
import { Label } from "./components/form-field/form-label";
import { TipList } from "./components/select-tip-list";
import { Card } from "./components/tip-card";

function App() {
  const [bill, setBill] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);
  const [tip, setTip] = useState<number | null>(null);
  const values = useRef([5, 10, 15, 25, 50]);
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
          <TipList tip={tip} setTip={setTip} values={values.current} />
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
