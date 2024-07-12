import { useState } from "react";
import '../style/style.css';
import { ActiveCategory } from "../../../features/Home/Categoryies";
import { useDispatch, useSelector } from 'react-redux';
import { categories, half } from "../../../utils/Products/Constants";

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch();
    
    const handleCategoryClick = (index, type, e) => {
        setSelectedCategory(index);
        if (window.innerWidth < 900) {
            dispatch(ActiveCategory(half[index]));        
        } else {
            dispatch(ActiveCategory(categories[index]));        
        }
    };

    return (
        <section className='z-10 flex  w-[80%] items-center justify-between max-[1200px]:w-[90%] font-normal h-[48px] border border-gray-100 text-[15px] relative max-w-[1200px]:text-[12px] max-[768px]:hidden' id="category" onMouseLeave={e => dispatch(ActiveCategory(null))}>
            {categories.map((element, index) => (
                <div
                    key={index}
                    className={`categoryw flex items-center border border-gray-100 transition-all duration-300 cursor-pointer justify-center h-[48px] ${selectedCategory === index ? 'bg-gray-50' : ''} ${element.main === 'Endirim' ? 'text-red-400 font-semibold' : ''}`}
                    onMouseEnter={() => handleCategoryClick(index, element)}
                >
                    {element.main}
                </div>
            ))}
            {selectedCategory !== null && (
                <div className={`absolute w-[calc(100%/5)] bg-red-500 h-[2px] bottom-0 transition-all duration-500`} style={{ left: selectedCategory !== -1 ? `calc((100% / 5) * ${selectedCategory})` : 0 }}></div>
            )}
        </section>
    );
}

export default Categories;
