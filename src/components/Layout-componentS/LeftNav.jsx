import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        fetch(`https://openapi.programming-hero.com/api/news/categories`)
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='mb-3 font-semibold text-xl'>All Category</h2>
            <div className='flex flex-col gap-3'>
                {
                    categories.map((category) => (
                        <NavLink
                        to={`/category/${category.category_id}`}
                            className='btn bg-base-100 border-none' key={category.category_id}> {category.category_name}
                        </NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftNav;