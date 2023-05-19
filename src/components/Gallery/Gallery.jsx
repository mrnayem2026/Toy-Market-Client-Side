import image1  from '../../assets/imges/gallary1.jpg'
import image2  from '../../assets/imges/gallary2.jpg'
import image3  from '../../assets/imges/gallary3.jpg'
import image4  from '../../assets/imges/gallary6.png'
import image5  from '../../assets/imges/gallary5.png'
import image6  from '../../assets/imges/gallary6.png'

const Gallery = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-3xl lg:text-6xl font-Montserrat font-extrabold uppercase  text-sky-200 py-14">Products Gallery</h1>

            <div className="grid grid-cols-3 gap-4">
                <div ><img src={image1} alt="" className="rounded-xl"/></div>
                <div><img src={image2} alt="" className="rounded-xl" /></div>
                <div><img src={image3} alt="" className="rounded-xl" /></div>
                <div><img src={image4} alt="" className="rounded-xl" /></div>
                <div><img src={image5} alt="" className="rounded-xl" /></div>
                <div><img src={image6} alt="" className="rounded-xl" /></div>
            </div>
        </div>
    );
};

export default Gallery;