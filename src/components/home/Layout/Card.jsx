import { useEffect, useState } from 'react';
import whiteHeart from '../../../assets/home/whiteH.svg';
import blackHeart from '../../../assets/home/blackH.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../../features/User/UserSlice.js';
import { Link } from 'react-router-dom';
import { setProduct } from '../../../features/User/UserSlice.js';

function Card({ product }) {
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch()
    const products = useSelector(state => state.user.wishlist);

    useEffect(() => {
      if (products.some(pr => pr.id == product.id)) {
        setLiked(true)
      }
    }, [liked])

    const handleLike = e => {
      e.pereventDefault;
      if (liked) {
          dispatch(removeProduct(product))
      } else {
          dispatch(addProduct(product))
      }
      setLiked(() => setLiked(!liked));
    };

    const HandleCard = e => {
      if(e.target.id != 'possitive1' || e.target.id != 'possitive2'){
        dispatch(setProduct(product))
      }
    }


    return (
      <section 

        className="my-4 relative max-w-[294px] min-w-[230px] max-h-[390px] flex flex-col items-center justify-center bg-[#f4f4f68b] border border-gray-100 max-[500px]:min-w-[180px] max-[500px]:max-h-[300px]">
        
        <section 
            onClick={e => HandleCard(e)}
            className="w-full max-h-[240px] max-[500px]:max-h-[230px]">
          <Link to={`/products/product?id=${product.id}`}>
            <img src={product.images[0]} alt="" className="max-h-[240px] min-[500px]:min-h-[240px] max-[500px]:min-h-[200px] w-full max-[500px]:max-h-[200px]"/>
          </Link>
          <button
            id='possitive1'
            className={`heart absolute top-2 right-2 ${liked ? 'bg-red-500' : 'bg-white'} rounded-full p-1 max-[500px]:hidden`}
            onClick={e => handleLike(product, liked)}
          >
            <img src={liked ? whiteHeart : blackHeart} alt="heart" className="w-5 h-5" />
          </button>
        </section>

        <div className="relative  flex flex-col justify-center items-start w-full pl-2 py-2 max-[500px]:max-h-[120px]">
          <p className='text-[20px]'>{product.category}</p>
          <p className="text-xs text-gray-500">{product.title}</p>
          <p className="text-red-500">{product.price}$</p>
          <button
            id='possitive2'
            className={`heart absolute top-2 right-2 ${liked ? 'bg-red-500' : 'bg-white'} rounded-full p-1 hidden max-[500px]:block`}
            onClick={e => handleLike(product, liked)}
          >
            <img src={liked ? whiteHeart : blackHeart} alt="heart" className="w-4 h-4" />
          </button>
        </div>
      </section>
    );
}

export default Card;
