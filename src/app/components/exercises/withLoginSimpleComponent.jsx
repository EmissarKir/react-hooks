import React from "react";
import CardWrapper from "../common/Card";

const withLoginSimpleComponent = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const onLogin = () => {
        localStorage.setItem("user", "123456789");
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
            ;
        </CardWrapper>
    );
};

export default withLoginSimpleComponent;
