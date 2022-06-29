import { useState } from "react";
import UseEffectDemo from "./hooks/use-effect";
import UseMemoDemo from "./hooks/use-memo";
import UseStateDemo from "./hooks/use-state-demo";
import UseContext from "./hooks/use-context";
import UseReducer from "./hooks/use-reducer";
import UseRef from "./hooks/use-ref";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <UseStateDemo  /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      <UseRef />
    </div>
  );
}

export default App;
