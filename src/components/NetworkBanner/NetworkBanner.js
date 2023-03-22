import React from "react";
import "./NetworkBanner.css"


const NetworkBanner = () => {

    return (
        <div className="bannerInsta">
            <a target="blank" href="https://www.instagram.com/abuelo_mario777"><img src="./images/instagram.svg" alt="instagram"/></a>
            <div className="bannerText">
            <p>Seguinos en Instagram</p>
            <span className="abuelo">@abuelo_mario777</span>
            </div>
        </div>
    );
}

export default NetworkBanner;


