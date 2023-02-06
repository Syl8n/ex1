import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

const Label = styled.label`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export default function TextArea(props) {
    const { label, height, value, onChange } = props;

    return (
        <Label>
            {label}
            <StyledTextarea height={height} value={value} onChange={onChange} />
        </Label>
    );
}