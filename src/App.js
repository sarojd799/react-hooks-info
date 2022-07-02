import { useState } from "react";
import UseEffectDemo from "./hooks/use-effect";
import UseMemoDemo from "./hooks/use-memo";
import UseStateDemo from "./hooks/use-state-demo";
import UseContext from "./hooks/use-context";
import UseReducer from "./hooks/use-reducer";
import UseRef from "./hooks/use-ref";
import UseCallback from "./hooks/use-callback";
import UseImperativeHandle from "./hooks/use-imperative-handle"
import UseLayoutEffect from "./hooks/use-layout-effect";


import ForwardRef from "./hooks/test/forward-ref";
import UseDebugValue from "./hooks/use-debug-value";
import UseDeferredValueComponent from "./hooks/use-deferred-value";
import UseTransition from "./hooks/use-transition";


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
      {/* <UseImperativeHandle /> */}
      {/* <ForwardRef /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseDebugValue /> */}
      {/* <UseDeferredValueComponent /> */}
      <UseTransition />
    </div>
  );
}

export default App;
