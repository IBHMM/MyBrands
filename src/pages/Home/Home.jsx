import Header from '../../components/home/Layout/Header';
import Navbar from '../../components/home/Layout/Navbar';
import Categories from '../../components/home/Layout/Categories';
import { useSelector } from "react-redux";
import CategorieDropdown from '../../components/home/Layout/CategorieDropdown';
import Shorts from '../../components/home/Shorts';
import Carusel from '../../components/home/Carusel';
const images = [
    'https://images.unsplash.com/photo-1714692547691-790c7f7284d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675436294167-aac1559fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675436294167-aac1559fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675436294167-aac1559fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675436294167-aac1559fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675436294167-aac1559fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1675436294167-aac1559fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
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
        </section>
    );
}

export default Home;
