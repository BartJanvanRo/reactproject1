import React from "react";
import Product from "../Product";
import "./Home.css";

const Home = () => {
    return <div className="home">
        <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="homeRow">
            <Product
                id="121212121"
                title="Een titel"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />
            <Product
                id="121212121"
                title="Javaanse danser: Raden Mas Jodjana "
                price={11.96}
                rating={5}
                image="https://vanabbemuseum.nl/fileadmin/_processed_/8/f/csm_0172-01_e99133420f.jpg"
            />
        </div>
        <div className="homeRow">
            <Product
                id="121212121"
                title="Een titel"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />
            <Product
                id="22332423"
                title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400) "
                price={211.96}
                rating={4}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
            />
            <Product
                id="121212121"
                title="Le bain des vagabonds"
                price={213411.96}
                rating={2}
                image="https://vanabbemuseum.nl/fileadmin/_processed_/7/5/csm_0911-01_9f58f69240.jpg"
            />
        </div>;
    </div>
};

export default Home;
