import React, { useRef } from 'react';

/*
  We can't create a ref and manually pass it to children, it will throw error
*/
function Child(props) {
    return (
        <button ref={props.ref} onClick={e => console.log('Hey ya!')}>
            child button
        </button>
    )
}
function ForwardRef(props) {

    const btnRef = useRef();

    return (
        <div>
            <Child ref={btnRef} />
        </div>
    );
}

export default ForwardRef;