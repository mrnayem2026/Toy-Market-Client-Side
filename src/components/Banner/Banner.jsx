import { Carousel } from "flowbite-react";
import banner1 from '../../assets/imges/banner1.jpg'
import banner2 from '../../assets/imges/banner2.jpg'
import banner3 from '../../assets/imges/banner3.jpg'

const Banner = () => {
    const containerStyle1 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh' // Set the desired height for the background
    };
    const containerStyle2 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh' // Set the desired height for the background
    };
    const containerStyle3 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh' // Set the desired height for the background
    };

    return (

            <div className="h-screen lg:py-10 lg:pt-10">
                <Carousel>
                    {/* 1ST BANNER  */}
                    <div style={containerStyle1} >
                        <div className="container mx-auto text-center lg:pt-80">
                            <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-200 font-Montserrat">Unleashing the Power of Action Figure Toys  in an Epic Marvel Universe</h1>
                            <p className="lg:py-6 lg:text-xl">
                                Embark on a thrilling journey with "Marvelous Adventures: Unleashing the Power of Action Figure Toys in an Epic Marvel Universe." <br /> Immerse yourself in the action-packed world of Marvel as your favorite superheroes.
                            </p>

                            <button className="btn text-black  text-3xl font-BebasNeue px-10  uppercase bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-blue-500 hover:to-cyan-500">Learn more</button>
                        </div>
                    </div>
                    {/* 2nd BANNER  */}
                    <div style={containerStyle2} >
                        <div className="container mx-auto text-center lg:pt-80">
                            <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-200 font-Montserrat">Action Figure Toys Conquer the Marvel Universe.</h1>
                            <p className="lg:py-6 lg:text-xl">
                                Embark on a thrilling journey with "Marvelous Adventures: Unleashing the Power of Action Figure Toys in an Epic Marvel Universe." <br /> Immerse yourself in the action-packed world of Marvel as your favorite superheroes.
                            </p>

                            <button className="btn text-black  text-3xl font-BebasNeue px-10  uppercase bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-blue-500 hover:to-cyan-500">Learn more</button>
                        </div>
                    </div>
                    {/* 3rd BANNER  */}
                    <div style={containerStyle3} >
                        <div className="container mx-auto text-center lg:pt-80">
                            <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-200 font-Montserrat">Exploring the Boundless Potential of Action Figure Toys in an Epic Marvel Universe.</h1>
                            <p className="lg:py-6 lg:text-xl">
                                Embark on a thrilling journey with "Marvelous Adventures: Unleashing the Power of Action Figure Toys in an Epic Marvel Universe." <br /> Immerse yourself in the action-packed world of Marvel as your favorite superheroes.
                            </p>

                            <button className="btn text-black  text-3xl font-BebasNeue px-10  uppercase bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-blue-500 hover:to-cyan-500">Learn more</button>
                        </div>
                    </div>
                </Carousel>
            </div>

    );
};

export default Banner;