import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const { data:news } = useLoaderData();
 
    return (
        <div>
            <h2 className='mb-3 font-semibold text-xl'>Dragon News Home</h2>
            <div>
                {
                    news.map(singleNews=> <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;