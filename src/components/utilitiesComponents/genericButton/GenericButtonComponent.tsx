import { FC } from "react";
import style from "./GenericButtonComponent.module.css";

interface IButton {
    text: string;
    onClick(): any;
}
const GenericButtonComponent: FC<IButton> = ({ text, onClick }) => {
    return (
        <div className={style.btnConfigs}>
            <button>{text}</button>
        </div>
    )
}

export default GenericButtonComponent