import { useState, useEffect } from "react";
import filter from '../../assets/products/filter.png';
import { useSelector } from "react-redux";
import Card from '../home/Layout/Card';
import { WaitingAnimation } from "../home/Animation";

function ProductMain({ search, setShow, setNumber }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        const url = "https://dummyjson.com/products";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);


    return (
        <section className="w-full flex flex-col items-center justify-start gap-5">
            {window.innerWidth <= 700 ? (
                <div className="w-full flex items-center justify-center">
                    <select
                        name=""
                        id=""
                        className="focus:outline-none flex items-center justify-center w-[50%] h-[50px] border border-gray-300 border-r-0"
                    >
                        <option value="new">Əvvəlcə yeni</option>
                        <option value="bestsellers">Ən çox satılanlar</option>
                        <option value="trends">Hazırda trend</option>
                        <option value="discount">Endirimli məhsullar</option>
                    </select>
                    <div
                        className="flex items-center justify-center w-[50%] gap-2 cursor-pointer h-[50px] border border-gray-300"
                        onClick={() => setShow(true)}
                    >
                        Filterlər
                        <img src={filter} alt="Filter icon" className="w-5 h-5" />
                    </div>
                </div>
            ) : null}

            {loading ? (
                <div className="flex items-center justify-center w-full">
                    <WaitingAnimation />
                </div>
            ) : (
                <div className="w-full grid grid-cols-2 gap-4 translate-y-[-15px] pl-3 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
                    {products.map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
                </div>
            )}
        </section>

    );
}

export default ProductMain;
