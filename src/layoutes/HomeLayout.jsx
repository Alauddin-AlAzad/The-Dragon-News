import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/Layout-componentS/LeftNav';
import RightNav from '../components/Layout-componentS/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-popins'>
            <header>
                <Header></Header>
                <section className='lg:w-[1140px] w-[95%] h-20 mx-auto my-4 '>
                    <LatestNews></LatestNews>
                </section>


            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'><LeftNav></LeftNav></aside>
                <section className='col-span-6'>  <Outlet></Outlet></section>
                <aside className='col-span-3 '><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;