import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import '../style/style.css'

function CategorieDropdown() {

    const type = useSelector(state => state.home.CategoryType)
    const [data, setData] = useState()

    // Fetch Data
    useEffect(() => {
      
    }, [])

    
    return (
        <section className="flex w-[80%] top-[160px] items-center absolute justify-between bg-[#FFFFFF] max-[1200px]:w-full font-normal h-[200px] px-1 max-[768px]:hidden animation" id="categoryd">
            {
                // data.map((c, i) => {
                //     reutnr 
                // })
                type
            }
        </section>
    )


}

export default CategorieDropdown