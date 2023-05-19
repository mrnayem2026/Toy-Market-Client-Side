import toys1 from '../../assets/imges/toys1.jpg'
import toys2 from '../../assets/imges/toys2.jpg'
import toys3 from '../../assets/imges/toys3.jpg'
import toys4 from '../../assets/imges/toys4.jpg'
import toys5 from '../../assets/imges/toys5.jpg'
import toys6 from '../../assets/imges/toys6.png'

const OurToys = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-center text-3xl lg:text-6xl font-Montserrat font-extrabold uppercase  text-sky-200 py-14">Toys Products</h1>

            <div className="grid lg:grid-cols-3 gap-5">
                {/* card 1  */}
                <div className="card w-96  text-white  bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    <figure className="px-10 pt-10">
                        <img src={toys1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-Montserrat font-bold">Captain America Action Figure</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. sequi modi?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </div>
                {/* card 1 end */}

                {/* card 2  */}
                <div className="card w-96 bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white">
                    <figure className="px-10 pt-10">
                        <img src={toys2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-Montserrat font-bold">Hulk Action Figure</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. sequi modi?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </div>
                {/* card 2 end */}

                {/* card 3  */}
                <div className="card w-96 bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white">
                    <figure className="px-10 pt-10">
                        <img src={toys3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-Montserrat font-bold">Spider-Man Action Figure</h2>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eos nam et exercitationem iure autem architecto dolor, sunt, veniam iste animi odio! Non, quos repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut quibusdam totam debitis distinctio rem.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </div>
                {/* card 3 end */}

                {/* card 4  */}
                <div className="card w-96 bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white">
                    <figure className="px-10 pt-10">
                        <img src={toys4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-Montserrat font-bold">Black Panther Action Figure</h2>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab molestias corporis quas rem praesentium mollitia impedit obcaecati sint possimus harum! Totam quo quos hic neque! Pariatur, repellendus. Repudiandae assumenda, quae voluptates quis, recusandae, error nihil pariatur a iusto nostrum dolorum corporis. Soluta aut temporibus nulla recusandae voluptate, cum ab sapiente?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </div>
                {/* card 4 end */}

                {/* card 5  */}
                <div className="card w-96 bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white">
                    <figure className="px-10 pt-10">
                        <img src={toys5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-Montserrat font-bold">Thor Action Figure</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. sequi modi?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </div>
                {/* card 5 end */}

                {/* card 6  */}
                <div className="card w-96 bg-base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white">
                    <figure className="px-10 pt-10">
                        <img src={toys6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-Montserrat font-bold">Iron Man Action Figure</h2>
                        <p className='text-sm'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nemo iste debitis, suscipit nobis ea inventore molestias, quos optio laborum, et iure repellat eveniet placeat omnis dolorum tempora accusantium reprehenderit aut possimus recusandae assumenda!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </div>
                {/* card 6 end */}
            </div>
        </div>
    );
};

export default OurToys;