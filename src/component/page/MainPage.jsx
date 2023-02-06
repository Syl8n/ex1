import React, {useState} from "react";
import LoginPage from "./LoginPage";
import CommentPage from "./CommentPage";
import ThankYouPage from "./ThankYouPage";

export default function MainPage(props) {
    const [email, setEmail] = useState("");
    const [loggedIn, isLoggedIn] = useState(false);
    const [commented, isCommented] = useState(false);

    if(!loggedIn) {
        return <LoginPage email={email} setEmail={setEmail} isLoggedIn={isLoggedIn}/>;
    } else if(loggedIn && !commented){
        return <CommentPage email={email} isCommented={isCommented}/>;
    } else {
        return <ThankYouPage email={email}/>;
    }
}