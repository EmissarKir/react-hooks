import React, { useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const [data, setData] = useState({
        email: ""
    });

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-labael">
                Email
            </label>
            <input
                type="email"
                ref={inputRef}
                name="email"
                id="email"
                value={data.email}
                className="form-control"
                onChange={handleChange}
            />
            <div className="mt-2">
                <button className="btn btn-primary" onClick={handleClick}>
                    FOCUS input
                </button>
                <button
                    className="btn btn-secondary ms-2"
                    onClick={handleClickWidth}
                >
                    Изменить ширину
                </button>
            </div>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
