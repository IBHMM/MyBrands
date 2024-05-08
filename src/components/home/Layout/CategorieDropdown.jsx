import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import '../style/style.css'
import { setCategoryType } from "../../../features/Home/Categoryies";

function CategorieDropdown() {

    const type = useSelector(state => state.home.CategoryType)
    const [data, setData] = useState()
    const dispatch = useDispatch(); 

    // Fetch Data
    useEffect(() => {
      
    }, [])

    
    return (
        <section className="flex w-[80%] top-[160px] items-center absolute justify-between bg-[#FFFFFF] max-[1200px]:w-full font-normal h-[200px] px-1 max-[768px]:hidden animation" id="categoryd" onMouseEnter={(e) => dispatch(setCategoryType(type))} onMouseLeave={e => dispatch(setCategoryType(null))}>
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