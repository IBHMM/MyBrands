import { Link } from 'react-router-dom';
import GoBack from '../../assets/profile/goback.png';
import like from '../../assets/profile/liked.png';
import { useEffect, useState } from 'react';
import Card from '../home/Layout/Card';

function LikedMain () {

    const [likedProduct, setLikedProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(json => setLikedProducts(json.slice(0,8)))
            .catch(err => console.error(err))
    },[])

    const HandleUnlike = (e, Product, isliked) => {
        e.preventDefault();
        if (isliked) {
            const newlikedProducts = likedProduct.filter(product => product.id !== Product.ID);
            // fetch for unlikeing product 
            setLikedProducts(newlikedProducts)
        }else {
            const newlikedProducts = [...likedProduct, Product]
            // fetch for likeing product 
            setLikedProducts(newlikedProducts)
        }
    }

    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <section className="w-full flex items-center justify-between py-5 px-3 border border-gray-50">
                <div className='flex items-center justify-start gap-[10px]'>
                    <img src={like} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>Seçilmişlər</p>
                </div>
                <Link to={'/profile'} className='flex items-center justify-end gap-[10px]'>
                    <img src={GoBack} alt="" />
                    <p className='text-[14px] text-[#292D32]'>Geri qayit</p>
                </Link>
            </section>
 
            <section className="flex items-center justify-around w-full flex-wrap mt-[30px]">
                {
                    likedProduct.map((product, index) => <span className='p-2' key={index}><Card unlike={HandleUnlike} product={product} isliked={true}/></span>)
                }
            </section>
        </section>
    )
}



export default LikedMain