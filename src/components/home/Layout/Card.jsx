import React, { useState } from 'react';
import whiteHeart from '../../../assets/home/whiteH.svg';
import blackHeart from '../../../assets/home/blackH.svg';

function Card({ product }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };


  return (
    <section className="relative w-[22%] min-w-[230px] max-h-[320px ] flex flex-col items-center justify-start bg-[#f4f4f68b] border border-gray-100 max-[768px]:min-w-[180px] max-[768px]:max-h-[300px]">
      <div className="w-full max-h-[240px] max-[768px]:max-h-[200px]">
        <img src={product.image} alt="" className="max-h-[240px] min-[768px]:min-h-[240px] max-[768px]:min-h-[200px] w-full max-[768px]:max-h-[200px]"/>
        <button
          className={`heart absolute top-2 right-2 ${liked ? 'bg-red-500' : 'bg-white'} rounded-full p-1 max-[768px]:hidden`}
          onClick={handleLike}
        >
          <img src={liked ? whiteHeart : blackHeart} alt="heart" className="w-5 h-5" />
        </button>
      </div>

      <div className="relative  flex flex-col justify-center items-start w-full h-[80px] pl-2 py-2 max-[768px]:max-h-[100px]">
        <p className='text-[20px]'>Logo</p>
        <p className="text-xs text-gray-500">{product.category}</p>
        <p className="text-red-500">{product.price}$</p>
        <button
          className={`heart absolute top-2 right-2 ${liked ? 'bg-red-500' : 'bg-white'} rounded-full p-1 hidden max-[768px]:block`}
          onClick={handleLike}
        >
          <img src={liked ? whiteHeart : blackHeart} alt="heart" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default Card;
