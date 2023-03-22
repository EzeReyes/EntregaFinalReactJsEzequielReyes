import React from "react";
import CardListComponent from "../../CardListComponent/CardListComponent";
import Carousel from "../../Carousel/Carousel";
import NetworkBanner from "../../NetworkBanner/NetworkBanner";

const Home = () => 
{
    return (
        <>
        <Carousel/>
        <CardListComponent greeting="Bienvenido" className="ItemListContainer"/>
        <NetworkBanner/>
    </>
    )
}

export default Home;