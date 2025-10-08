import { useState } from "react";
import Person from "./assets/images/icon-person.svg?react";
import { Field } from "./components/form-field";
import { Input } from "./components/form-field/form-input";
import { Label } from "./components/form-field/form-label";
import { Text } from "./components/text";
import { TipButton } from "./components/tip-button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text preset={1} as={"h2"} className="text-grey-400">
        Vite + React
      </Text>

      <div className="rounded-2xl m-1 p-3">
        <TipButton
          preset="light"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}%
        </TipButton>
        <p className="text-green-400 text-sm leading-4 tracking-normal">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-green-200">
        <Text>Click on the Vite and React logos to learn more</Text>
      </p>

      <Field>
        <Label className="text-grey-500">Number of People</Label>
        <Input icon={Person}></Input>
      </Field>
    </>
  );
}

export default App;
