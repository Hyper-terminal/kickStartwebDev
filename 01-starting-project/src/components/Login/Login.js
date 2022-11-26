import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

function userDetailReducer(state, action) {
    if (action.type === "USER_INPUT") {
        return {
            ...state,
            emailState: action.val,
            isValid: action.val.includes("@"),
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            ...state,
            EmailIsValid: state.emailState.includes("@"),
        };
    }

    if (action.type === "USER_PASSWORD") {
        return {
            ...state,
            passwordState: action.val,
            passwordIsValid: action.val.trim().length > 6,
        };
    }

    if (action.type === "PASSWORD_BLUR") {
        return {
            ...state,
            passwordIsValid: state.passwordState.trim().length > 6,
        };
    }

    return {
        emailState: "",
        EmailIsValid: undefined,
        passwordState: "",
        passwordIsValid: undefined,
    };
}

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [userState, dispatchUser] = useReducer(userDetailReducer, {
        emailState: "",
        EmailIsValid: undefined,
        passwordState: "",
        passwordIsValid: undefined,
    });

    const emailChangeHandler = (event) => {
        dispatchUser({ type: "USER_INPUT", val: event.target.value });

        setFormIsValid(
            event.target.value.includes("@") &&
                userState.passwordState.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        dispatchUser({ type: "USER_PASSWORD", val: event.target.value });

        setFormIsValid(
            userState.emailState.includes("@") &&
                event.target.value.trim().length > 6
        );
    };

    const validateEmailHandler = () => {
        dispatchUser({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchUser({ type: "PASSWORD_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(userState.emailState, userState.passwordState);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        userState.EmailIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={userState.emailState}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        userState.passwordIsValid === false
                            ? classes.invalid
                            : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={userState.passwordState}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
