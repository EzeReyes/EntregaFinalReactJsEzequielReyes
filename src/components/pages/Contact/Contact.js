import React from "react";
import "./Contact.css";
import Iframe from 'react-iframe'
import NetworkBanner from "../../NetworkBanner/NetworkBanner";

const Contact = () => 
{
    return (
    <>
        <p>Encontranos en 3 de Febrero 9197, Mar Del Plata</p>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d10580.810364026625!2d-57.615409428045055!3d-37.96093636254779!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x9584d85aa6f52677%3A0x412fc15b0f6a9aca!2s3%20de%20Febrero%209197%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-37.9626332!2d-57.6105077!4m5!1s0x9584d90f4b8d52e5%3A0xe0a71eeb526f2e03!2sReyesBarber%2C%203%20de%20Febrero%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-37.9626312!2d-57.6103163!5e0!3m2!1ses-419!2sar!4v1665414699862!5m2!1ses-419!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </Iframe>
        <NetworkBanner/>
    </>
    )
}

export default Contact;