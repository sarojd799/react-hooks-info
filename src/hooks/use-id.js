import React, { useId } from 'react';

function TextBox(props) {
    const id = useId();

    return (
        <div className='form-group' id={id}>
            <label>{props.label}</label>
            <input type="text" placeholder={`Enter ${props.label}`} />
        </div>
    )
}

function NumberInput(props) {
    const id = useId();

    return (
        <div className='form-group' id={id}>
            <label>{props.label}</label>
            <input type="number" placeholder={`Enter ${props.label}`} />
        </div>
    )
}

function FormGroup(props) {
    if (!props.inputType) return null;

    switch (props.inputType) {
        case "TEXT_BOX": return TextBox(props)
        case "NUMBER": return NumberInput(props)
        default: return null;
    }
}


function UseID(props) {
    return (
        <div>
            <FormGroup inputType="TEXT_BOX" label="name" />
            <FormGroup inputType="NUMBER" label="age" />
        </div>
    );
}

export default UseID;