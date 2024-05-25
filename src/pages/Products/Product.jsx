import Header from '../../components/home/Layout/Header';
import Navbar from '../../components/home/Layout/Navbar';
import { useSelector, useDispatch } from "react-redux";
import Categories from '../../components/home/Layout/Categories'
import CategorieDropdown from '../../components/home/Layout/CategorieDropdown';
import Footer from '../../components/home/Layout/Footer';
import WisitedPages from '../../components/home/Layout/WisitedPages';
import NumberOFProduct from '../../components/products/NumberOFProduct'
import ProductMain from '../../components/products/ProductMain';

function Product() {
    const category = useSelector(state => state.home.CategoryType);

    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <Categories />
            {
                category != "" && <CategorieDropdown />
            }
            <WisitedPages pages={['home', 'products']}/>
            <NumberOFProduct number={30}/>
            <ProductMain />
            <Footer />
        </section>
    );
}

export default Product;
