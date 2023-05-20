import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ShopByCategoryCard = ({ product }) => {
    const { id, picture, name, price, rating } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <figure><img src={picture} alt="Album" className="w-full" /></figure>
            <div className="card-body">
                <div className=" ">
                    <h2 className="text-4xl font-Montserrat font-semibold uppercase">{name}</h2>
                    <p> <span className="text-xl text-sky-200 border-b-2 border-sky-400 py-2 "> Discription : </span> <br /> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore impedit repellat sunt saepe dolorum, dolores nobis veritatis laboriosam dignissimos. Qui consequuntur minima repudiandae quasi numquam. </p>
                    <p> <span className="text-xl text-sky-200 border-b-2 border-sky-400 py-2 "> Price : </span>${price}</p>

                    {/* Rating  */}
                    <div className='flex gap-2 pt-3'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating)} readOnly />
                        <span className='ms-2'> {rating}</span>
                    </div>
                </div>
                <button className="btn btn-primary btn-block my-4">View Details</button>
            </div>
        </div>
    );
};

export default ShopByCategoryCard;