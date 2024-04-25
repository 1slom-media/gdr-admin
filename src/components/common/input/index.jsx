import React from "react";
import { Input } from "antd";
import './styles.css'


const InputCommon = ({placeholder, defaultValue, type, onChange}) => {
    return (
        <>
            <Input defaultValue={defaultValue} placeholder={placeholder} type={type} onChange={onChange} />
        </>
    )
}

export default InputCommon