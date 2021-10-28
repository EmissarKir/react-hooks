import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

// Компонент LogOutButton
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
const MemoizedLogOutMemo = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);
    return (
        <>
            <button
                className="btn btn-primary me-3"
                onClick={() => {
                    setState(!state);
                }}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutMemo onClick={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
