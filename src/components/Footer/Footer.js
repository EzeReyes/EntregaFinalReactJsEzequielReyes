import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
    <>
    <footer className="Footer">
        <img className="Img" src="https://dnp4fok4drjmm.cloudfront.net/pages/altagama/715_c1e324db69601a300f8cc33bc9357352.png" alt="logo" />
        <div className="selectorDeNav">
            <span className="tituloNav">Navegación</span>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
            <Link className="link" to="/cart">Cart</Link>
        </div>
        <p className="tituloNav"> &copy; 2023</p>
        <div>
            <span className="tituloNav">Redes Sociales ➡️</span>
        <a target="blank" href="https://api.whatsapp.com/send?phone=542236690513"><img className="Img" src="https://cdn.pixabay.com/photo/2016/11/21/08/44/whatsapp-1844471_640.png" alt="logoWhatsapp"/></a>
        <a target="blank" href="https://www.instagram.com/abuelo_mario777"><img className="Img" src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="ImgInstagram"/></a>
        </div>
    </footer>
        </>
    )
};

export default Footer;
