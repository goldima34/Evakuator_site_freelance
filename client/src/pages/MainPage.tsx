import React from 'react';
import NavBar from "../components/NavBar";
import SwiperComponent from "../components/Swiper";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <>
            <NavBar/>
            <SwiperComponent/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Footer/>
        </>
    );
};

export default MainPage;