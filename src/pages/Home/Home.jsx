
import { Outlet } from 'react-router-dom';
import Header from '../Sheared/Header/Header';
import Footer from '../Sheared/Footer/Footer';


const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </>
    );
};

export default Home;