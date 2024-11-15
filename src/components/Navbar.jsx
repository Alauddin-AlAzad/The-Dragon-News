import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div></div>
            <div className='flex flex-row gap-2'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About </Link>
                <Link to='/carrer'>Carrer</Link>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <img src={user} alt="" />
              <button className='btn bg-black text-white btn-neutral lg:w-[140px] rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;