import Header from '../../components/home/Layout/Header'
import Navbar from '../../components/home/Layout/Navbar'

function Home() {
    return (
        <section className="w-full font-[Arial] flex items-center justify-center flex-col">
            <Header />
            <Navbar />
        </section>
    )
}

export default Home