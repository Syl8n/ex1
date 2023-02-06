import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import InputText from "../ui/InputText";
import TextArea from "../ui/TextArea";

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

export default function CommentPage(props){
    const { email, isCommented } = props;
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [comments, setComments] = useState("");

    return (
        <Wrapper>
            <Container>
                <InputText
                    label="Course Code:"
                    type="text"
                    height={16}
                    value={code}
                    onChange={(event) => {
                        setCode(event.target.value);
                    }}
                />
                <InputText
                    label="Course Name:"
                    type="text"
                    height={16}
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <InputText
                    label="Student Email:"
                    type="text"
                    height={16}
                    value={email}
                    immutable={true}
                />
                <TextArea
                    label="Comments:"
                    height={200}
                    value={comments}
                    onChange={(event) => {
                        setComments(event.target.value);
                    }}
                />
                <Button
                    name="Submit"
                    onClick={(event) => {
                        event.preventDefault();
                        isCommented(true);
                        alert(`Course Code: ${code}\nCourse Name: ${name}\nStudent Email: ${email}\nComments: ${comments}
                            \nClick OK to complete evaluation!`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}