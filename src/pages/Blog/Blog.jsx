import card1 from '../../assets/imges/card1.png'
import card2 from '../../assets/imges/card2.png'
import card3 from '../../assets/imges/card3.png'
import card4 from '../../assets/imges/card4.png'

const Blog = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-7xl font-BebasNeue font-semibold text-sky-400 text-center py-16">Some important blog</h1>

            <div className='flex justify-evenly'>
                {/* card block 1 */}
                <div>
                    {/* 1st card  start*/}
                    <div className="card w-96 bg-slate-800 shadow-xl">
                        <figure><img src={card1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl pb-4">What is an access token and refresh token?</h2>
                            <p> How do they work and where should we store them on the client-side?</p>
                            <div className="card-actions justify-end">
                                <label className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-block" htmlFor="my-card-1">Learn more</label>
                            </div>
                        </div>
                    </div>


                    {/* Modal 1 */}
                    <input type="checkbox" id="my-card-1" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div className='p-5'>
                                <h3 className="font-bold text-3xl ">What is an access token and refresh token?<br /> How do they work and where should we store them on the client-side?</h3>
                                <p className="py-4 uppercase text-xl">access token</p>
                                <p className='text-sm'>
                                    An access token is a tiny piece of code that contains a large amount of data. <br /> Information about the user, permissions, groups, and timeframes <br /> is embedded within one token that passes from a server to a user's device.
                                </p>
                                <p className="py-4 uppercase text-xl">refresh token</p>
                                <p className='text-sm'>
                                    The refresh token is used to generate a new access token. <br /> Typically, if the access token has an expiration date, <br />
                                    once it expires, the user would have to authenticate again to obtain an access token.
                                </p>

                                <p className="py-4 uppercase text-xl">When using access tokens and refresh tokens on the client-side.</p>
                                <p className='text-sm'>
                                    <ul className='list-disc'>
                                        <li>The client application initiates the authentication process by sending the user's credentials to the authentication server.</li>
                                        <li>If the authentication is successful, the authentication server generates an access token and a refresh token. The access token is typically included in the response to the client, while the refresh token may be sent separately or stored securely on the server.</li>
                                        <li>The client includes the access token in the authorization header or as a parameter in each request made to the server to access protected resources. The server validates the access token, granting access to the requested resources if the token is valid and has not expired.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-card-1" className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-wide">Closs!</label>
                            </div>
                        </div>
                    </div>


                    {/* 1st card  end*/}

                    {/* 2nd card  start*/}
                    <div className="card w-96 bg-slate-800 shadow-xl my-10">
                        <figure><img src={card2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className=" text-3xl  ">Compare SQL and NoSQL databases?</h2>
                            <p>
                                SQL and NoSQL are two different types of database management systems.</p>
                            <div className="card-actions justify-end">
                                <label className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-block" htmlFor="my-card-2">Learn more</label>
                            </div>
                        </div>
                    </div>

                    {/* Modal 2 */}
                    <input type="checkbox" id="my-card-2" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div className='p-5'>
                                <h3 className="font-bold text-3xl ">Compare SQL and NoSQL databases?</h3>
                                <p className="py-4 font-xl uppercase">Data Model</p>
                                <ul className='list-disc'>
                                    <li>SQL databases follow a rigid and structured schema where data is organized into tables with predefined columns and relationships between tables (relational model). Data is stored in rows and columns.</li>
                                    <li>NoSQL databases offer a flexible and schema-less data model. They can store data in various formats like key-value pairs, documents, column families, or graphs. There is no fixed schema, and each record/document can have a different structure.</li>
                                </ul>

                                <p className="py-4 font-xl uppercase">Query Language</p>
                                <ul className='list-disc'>
                                    <li>SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized way to retrieve, insert, update, and delete data. It offers powerful querying capabilities, including complex joins, aggregations, and transactions.</li>
                                    <li>NoSQL databases use a variety of query languages depending on the database type. For example, MongoDB uses a JSON-like query language, while Cassandra uses a CQL (Cassandra Query Language). The query languages in NoSQL databases are often less expressive than SQL but optimized for specific data models.</li>
                                </ul>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-card-2" className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-wide">Closs!</label>
                            </div>
                        </div>
                    </div>
                    {/* 2nd card  end*/}
                </div>

                {/* card block 2*/}
                <div>
                    {/* 3rd card  start*/}
                    <div className="card w-96 bg-slate-800 shadow-xl ">
                        <figure><img src={card3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl ">What is MongoDB aggregate and how does it work?</h2>
                            <p>In MongoDB, the aggregate method is a powerful feature that allows you...</p>
                            <div className="card-actions justify-end">
                                <label className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-block" htmlFor="my-card-3">Learn more</label>
                            </div>
                        </div>
                    </div>
                    {/* Modal 3 */}
                    <input type="checkbox" id="my-card-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div className='p-5'>
                                <h3 className="font-bold text-3xl">What is MongoDB aggregate and how does it work?</h3>
                                <p className="py-4">In MongoDB, the aggregate method is a powerful feature that allows you to perform <br />
                                    advanced data aggregation operations on collections. <br />
                                    It provides a flexible and expressive way to process and transform data within MongoDB.</p>

                                <p className='text-xl uppercase py-3'> used stages in the aggregate framework</p>
                                <ul className='list-disc'>
                                    <li>$match: This stage filters the documents based on specified criteria, similar to the find operation. It uses query operators to match specific fields or conditions.</li>
                                    <li>$group: This stage groups the documents based on a specified key or keys and allows you to perform aggregate functions like counting, summing, averaging, or any other custom calculations on grouped data.</li>
                                    <li>$project: This stage shapes the output documents by selecting specific fields or adding computed fields. It can also be used to rename fields, exclude fields, or include computed expressions.</li>
                                </ul>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-card-3" className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-wide">Closs!</label>
                            </div>
                        </div>
                    </div>
                    {/* 3rd card  end*/}

                    {/* 4th card  start*/}
                    <div className="card w-96 bg-slate-800 shadow-xl my-10">
                        <figure><img src={card4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl ">What is Express JS? What is Nest JS?</h2>
                            <p> Express.js is a popular web application framework for Node.js.....</p>
                            <div className="card-actions justify-end">
                                <label className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-block" htmlFor="my-card-4">Learn more</label>
                            </div>
                        </div>
                    </div>

                    {/* Modal 4 */}
                    <input type="checkbox" id="my-card-4" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div className='p-5'>
                                <h3 className="font-bold text-3xl">What is Express JS? What is Nest JS?</h3>
                                <p className="py-4 uppercase text-xl">express JS</p>
                                <p>
                                    Express.js is a popular web application framework for Node.js. It provides a set of features <br /> and tools that simplify the process of building web applications and APIs. <br /> Express.js is known for its minimalistic and unopinionated design, <br /> allowing developers to have flexibility and control over their application structure and logic.
                                </p>
                                <p className="py-4 uppercase text-xl">Nest JS</p>
                                <p>

                                    NestJS is a powerful and popular open-source framework for building scalable and <br /> maintainable server-side applications using Node.js. It is built with <br /> TypeScript and takes advantage of modern JavaScript features and concepts, <br /> including decorators, modules, and dependency injection.
                                </p>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-card-4" className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10 btn-wide">Closs!</label>
                            </div>
                        </div>
                    </div>
                    {/* 4th card  end*/}
                </div>
            </div>
        </div>
    );
};

export default Blog;