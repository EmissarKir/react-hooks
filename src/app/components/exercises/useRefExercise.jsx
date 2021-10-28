import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
const UseRefExercise = () => {
    const changeBlock = useRef();

    const handleClick = () => {
        console.log(changeBlock.current);
        changeBlock.current.textContent = "Text";
        changeBlock.current.style.height = "150px";
        changeBlock.current.style.width = "80px";
        changeBlock.current.style.color = "#fff";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={changeBlock}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <SmallTitle>Решение ДОМАШНЕГО ЗАДАНИЯ</SmallTitle>
            <Divider />

            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Изменить размеры и текст
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
