import { useState, useEffect } from "react"

async function FetchBook() {
    try{
        const response = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/product', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("access")
            },
        })

        if (response.ok) {
            const data = await response.json();
            return data;
        }else{
            return false;
        }
    }catch(err) {
        return false
    }
} 

function Book({image1}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const d = FetchBook();
        if(d) {
            setData(d)
        }else {
            setData([])
        }
    },[])

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