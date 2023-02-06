import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    line-height: 20px;
    border-radius: 8px;
    cursor: pointer;
`;

export default function Button(props) {
    const { name, onClick } = props;

    return <StyledButton type="submit" onClick={onClick}>{name || "button"}</StyledButton>;
}