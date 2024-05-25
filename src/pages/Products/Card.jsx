import { useEffect, useState } from "react";
import { WaitingAnimation } from "../../components/home/Animation";
import Header from "../../components/home/Layout/Header";
import Footer from "../../components/home/Layout/Footer";
import Navbar from '../../components/home/Layout/Navbar';
import ProductOpenMain from "../../components/products/ProductOpenMain";
import WisitedPages from "../../components/home/Layout/WisitedPages";

function ProductCard() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoading(true), 1000)
    });

    return (
        <>
        {
            loading ? 
                <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
                    
                    <Header />
                    <Navbar />
                    <WisitedPages pages={['home', 'product']}/>
                    <ProductOpenMain />
                    {/* <SimilarProducts /> */}
                    <Footer />
                </section>
                    :
                <WaitingAnimation />
        }
        </>
    )
}


export default ProductCard;