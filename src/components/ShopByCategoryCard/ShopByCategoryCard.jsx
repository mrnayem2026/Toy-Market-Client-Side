const ShopByCategoryCard = ({ product }) => {
    const { id, picture, name, price, rating } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <figure><img src={picture} alt="Album" className="w-full" /></figure>
            <div className="card-body">
                <div className=" ">
                    <h2 className="text-4xl font-Montserrat font-semibold uppercase">{name}</h2>
                    <p> <span className="text-xl text-sky-200 border-b-2 border-sky-400 py-2 "> Discription : </span> <br /> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore impedit repellat sunt saepe dolorum, dolores nobis veritatis laboriosam dignissimos. Qui consequuntur minima repudiandae quasi numquam. </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryCard;