import React from "react";
import styled from "styled-components";

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
    & > * {
        :not(:last-child) {
            margin-bottom: 8px;
        }
    }
`;

export default function ThankYouPage(props){
    const { email } = props;

    return (
        <Wrapper>
            <h1>Thank You {email}</h1>
            <Container>
                <p>we appreciate your comments: This course prepares me to become a full-stack developer</p>
            </Container>
        </Wrapper>
    );
}