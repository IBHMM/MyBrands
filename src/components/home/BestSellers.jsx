import { useEffect, useState } from "react";
import Card from "./Layout/Card";

function BestSellers() {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(json=>setData(json.slice(10)))
            .catch(err => console.error(err))
    }, []);


    return (
        <section className="relative flex flex-col justify-center items-center w-[80%] max-[1200px]:w-[90%] px-1 mt-[50px] gap-[30px]">
            <div className="flex items-center justify-between w-full ">
                <p className="text-[30px]">En cox Satilanlar</p>
            </div>
            <div className="flex items-center justify-start w-full overflow-y-auto gap-[47px] max-[898px]:justify-center max-[500px]:justify-evenly max-[500px]:gap-3">
                {data != undefined && data.map((item, idx) => (
                    <Card product={item} key={idx} />
                ))}
            </div>
        </section>
    );
}

export default BestSellers;
