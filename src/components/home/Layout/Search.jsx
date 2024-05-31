import { useEffect, useState } from "react";
import Close from '../../../assets/home/back.png';
import Star from '../../../assets/home/star.png';
import Fire from '../../../assets/home/fire.png';
import '../style/style.css';

function Search({ search }) {
    const [lastS, setLasts] = useState(JSON.parse(localStorage.getItem("lastsearch")) || []);
    const [mostS] = useState(["Nazim", "Fazil", "Vedre"]);
    const [trends] = useState(["Nazim", "Fazil", "Vedre"]);

    const cleanHistory = () => {
        localStorage.setItem("lastsearch", JSON.stringify([]));
        setLasts([]);
    };

    const removeelement = element => {
        const newHistory = lastS.filter(el => el != element)
        localStorage.setItem("lastsearch", JSON.stringify(newHistory))
        setLasts(newHistory)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                const newHistory = [...lastS, search];
                localStorage.setItem("lastsearch", JSON.stringify(newHistory));
                setLasts(newHistory);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [search, lastS]);

    const handleUser = () => {
        // Todo handle all search interactions delete add etc.
    };

    return (
        <section className="flex w-[80%] items-center justify-between font-normal absolute top-[80px] max-[1200px]:w-full borderserc animation bg-white max-[768px]:hidden zindex">
            <div className="w-[180px] min-w-[100px] inline bg-white"></div>
            <div className="flex flex-col items-end w-full mr-[30px]">

                <div className="flex flex-col items-end width justify-between gap-[20px]">
                    <div className="flex w-full justify-between items-center">
                        <p className="text-[16px] font-[500]">
                            Ən son axtarilanlar
                        </p>
                        <p className="text-[14px] text-red-600 cursor-pointer" onClick={cleanHistory}>
                            Təmizlə
                        </p>
                    </div>
                    <div className="w-full flex items-between flex-col justify-center ">
                        {
                            lastS.map((search, index) => (
                                <LastSearch msg={search} key={index} removeelement={removeelement}/>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col items-start width justify-between gap-[10px] mt-[20px] mb-[20px]">
                    <p className="text-[16px] font-[500]">
                        Ən çox axtarılanlar
                    </p>
                    <div className="flex gap-[15px]">
                        {
                            mostS.map((search, index) => (
                                <MostSearched name={search} type={"star"} key={index} />
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col items-start width justify-between gap-[10px] mt-[20px]">
                    <p className="text-[16px] font-[500]">
                        Ən çox axtarılanlar
                    </p>
                    <div className="flex gap-[15px]">
                        {
                            trends.map((search, index) => (
                                <MostSearched name={search} type={"fire"} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="min-w-[190px] bg-blue-300 inline"></div>
        </section>
    );
}

function LastSearch({ msg, removeelement }) {
    return (
        <div className="flex w-full items-center justify-between border-b-[1px] py-2">
            <p className="text-[#484C52] text-[14px]">{msg}</p>
            <img src={Close} className="w-[10px]" alt="Close" onClick={() => removeelement(msg)}/>
        </div>
    );
}

function MostSearched({ name, type }) {
    return (
        <div className="flex items-center justify-center gap-[7px] border border-[#f1f1f3] rounded-[30px] px-2 py-1 text-[14px] text-[#292D32]">
            <img src={type === "star" ? Star : Fire} alt="" />
            <p>{name}</p>
        </div>
    );
}

export default Search;
