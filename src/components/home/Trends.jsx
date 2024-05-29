import { useEffect, useState } from "react";
import Card from "./Layout/Card";
import { useSelector } from "react-redux";

function Trends() {
    
    const [data, setData] = useState([]);
    const gender = useSelector(state => state.user.gender);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setData(json.products))
        .catch(err => console.error(err))
    }, []);

    return (
        <section className="relative flex flex-col justify-center items-center w-[80%] max-[1200px]:w-[90%] px-1 mt-[50px] gap-[30px]">
            <div className="flex items-center justify-between w-full">
                <p className="text-[30px]">Hazirda trend</p>
            </div>
            <div className="flex items-center justify-between  w-full overflow-y-auto gap-[47px] max-[500px]:gap-3">
                {data.map((item, idx) => (
                    <Card product={item} key={idx} />
                ))}
            </div>
        </section>
    );
}

export default Trends;
