import style from "./RecentlyPlayedComponent.module.css";
import album from "./../../../img/album.svg";

const RecentlyPlayedComponent = () => {
    return (
        <div className={style.recentlyPlayedContainer}>
            <div className={style.scrollContainer}>
                <div className={style.scrollContent}>
                    <div className={style.cards}>
                        <div className={style.cardSong}>
                            <div className={style.coverAlbum}>
                                <img src={album} alt="" />
                            </div>
                            <div className={style.albumData}>
                                <h3>0X1=LOVESONG</h3>
                                <h4>TOMORROW X TOGETHER</h4>
                            </div>
                        </div>



                        <div className={style.cardSong}>
                            <div className={style.coverAlbum}>
                                <img src={album} alt="" />
                            </div>
                            <div className={style.albumData}>
                                <h3>0X1=LOVESONG (I Know I Love You) feat.Seori</h3>
                                <h4>TOMORROW X TOGETHER</h4>
                            </div>
                        </div>

                        <div className={style.cardSong}>
                            <div className={style.coverAlbum}>
                                <img src={album} alt="" />
                            </div>
                            <div className={style.albumData}>
                                <h3>0X1=LOVESONG</h3>
                                <h4>TOMORROW X TOGETHER</h4>
                            </div>
                        </div>

                        <div className={style.cardSong}>
                            <div className={style.coverAlbum}>
                                <img src={album} alt="" />
                            </div>
                            <div className={style.albumData}>
                                <h3>0X1=LOVESONG (I Know I Love You) feat.Seori</h3>
                                <h4>TOMORROW X TOGETHER</h4>
                            </div>
                        </div>

                        <div className={style.cardSong}>
                            <div className={style.coverAlbum}>
                                <img src={album} alt="" />
                            </div>
                            <div className={style.albumData}>
                                <h3>0X1=LOVESONG</h3>
                                <h4>TOMORROW X TOGETHER</h4>
                            </div>
                        </div>

                        <div className={style.cardSong}>
                            <div className={style.coverAlbum}>
                                <img src={album} alt="" />
                            </div>
                            <div className={style.albumData}>
                                <h3>0X1=LOVESONG (I Know I Love You) feat.Seori</h3>
                                <h4>TOMORROW X TOGETHER</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentlyPlayedComponent