import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon, } from '@heroicons/react/24/solid'
import { useState } from 'react';





const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
        <div className='top-0'>
            <nav className='relative container  mx-auto flex justify-between  my-7 '>
                <Link to='/'>
                    <h1 className='font-BebasNeue text-5xl'>Action World</h1>
                </Link>

                <div>
                    {/* Nav Items Section for lerge device start*/}
                    <ul className='text-xl font-medium  items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/all_toys'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/my_toys'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                My Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/add_a_toys'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Add A Toy
                            </NavLink>
                        </li>
                        <li>
                            <Link
                                to='/add_a_toys'
                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                            >
                                <button className="btn btn-outline btn-primary text-3xl font-BebasNeue px-10">Login</button>
                            </Link>
                        </li>
                    </ul>
                    {/* Nav Items Section for lerge device End*/}

                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>
                                                <h1 className='font-BebasNeue text-5xl text-black'>Action World</h1>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/all_toys'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    All Toys
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/my_toys'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    My Toys
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/add_a_toys'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Add A Toy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/add_a_toys'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    <button className="btn btn-outline btn-primary">Button</button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;