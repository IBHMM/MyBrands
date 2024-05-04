import { useEffect, useState } from "react";
import Left from '../../assets/home/leftT.png';
import Right from '../../assets/home/rightT.png';
import Card from "./Layout/Card";


function Trends() {
    const [data, setData] = useState([
        {
            id: 1,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 1',
            price: 20.99
        },
        {
            id: 2,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 2',
            price: 15.49
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 25.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 22131235.99
        },
        {
            id: 3,
            src: 'https://cdn.dsmcdn.com/ty1268/product/media/images/prod/SPM/PIM/20240420/00/d6b443a0-5303-3b65-b3f7-b93e19f3320c/1_org_zoom.jpg',
            category: 'Category 3',
            price: 2212135.99
        },
    
    ])
    
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4;

    const handleNext = () => {
        setStartIndex(prevIndex => {
            const newIndex = prevIndex + itemsToShow;
            return newIndex >= data.length ? 0 : newIndex;
        });
    };
    
    const handlePrev = () => {
        setStartIndex(prevIndex => {
            const newIndex = prevIndex - itemsToShow;
            return newIndex < 0 ? data.length - itemsToShow : newIndex;
        });
    };

    useEffect(() => {
        // Fetch data
    }, []);

    return (
        <section className="relative flex flex-col justify-center items-center w-[80%] max-[1200px]:w-full px-1 mt-[50px] gap-[30px]">
            <div className="flex items-center justify-between w-full ">
                <p className="text-[30px]">Hazırda trend</p>
                <div className="h-full flex items-center justify-center gap-5">
                    <img src={Left} alt="" onClick={handlePrev} />
                    <img src={Right} alt="" onClick={handleNext} />
                </div>
            </div>
            <div className="flex items-center justify-start w-full overflow-scroll gap-[47px] flex-wrap max-[898px]:justify-center max-[500px]:justify-evenly max-[500px]:gap-1 ">
                {data.slice(startIndex, startIndex + itemsToShow).map((item, index) => (
                    <Card product={item} key={index} />
                ))}
            </div>
        </section>
    );
}

export default Trends;
