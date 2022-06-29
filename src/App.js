import { useState } from "react";
import UseEffectDemo from "./hooks/use-effect";
import UseMemoDemo from "./hooks/use-memo";
import UseStateDemo from "./hooks/use-state-demo";
import UseContext from "./hooks/use-context";
import UseReducer from "./hooks/use-reducer";
import UseRef from "./hooks/use-ref";
import UseCallback from "./hooks/use-callback";
import UseImperativeHandle from "./hooks/use-imperative-handle"

function App() {

  return (
    <div className="App">
      {/* <UseStateDemo  /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseCallback /> */}
      <UseImperativeHandle />
    </div>
  );
}

export default App;
