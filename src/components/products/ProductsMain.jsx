import { useState, useEffect } from "react"


function ProductMain({search}) {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = search = "" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/search?q=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(json => setProducts(json));
    }, [])

    console.log(products)

    return (
        <section className="w-full ml-[40px] flex items-center justify-start flex-wrap">
            
        </section>
    )
}


export default ProductMain