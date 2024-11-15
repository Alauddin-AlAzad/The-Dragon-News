import React, { useState } from "react";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    // Toggle the read more state
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  return (
    <div className="card w-full bg-base-100 shadow-xl m-4">
        <div className="flex items-center space-x-2">
          <img src={singleNews.author.img} alt={singleNews.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{singleNews.author.name}</p>
            <p className="text-xs text-gray-500">{new Date(singleNews.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
     
      <div className="card-body">
      <figure>
        <img src={singleNews.thumbnail_url} alt="Thumbnail" className="w-full  h-[262px] object-cover" />
      </figure>
        <h2 className="card-title mt-4">{singleNews.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {isReadMore ? singleNews.details : `${singleNews.details.substring(0, 200)}...`}
          <span 
            onClick={toggleReadMore} 
            className="text-orange-500 cursor-pointer"
          >
            {isReadMore ? " Read Less" : " Read More"}
          </span>
        </p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400" />
            <span className="text-sm">{singleNews.rating.number}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEye className="text-gray-500" />
            <span className="text-sm">{singleNews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


