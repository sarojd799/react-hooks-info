import React, { useEffect, useState } from 'react';

//variation:1

// function UseStateDemo(props) {
//     const [name, setName] = useState('');

//     console.log('render');

//     useEffect(() => {
//         if (!name) {
//             setName(() => prompt('What is your name?'))
//         }
//     }, [name])

//     return (
//         <div>
//             {name}
//         </div>
//     );
// }

//variation:2

function UseStateDemo(props) {

    //case-1:
    //use state is called each time state updates to better
    // const initialCount = function () {
    //     console.log('check');
    //     return 0;
    // }
    // const [count, setCount] = useState(initialCount())

    //case-2: in setState callback the return value overrides the state  and not updates part of it
    //so better to use spread operator while returning the state object from callback
    // const [state, setState] = useState({ count: 0 , theme:'blue'})
    // function increment() {
    //     setState((prevState)=> {
    //          return  {count: prevState.count + 1}
    //     })
    // }

    const [count, setCount] = useState(() => {
        console.log("inside use state")
        return 0
    });

    console.log('render');

    function doubleIncrementCount() {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    //case-3:scope value of  count is 0  so it would set to 1 each time
    function singleIncrement() {

        setCount(count + 1);
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }

    return (
        <div>
            <button className="btn" disabled={count === 10} onClick={singleIncrement}>+</button>
            {count}
            <button className="btn" disabled={count === 0} onClick={decrementCount}>-</button>
        </div>
    );
}

// class UseStateDemo extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         }
//     }

//     componentDidMount() {
//         this.setState({ name: prompt('Enter your name') })
//     }

//     render() {
//         return (
//             <h2>
//                 {this.state.name}
//             </h2>
//         )
//     }
// }
export default UseStateDemo;