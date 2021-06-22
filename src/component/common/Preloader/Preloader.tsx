import React from "react";
import PreloaderImg from "../../../assets/images/loading-97.gif";
import style from "./preloader.module.css"

const Preloader = () => {
    return <div>
        <img className={style.img} src={PreloaderImg}/>
    </div>
}

export default Preloader;