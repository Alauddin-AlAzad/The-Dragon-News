import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex flex-row items-center gap-2 bg-[#F3F3F3]'>
            <h3 className='bg-[#D72050] text-base-100 px-6 py-2 my-4'>Latest</h3>
            <Marquee pauseOnHover={true} className='space-x-3 font-bold'>
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, vero!
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, vero!
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, vero!
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, vero!
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;