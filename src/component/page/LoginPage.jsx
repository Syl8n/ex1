import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import InputText from "../ui/InputText";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const Container = styled.div`
    width: max-content;
    max-width: 400px;
    padding: 16px;
    border: 2px solid lightgrey;
    & > * {
        :not(:last-child) {
            margin-bottom: 8px;
        }
    }
`;

export default function LoginPage(props){
    const { email, setEmail, isLoggedIn } = props;
    const [password, setPassword] = useState("");

    return (
        <Wrapper>
            <h1>Login to evalute the course:</h1>
            <Container>
                <InputText
                    label="Email:"
                    type="text"
                    height={16}
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <InputText
                    label="Password:"
                    type="password"
                    height={16}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button
                    name="Login"
                    onClick={(event) => {
                        event.preventDefault();
                        isLoggedIn(true);
                        alert(`Email:${email}\nPassword:${password}
                        \nClick OK for the next step!`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}