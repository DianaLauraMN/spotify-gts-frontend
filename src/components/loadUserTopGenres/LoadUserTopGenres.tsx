import style from "./LoadUserTopGenres.module.css";
import { useEffect, useState } from "react";
import ApiUser from "../../api/ApiUser";
import { IApiUserControllerCalls } from "../../api/interfaces/IApiUser"; 
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";

const apiUser: IApiUserControllerCalls = new ApiUser();

const LoadUserTopGenres = () => {
    const [genres, setGenres] = useState<string[] | undefined>(undefined);
    useEffect(() => {
        (async () => {
            const userTopGenres = await apiUser.getUserTopGenres();
            setGenres(userTopGenres);
        })();
    }, []);

    return (
        <div className={style.genresBtnsContainer}>
            {
                genres?.map((genre, key) => (
                    <div key={key}>
                        <GenericButtonComponent text={genre} onClick={() => { }} />
                    </div>
                ))
            }
        </div>
    )
}

export default LoadUserTopGenres;