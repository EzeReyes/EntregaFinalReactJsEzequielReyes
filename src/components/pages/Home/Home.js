import React from "react";
import CardListComponent from "../../CardListComponent/CardListComponent";
import Carousel from "../../Carousel/Carousel";
import Clientes from "../../Clientes/Clientes";
import NetworkBanner from "../../NetworkBanner/NetworkBanner";

const Home = () => 
{
    return (
        <>
        <h1 className="Abuelo">Abuelo Mario, productos de barbería</h1>
        <Carousel/>
        <CardListComponent className="ItemListContainer"/>
        <Clientes/>
        <NetworkBanner/>
    </>
    )
}

export default Home;