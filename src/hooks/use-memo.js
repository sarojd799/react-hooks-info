import React, { useEffect, useMemo, useState } from 'react';

function expensiveComputation(count) {
    for (let i = 0; i < 100000000000; i++) { }
    return count * 2;
}


function UseMemoDemo(props) {

    let [color, setColor] = useState(0);
    let [count, setCount] = useState(0)
    //multiple memo  hook usage is not adviced as it is also a function which gets call  to check comparision
    const doubleNumber = useMemo(() => expensiveComputation(count), [count])
    //const doubleNumber = expensiveComputation(count) //such computation and result needs to be memoized
    const theme = useMemo(() => ({
        backgroundColor: color ? 'white' : 'Black',
        color: color ? 'black' : 'white'
    }), [color])
    // const theme = {
    //     backgroundColor: color ? 'white' : 'Black',
    //     color: color ? 'black' : 'white'
    // }

    useEffect(() => console.log('Theme changed'), [theme])

    return (
        <div>
            <p>
                <input type="number" value={count} onChange={e => setCount(e.target.value)} />
            </p>
            <p style={theme}>
                Some text whose value is going to be changed
                <button onClick={e => setColor(prevColor => !prevColor)}>
                    Change Theme
                </button>
            </p>
            <p>
                and the double is {doubleNumber}
            </p>
        </div>
    );
}



export default UseMemoDemo;