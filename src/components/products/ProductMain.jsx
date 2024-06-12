import { useEffect, useState } from 'react';
import ProductsMain from './ProductsMain.jsx'
import SideBar from './Sidebar.jsx'
import { WaitingAnimation } from '../home/Animation.jsx';
import { useLocation, useSearchParams } from 'react-router-dom';

function ProductMain({setNumber, search}) {

    const [show, setShow] = useState(window.innerWidth >= 840);
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
  
    const item = searchParams.get('q');
    console.log(item)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 840) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    
    useEffect(() => {
        const url = `https://dummyjson.com/products/search?q=${item}`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
                setLoading(false);
                setNumber(json.products.length)
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);

    console.log(products)

    return (
        <section className="w-[80%] flex items-start justify-center max-[1200px]:w-[90%] mt-[40px]">
            {
                loading ? 
                    <WaitingAnimation /> : 
                <>
                    <SideBar show={show} setShow={setShow}/>
                    <ProductsMain setShow={setShow} search={search} setNumber={setNumber} loading={loading} setLoading={setLoading} products={products}/>
                </>
            }
        </section>
    )
}

export default ProductMain
