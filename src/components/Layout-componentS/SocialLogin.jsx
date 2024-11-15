import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='mb-5 ml-6 font-semibold text-xl'>Login With</h2>
             <div className='flex flex-col gap-2 px-2'>
                <button className='btn  border-2 bg-base-100 w-full'> <FcGoogle /> Login With Google</button>
                <button className='btn  border-2 bg-base-100 w-full'> <FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;