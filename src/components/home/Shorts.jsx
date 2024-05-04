import { useEffect, useState } from "react";

function Shorts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from an API 
        fetch("your-api-endpoint")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); 

    return (
        <section className="flex w-[80%] items-center justify-start max-[1200px]:w-full font-normal h-[96px] px-1">
            {data.map((short, index) => (
                <div className="flex items-center justify-center flex-col w-[82px]" key={index}>
                    <div className="flex items-center justify-center rounded-[50%] w-[58px] h-[58px] p-[1px] border-[2px] border-red-500">
                        <img src={short.image} alt="" className="rounded-[50%] w-full h-full"/>
                    </div>
                    <p>{short.title}</p>
                </div>
            ))}
        </section>
    );
}


export default Shorts