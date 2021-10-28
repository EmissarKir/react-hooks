import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // with Callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    // withOut Callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withCallback.current}</p>
            <p>Render withCallback: {withOutCallback.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                onChange={handleChange}
                id="name"
                className="form-control"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
