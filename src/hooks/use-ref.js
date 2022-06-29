import React, { useEffect, useRef, useState } from 'react';

//Because ref 
const UseRef = () => {

    const [count, setCount] = useState(0);

    const prevCount = useRef(0);

    useEffect(() => {
        //Because updating current is not triggering re-render so we are seeing the previous value
        prevCount.current = count;
        console.log(`count is ${count} and prevCount is ${prevCount.current}`);
    }, [count])

    console.log(`direct-count is ${count} and prevCount is ${prevCount.current}`);
    return (
        <div>
            <p>
                Cureent count is  {count} and it used to be {prevCount.current}
            </p>
            <button type='button' onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    );
};




export default UseRef;