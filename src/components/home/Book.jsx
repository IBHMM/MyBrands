import { useState, useEffect } from "react"


function Book({image1, image2}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/product/1')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(err => console.error(err))
    },[])

    console.log(data)

    return (
        <section className="flex items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[70px] max-[898px]:flex-col max-[898px]:justify-center max-[898px]:gap-[30px]">
            <section className="w-[48%] h-[400px] flex items-center justify-center relative max-[898px]:w-[100%] max-[600px]:h-[270px] max-[400px]:h-[200px]" >
                <button className="absolute bottom-[10px] w-[200px] h-[40px] bg-white ">Sifaris et</button>
                <img src={image1} alt="" className="w-full h-full "/>
            </section>
            <section className="w-[48%] h-[400px] flex items-center justify-center relative max-[898px]:w-[100%] max-[600px]:h-[270px] max-[400px]:h-[200px]">
                <button className="absolute bottom-[10px] w-[200px] h-[40px] bg-white ">Sifaris et</button>
                <img src={image1} alt="" className="w-full h-full "/>
            </section>
        </section>
    )
}


export default Book