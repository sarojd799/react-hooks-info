import React, { useEffect, useState } from 'react';

function UseEffectDemo(props) {
    const [color, setColor] = useState('black');

    console.log('render');

    //case-1: runs on each side effect
    //useEffect(() => console.log('effect-without-2nd-argument'))

    //case-2: runs on mount only
    //useEffect(() => console.log('effect-with-empty-arg'), [])

    //case-3: runs only on variable change
    useEffect(() => console.log('effect-with-array-with-value'), [color])

    //case-4: return type is for clean up
    // const [count, setCount] = useState(0);

    // function setClickCount() {
    //     setCount(prevCount => prevCount + 1);
    // }
    // useEffect(() => {
    //     console.log('mount')
    //     document.addEventListener('click', setClickCount);

    //     return function () {
    //         console.log('clean up');
    //         document.removeEventListener('click', setClickCount)
    //     }
    // }, [])


    return (
        <div>
            <p>
                {color}
            </p>
            <p>
                <button type="button" onClick={() => setColor('green')}>green</button>
                <button type="button" onClick={() => setColor('red')}>red</button>
                <button type="button" onClick={() => setColor('blue')}>blue</button>
            </p>
            {/* <p>
                {count}
            </p> */}

        </div>
    );
}

export default UseEffectDemo;