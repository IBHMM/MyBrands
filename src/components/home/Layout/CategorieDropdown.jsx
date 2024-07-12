import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveCategory } from "../../../features/Home/Categoryies";

function CategorieDropdown() {
    const category = useSelector(state => state.home.ActiveCategory);
    const dispatch = useDispatch(); 
    
    const HandleClick = (item) => {
        window.location = `/products?gender=${category.main}&product=${item}` 
    }

    return (
        <section
            className={`flex w-[80%] z h-auto pb-[10px] mt-[38px] items-start absolute justify-start bg-white max-[1200px]:w-[90%] font-normal max-[768px]:hidden animation ${category == null ? 'hidden' : 'flex'}`}
            id="categoryd"
            onMouseEnter={(e) => dispatch(ActiveCategory(category))}
            onMouseLeave={e => dispatch(ActiveCategory(null))}
        >
            {category != null && category.categories != null && 
                    category.categories.map((ct, index) => {
                        return (
                            <section key={index} className="flex flex-col items-start gap-5 max-h-[500px] p-3 w-calc(100% / 2)">
                                <p className="text-[#F84568] font-bold text-lg">
                                    {ct.title}
                                </p>
                                <section className="flex flex-col items-start justify-start max-h-[400px] flex-wrap  w-full max-[900px]:max-h-[500px]">
                                    {ct.items.map((item, idx) => {
                                        return (
                                            <div key={idx} className="text-sm text-gray-700 p-3 transition-all duration-300 hover:scale-90 cursor-pointer" onClick={() => HandleClick(item)}>
                                                {item}
                                            </div>
                                        );
                                    })}
                                </section>
                            </section>
                        );
                    })
                }
        </section>
    );
}

export default CategorieDropdown;
