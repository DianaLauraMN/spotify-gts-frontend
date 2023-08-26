import style from "./CardSongComponent.module.css";
import album from "./../../img/album.svg";

const CardSongComponent = () => {
    return (
        <div className={style.cardSongContainer}>
            <div className={style.titleContainer}>
                <h1>Guess The Song</h1>
            </div>
            <div className={style.albumContainer}>
                <div className={style.albumCover}>
                    <img src={album} alt="Album" />
                </div>
                <div className={style.albumDataContainer}>
                    <h2 className={style.titleSong}>0X1=LOVESONG (I Know I Love You) feat.Seori</h2>
                    <h3 className={style.artistSong}>TOMORROW X TOGETHER</h3>
                    <h3 className={style.albumSong}>THE CHAOS CHAPTER: FIGHT OR ESCAPE</h3>
                </div>
            </div>
        </div>
    )
}

export default CardSongComponent