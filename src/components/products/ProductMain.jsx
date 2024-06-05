import { useEffect, useState } from 'react';
import ProductsMain from './ProductsMain.jsx'
import SideBar from './Sidebar.jsx'

function ProductMain({setNumber, search}) {

    const [show, setShow] = useState(window.innerWidth >= 800);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <section className="w-[80%] flex items-start justify-center max-[1200px]:w-[90%] mt-[40px]">
            <SideBar show={show} setShow={setShow}/>
            <ProductsMain setShow={setShow} search={search} setNumber={setNumber}/>
        </section>
    )
}

export default ProductMain
