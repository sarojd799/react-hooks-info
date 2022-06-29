import React, { useImperativeHandle, useRef } from 'react';
import './app.css'

function Box(props, ref) {

    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();

    useImperativeHandle(ref, () => {
        return {
            animateFirst: () => box1.current.classList.toggle('animate'),
            animateSecond: () => box2.current.classList.toggle('animate'),
            animateThird: () => box3.current.classList.toggle('animate')
        }
    })

    return (
        <p>
            <span className='box-1' ref={box1}>BOX-1</span>
            <span className='box-2' ref={box2}>BOX-2</span>
            <span className='box-3' ref={box3}>BOX-3</span>
        </p>
    )
}

const BoxComponent = React.forwardRef(Box);

function UseImperativeHandle(props) {

    const boxRef = useRef();
    return (
        <div className='use-imperative-handle-component'>
            <p className='animate-btn-bar'>
                <button onClick={e => boxRef.current.animateFirst()}>Animate First</button>
                <button onClick={e => boxRef.current.animateSecond()}>Animate Second</button>
                <button onClick={e => boxRef.current.animateThird()}>Animate Third</button>
            </p>
            <BoxComponent ref={boxRef} />
        </div>
    );
}

export default UseImperativeHandle;