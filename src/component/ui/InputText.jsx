import React from "react";
import styled from "styled-components";

const StyledText = styled.input`
    width: 275px;
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border-radius: 8px;
`;

const Label = styled.label`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export default function InputText(props) {
    const { label, type, height, value, onChange, immutable } = props;

    if(immutable){
        return (
            <Label>
                {label}
                <StyledText type={type} height={height} value={value} onChange={onChange} disabled/>
            </Label>
        );
    }
    return (
        <Label>
            {label}
            <StyledText type={type} height={height} value={value} onChange={onChange}/>
        </Label>
    );
}