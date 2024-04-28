import React from 'react';
import NavBar from "../components/NavBar";
import SwiperComponent from "../components/Swiper";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import Footer from "../components/Footer";
import FiveSection from "../components/FiveSection";

const MainPage = () => {
    return (
        <>
            <NavBar/>
            <SwiperComponent/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FiveSection/>
            <Footer/>
        </>
    );
};

export default MainPage;