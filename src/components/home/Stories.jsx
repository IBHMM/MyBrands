import { useEffect, useState } from "react";
import img1 from '../../assets/temp/slide.png';

function Shorts() {
    const [data, setData] = useState([
        { src: img1, title: "title1" },
        { src: img1, title: "title2" },
        { src: img1, title: "title3" }
    ]);

    return (
        <section className="flex w-[80%] items-center justify-start max-[1200px]:w-[90%] font-normal h-[96px] mb-[20px]">
            {data.map((short, index) => (
                <a className="flex items-center justify-center flex-col w-[82px]" key={index} href="/home/story">
                    <div className="flex items-center justify-center rounded-[50%] w-[58px] h-[58px] p-[2px] border-[2px] border-red-500">
                        <img src={short.src} alt="" className="rounded-[50%] w-full h-full" />
                    </div>
                    <p className="text-[14px]">{short.title}</p>
                </a>
            ))}
        </section>
    );
}

export default Shorts;
