import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

function WisitedPages({pages}) {
    
    const [string, setString] = useState("");

    useEffect(() => {
        let path = "";
        pages.forEach((element, index) => {
            if(index != pages.length - 1) {
                path += element + "->"
            }else {
                path += element 
            }
        });
        setString(path)
    })

    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex items-center justify-start border border-gray-100 px-3 py-2">
            <p className="text-[12px] text-gray-700"> {string} </p>
        </section>
    )
}

export default WisitedPages;
