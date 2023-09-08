import { FC } from "react";
import style from "./GenericButtonComponent.module.css";
import { useState } from "react";

interface IButton {
    isLevel?: boolean;
    text: string;
    onClick(): any;
}

const GenericButtonComponent: FC<IButton> = ({ isLevel, text, onClick }) => {
    const [selected, setSelected] = useState<true | false>(false);
    const handleButtonClick = () => {
        const aux=onClick();
        if (aux) {
            setSelected(true);
        }
        selected ? setSelected(false) : setSelected(true);
        //console.log(onClick());
    };

    return (
        <div className={style.btnConfigs}>
            {/**className={selected ? style.btnSelected : style.btnNotSelected} */}
            <button onClick={handleButtonClick}  className={selected ? style.btnSelected : style.btnNotSelected}>
                {text}
            </button>
        </div>
    )
}

export default GenericButtonComponent