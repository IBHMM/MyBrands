import Header from "../../components/home/Layout/Header"
import Navbar from "../../components/home/Layout/Navbar"
import WisitedPages from "../../components/home/Layout/WisitedPages"
import Footer from "../../components/home/Layout/Footer"
import AboutMain from '../../components/home/AboutMain.jsx'
import Categories from "../../components/home/Categories.jsx"
import Categoryies from "../../features/Home/Categoryies.js"
import { useSelector } from "react-redux"
import CategorieDropdown from "../../components/home/Layout/CategorieDropdown.jsx"
import Categorie_s from '../../components/home/Layout/Categories.jsx'
import Services from '../../components/home/Services';

function TakeGender() {

    const category = useSelector(state => state.home.CategoryType);

    return (
        <section className="w-full font-[Flow Circular] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <Categorie_s />
                {
                    category != "" && <CategorieDropdown />
                }
            <Categories />
            <Services />
            <Footer />
        </section>
    )
}

export default TakeGender