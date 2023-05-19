import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import OurToys from "../../components/OurToys/OurToys";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const Main = () => {
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OurToys></OurToys>
            <AboutUs></AboutUs>
        </>
    );
};

export default Main;