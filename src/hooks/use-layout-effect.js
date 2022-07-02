import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

/*

 1.useLayoutEffect is identical to useEffect, but it’s major key difference is that it gets triggered 
 synchronously after all DOM mutation.
 
 
 */
function UseLayoutEffect(props) {

    const [visibility, setVisibility] = useState(() => false);
    const popupRef = useRef()
    const btnRef = useRef();

    useEffect(() => {
        if (popupRef.current && btnRef.current) {
            const { bottom } = btnRef.current.getBoundingClientRect();
            popupRef.current.style.top = `${bottom + 25}px`
        }
    }, [visibility])

    // useLayoutEffect(() => {
    //     if (popupRef.current && btnRef.current) {
    //         for (let i = 0; i < 100000000; i++) { }
    //         const { bottom } = btnRef.current.getBoundingClientRect();
    //         popupRef.current.style.top = `${bottom + 25}px`
    //     }
    // }, [visibility])


    return (
        <div>
            <p>
                <button ref={btnRef} type="button" className="btn-pad-051" onClick={e => setVisibility(prevState => !prevState)}>
                    Toggle popup
                </button>
            </p>
            {visibility ? <div className='popup' ref={popupRef}>popup</div> : null}
        </div>
    );
}

export default UseLayoutEffect;