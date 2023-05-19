import about from '../../assets/imges/about.jpg';

const AboutUs = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse lg:flex-row  gap-14 p-4 py-10 lg:py-20'>
         
           {/* left side   */}
           <div>
            <hr className='w-28 border-4 border-sky-500' />
             <h1 className='text-3xl lg:text-6xl font-Montserrat font-extrabold uppercase  text-sky-200 py-4'>About us</h1>
             <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero id at sunt? Incidunt voluptas dolorum facere fuga, eveniet labore consequatur voluptatibus ipsam, cupiditate ut nihil sed neque doloribus beatae. Recusandae placeat aspernatur modi eaque  <br /> perspiciatis consequatur laboriosam dolore! Laborum praesentium amet asperiores iure nobis? Vero doloremque, repellendus aspernatur neque eaque at repellat sit reprehenderit officia, laudantium dignissimos rerum itaque.
             </p> <br />
             <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero id at sunt? Incidunt voluptas dolorum facere fuga, eveniet labore consequatur voluptatibus ipsam, cupiditate ut nihil sed neque doloribus beatae. Recusandae placeat aspernatur modi eaque  <br /> perspiciatis consequatur laboriosam dolore! Laborum praesentium amet asperiores iure nobis? Vero doloremque, repellendus aspernatur neque eaque at repellat sit reprehenderit officia, laudantium dignissimos rerum itaque.
             </p> <br />
           </div>

             {/* right side   */}
             <div>
            <img src={about} alt="" className='h-6/6 rounded-3xl' />
           </div>
        </div>
    );
};

export default AboutUs;