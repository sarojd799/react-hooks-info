import React, { useReducer } from 'react';


const numReducer = function (state, action) {
    if (action.type === 'increment') {
        return { ...state, count: state.count + 1 };
    } else if (action.type === 'decrement') {
        return { ...state, count: state.count - 1 }
    }
    return state;
}

const initArg = function (arg) {
    return { count: arg }
}

const UseReducer = () => {

    /**
     * useful when state is complex and update logic is complex
     * const [state, dispatch] = useReducer(reducerFn, initialArg, init);
     * where init is a lazy way to  define  initial state value
     */

    const [state, dispatch] = useReducer(numReducer, 0, initArg)

    return (
        <div>
            <p>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <span>
                    &nbsp;
                    {state.count}
                    &nbsp;
                </span>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </p>
        </div>
    );
};

export default UseReducer;