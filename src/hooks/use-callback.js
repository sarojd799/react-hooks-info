import React, { useCallback, useState } from 'react';
import { memo } from "react";

/*
  React.memo() was released with React v16.6
  React.memo() is a higher-order component (HOC), 
  which is a fancy name for a component that takes a component as a prop and returns 
  a component that prevents a component from re-rendering if the props (or values within it) 
  have not changed
*/
function CustomBtn({ todos, addTodo }) {

    console.log('child rendered', { todos, addTodo })
    return (
        <>
            <p>
                <button
                    type="button"
                    onClick={e => addTodo()}>
                    Add TODO
                </button>
            </p>
            <p>
                {todos ? todos.map((todo, i) => {
                    return (
                        <React.Fragment key={`todo-${i}`}>
                            <span>
                                {todo}
                            </span>
                            <br />
                        </React.Fragment>
                    )
                }) : null}
            </p>
        </>
    )
}

const CustomBtnComponent = memo(CustomBtn);


function UseCallback(props) {

    /*
    1.useful when you want to memoize a callback
    2.You can pass arguments to usecallback hook
    3.suppose you have a function that you want to run only when variable changes

    This is useful when passing callbacks to optimized child 
    components that rely on reference equality to prevent unnecessary renders

    useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
    */
    const [count, setCount] = useState(() => 0);
    const [todos, setTodos] = useState(() => [])

    // const addTodo = () => {
    //     setTodos(prevTodo => [...prevTodo, `TODO-${prevTodo.length + 1}`])
    // }
    const addTodo = useCallback(() => {
        console.log(todos.join());
        setTodos(prevTodo => [...prevTodo, `TODO-${prevTodo.length + 1}`])
    }, [todos])

    return (
        <div>
            <p>
                <button type='button' onClick={e => setCount(prevCount => prevCount + 1)}>Click</button>
                Here to increment value of count
            </p>
            <p>
                Count value is {count}
            </p>
            <CustomBtnComponent addTodo={addTodo} todos={todos} />
        </div>
    );
}

export default UseCallback;