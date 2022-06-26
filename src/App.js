import { useState } from "react";
import UseEffectDemo from "./hooks/use-effect";
import UseMemoDemo from "./hooks/use-memo";
import UseStateDemo from "./hooks/use-state-demo";
import UseContext from "./hooks/use-context";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <UseStateDemo  /> */}
      {/* <UseEffectDemo /> */}
      <UseMemoDemo />
      {/* <UseContext /> */}
    </div>
  );
}

export default App;
