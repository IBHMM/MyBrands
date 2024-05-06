import { useEffect, useState } from "react";
import Card from "./Layout/Card";

function BestSellers() {
    
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

    useEffect(() => {
        // Fetch data
    }, []);

    return (
        <section className="relative flex flex-col justify-center items-center w-[80%] max-[1200px]:w-[90%] px-1 mt-[50px] gap-[30px]">
            <div className="flex items-center justify-between w-full ">
                <p className="text-[30px]">En cox Satilanlar</p>
            </div>
            <div className="flex items-center justify-start w-full overflow-y-auto gap-[47px] max-[898px]:justify-center max-[500px]:justify-evenly max-[500px]:gap-3">
                {data.map((item, idx) => (
                    <Card product={item} key={idx} />
                ))}
            </div>
        </section>
    );
}

export default BestSellers;
