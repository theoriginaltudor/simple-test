import { useState } from "react";
import { Text } from "./components/text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text preset={1} as={"h1"} className="text-grey-400">
        Vite + React
      </Text>

      <div className="rounded-2xl bg-orange-400 m-1 p-3">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-green-400 text-sm leading-4 tracking-normal">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-green-200 font-space-mono">
        <Text>Click on the Vite and React logos to learn more</Text>
      </p>
    </>
  );
}

export default App;
