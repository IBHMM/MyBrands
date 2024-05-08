import Header from '../../components/home/Layout/Header';
import Navbar from '../../components/home/Layout/Navbar';
import ProductCategories from '../../components/home/Categories';
import { useSelector, useDispatch } from "react-redux";
import Categories from '../../components/home/Layout/Categories'
import CategorieDropdown from '../../components/home/Layout/CategorieDropdown';
import Shorts from '../../components/home/Stories';
import Carusel from '../../components/home/Carusel';
import Trends from '../../components/home/Trends';
import slide from  "../../assets/temp/slide.png"
import brend from '../../assets/home/adidas.png'
import category from '../../assets/home/category.png'
const images = [
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
];
const brends = [
    brend,
    brend,
    brend,
    brend,
    brend,
    brend,
    brend,
    brend,
    brend,
    brend,
]
const categories = [
    {
        image: category,
        name: "USAQ"
    },
    {
        image: category,
        name: "USAQ"
    },
    {
        image: category,
        name: "USAQ"
    },
]
import Book from '../../components/home/Book';
import BestSellers from '../../components/home/BestSellers';
import Brends from '../../components/home/Brends';
import BrendCard from '../../components/home/BrendCart'
import Services from '../../components/home/Services';
import Footer from '../../components/home/Layout/Footer';
import { useEffect } from 'react';
import { SetPages } from '../../features/User/UserSlice';


function Home() {
    const category = useSelector(state => state.home.CategoryType);

    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative ">
            <Header />
            <Navbar />
            <Categories />
            {
                category != "" && <CategorieDropdown />
            }
            <Shorts />
            <Carusel images={images}/>
            <Trends />
            <Book image1={slide} image2={slide}/>
            <BestSellers />
            <Brends brends={brends}/>
            <ProductCategories categories={categories}/>
            <BrendCard />
            <Services />
            <Footer />
        </section>
    );
}

export default Home;
