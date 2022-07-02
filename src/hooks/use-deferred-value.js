import React, { useState, useDeferredValue, useEffect, useRef } from 'react';


function ListComponent({ name }) {
    const deferredName = useDeferredValue(name);
    const items = useRef(Array(2000).fill(1).map(e => `item-${Math.random()}`))

    useEffect(() => {
        console.log(`name is ${name} and deferred name is  ${deferredName}`)
    }, [name, deferredName])

    return items && items.current && items.current.map((item, i) => <p key={`item-${i}`}>{item}</p>)
}

export default function UseDeferredValueComponent() {
    const [name, setName] = useState("")
    function handleChange(e) {
        setName(e.target.value)
    }

    return <div className="height-100 width-100">
        <input type="text" value={name} onChange={handleChange} />
        <ListComponent name={name} />
    </div>
}