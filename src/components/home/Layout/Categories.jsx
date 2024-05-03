import { useState } from "react";
import '../style/style.css';

function Categories() {
    const [categories, setCategories] = useState(["KISI", "QADIN", "USAQ", "CANTA & AKSESUAR", "HEDIYYE KARTLARI", "ENDIRIM"]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (index) => {
        setSelectedCategory(index);
    };

    return (
        <section className='z-10 flex w-[80%] items-center justify-between max-[1200px]:w-full font-normal h-[48px] px-1 text-[12px] relative max-[1200px]:text-[12px]'>
            {categories.map((element, index) => (
                <div
                    key={index}
                    className={`categoryw flex items-center justify-center h-[48px] ${selectedCategory === index ? 'bg-gray-50' : ''}`}
                    onMouseEnter={() => handleCategoryClick(index)}
                >
                    {element}
                </div>
            ))}
            {selectedCategory !== null && (
                <div className={`absolute categoryw bg-red-500 inline-block h-[2px] bottom-0 transition-all duration-500`} style={{ left: `calc((100% / 6) * ${selectedCategory})` }}></div>
            )}
        </section>
    );
}

export default Categories;
