import { useState } from "react";
import UseEffectDemo from "./hooks/use-effect";
import UseMemoDemo from "./hooks/use-memo";
import UseStateDemo from "./hooks/use-state-demo";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <UseStateDemo  /> */}
      {/* <UseEffectDemo /> */}
      <UseMemoDemo />
    </div>
  );
}

export default App;
