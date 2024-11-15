import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

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
            <main className='p-5'>
                <aside>Left Navbar</aside>
                <section>main Section</section>
                <aside>right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;