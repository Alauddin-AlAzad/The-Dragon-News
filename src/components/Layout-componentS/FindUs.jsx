import React from 'react';
import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'
const FindUs = () => {
    return (
        <div>
            <h2 className='mb-5 ml-6 mt-[32px]  font-semibold text-xl'>Login With</h2>
            <div className='flex flex-col px-2'>
                <button className='btn rounded-none border-2 border-b-0 bg-base-100 w-full justify-start'> <img className='mr-2 rounded-full' src={fb} alt="" />Facebook</button>
                <button className='btn rounded-none border-2 border-b-0 bg-base-100 w-full justify-start'> <img className='mr-2 rounded-full' src={twitter} alt="" /> Twitter</button>
                <button className='btn rounded-none border-2 bg-base-100 w-full justify-start'> <img className='mr-2 rounded-full' src={insta} alt="" /> instagram</button>
            </div>
        </div>
    );
};

export default FindUs;