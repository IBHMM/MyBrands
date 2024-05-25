import ProductsMain from './ProductsMain.jsx'
import SideBar from './Sidebar.jsx'

function ProductMain() {

    return (
        <section className="w-[80%] flex items-start justify-start max-[1200px]:w-[90%] mt-[40px]">
            <SideBar />
            <ProductsMain />
        </section>
    )
}

export default ProductMain