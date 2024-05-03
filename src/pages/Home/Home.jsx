import Header from '../../components/home/Layout/Header'
import Navbar from '../../components/home/Layout/Navbar'
import Categories from '../../components/home/Layout/Categories'

function Home() {
    return (
        <section className="w-full font-[Arial] flex items-center justify-center flex-col relative">
            <Header />
            <Navbar />
            <Categories />
        </section>
    )
}

export default Home