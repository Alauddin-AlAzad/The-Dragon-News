import React from 'react';
import Logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className="logo">

                <img className='w-[271px] h-16' src={Logo} alt="" />
            </div>
            <h1 className='text-[18px] text-[#706F6F] font-popins'>Journalism Without Fear or Favour</h1>
            <p className='font-medium text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header