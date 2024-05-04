import Header from '../../components/home/Layout/Header';
import Navbar from '../../components/home/Layout/Navbar';
import Categories from '../../components/home/Layout/Categories';
import { useSelector } from "react-redux";
import CategorieDropdown from '../../components/home/Layout/CategorieDropdown';
import Shorts from '../../components/home/Shorts';
import Carusel from '../../components/home/Carusel';
import Trends from '../../components/home/Trends';
import slide from  "../../assets/temp/slide.png"
const images = [
    slide,
    slide,
    slide,
    slide,
    slide,
    slide,
];


function Home() {
    const category = useSelector(state => state.home.CategoryType);

    return (
        <section className="w-full font-[Arial] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <Categories />
            {
                category != "" && <CategorieDropdown />
            }
            <Shorts />
            <Carusel images={images}/>
            <Trends />
        </section>
    );
}

export default Home;
