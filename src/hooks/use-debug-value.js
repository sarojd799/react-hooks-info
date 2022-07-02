import React, { useDebugValue, useEffect, useState } from 'react';

/*
 1.useDebugValue can be used to display a label for custom hooks in React DevTools.

Defer formatting debug values
In some cases formatting a value for display might be an expensive operation. It’s also unnecessary unless a Hook is actually inspected.

For this reason useDebugValue accepts a formatting function as an optional second parameter. This function is only called
if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.

For example a custom Hook that returned a Date value could avoid calling the toDateString function unnecessarily 
by passing the following formatter:

useDebugValue(date, date => date.toDateString());


1.Writing  custom hooks  is a good way to extract common logic and compute state related logics. (depends how you want to use it);
2.If you are writing a custom hook then the name must start with "use" keyword to avail hooks  related violations

*/

function useLogger(text) {
    useDebugValue(text)
    useEffect(() => {
        console.log(text)
    }, [text])
}
function UseDebugValue(props) {

    const [val, setVal] = useState("");
    useLogger(val)

    return (
        <div>
            <p>
                <input type="text" placeholder='Enter something' onChange={e => setVal(e.target.value)} />
            </p>
        </div>
    );
}

export default UseDebugValue;