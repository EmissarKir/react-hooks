import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const handleClick = () => (isAuth ? onLogOut() : onLogin());

    return (
        <>
            {isAuth ? (
                <button className="btn btn-primary" onClick={handleClick}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={handleClick}>
                    Войти
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
