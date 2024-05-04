import { useState } from 'react';
import whiteheart from '../../../assets/home/whiteH.svg';
import blackheart from '../../../assets/home/blackH.svg';


function Card({product}) {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return(
        <section className="relative  w-[22%] min-w-[150px] flex flex-col items-between justify-start bg-gray-50 border border-gray-100">
            <div className="w-[calc(100% + 2px)] max-h-[296px]">
                <img src={product.src} alt="" className="max-h-[296px] w-full"/>
                <button
                    className={`heart absolute top-2 right-2 ${liked ? 'bg-red-500' : 'bg-white'} rounded-full p-1`}
                    onClick={handleLike}
                >
                    <img src={liked ? whiteheart : blackheart} alt="heart" className="w-6 h-6" />
                </button>
            </div>

            
            <div className="flex flex-col justify-center h-full pl-2">
                <p className='text-[20px]'>Logo</p>
                <p className="text-xs text-gray-500">{product.category}</p>
                <p className="text-red-500">{product.price}$</p>
            </div>
           
        </section>
    )
}

export default Card