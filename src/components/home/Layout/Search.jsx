import { useState } from "react"
import Close from '../../../assets/home/back.png'
import Star from '../../../assets/home/star.png'
import Fire from '../../../assets/home/fire.png'
import '../style/style.css'


function Search() {

    const [lastS, setLasts] = useState(["Nazim", "Fazil", "Vedre"]);
    const [mostS, setMosts] = useState(["Nazim", "Fazil", "Vedre"]);
    const [trends, setTrends] = useState(["Nazim", "Fazil", "Vedre"]);


    const HandleUser = e => {
        // Todo handle all search interactions delete add etc.
    }

    return(
        <section className={`flex w-[80%] items-center justify-between font-normal absolute top-[100px] max-[1200px]:w-full borderserc animation z-10000 bg-white`}>
            <div className="w-[180px] min-w-[100px] inline"></div>
            <div className="flex flex-col items-end w-full mr-[30px]">

                <div className="flex flex-col items-end width justify-between gap-[20px]">
                        <div className="flex w-full justify-between items-center">
                            <p className="text-[16px] font-[500]">
                                Ən son axtarilanlar
                            </p>
                            <p className="text-[14px] text-red-600">
                                Təmizlə
                            </p>
                        </div> 
                        <div className="w-full flex items-between flex-col justify-center ">
                            {
                                lastS.map((search, index) => {
                                    return (
                                        <LastSearch msg={search} key={index} />
                                    )
                                })
                            }
                        </div>
                </div>

                <div className="flex flex-col items-start width justify-between gap-[10px] mt-[20px] mb-[20px]">
                    <p className="text-[16px] font-[500]">
                        Ən çox axtarılanlar
                    </p>
                    <div className="flex gap-[15px]">
                        {
                            mostS.map((search, index) => {
                                return (
                                    <MostSearched name={search} type={"star"} key={index} />
                                )
                            })
                        }     
                    </div>
                </div>
               
                <div className="flex flex-col items-start width justify-between gap-[10px] mt-[20px]">
                    <p className="text-[16px] font-[500]">
                        Ən çox axtarılanlar
                    </p>
                    <div className="flex gap-[15px]">
                        {
                            mostS.map((search, index) => {
                                return (
                                    <MostSearched name={search} type={"fire"} key={index} />
                                )
                            })
                        }     
                    </div>
                </div>
            </div>
            <div className="min-w-[190px] bg-blue-300 inline"></div>
        </section>
    )
}


function LastSearch({msg}) {
    return (
        <div className="flex w-full items-center justify-between border-b-[1px] py-2">
            <p className="text-[#484C52] text-[14px]">{msg}</p>
            <img src={Close} className="w-[10px]"/>
        </div>
    )
}

function MostSearched({name, type}) {
    return (
        <div className="flex items-center justify-center gap-[7px] border border-[#f1f1f3] rounded-[30px] px-2 py-1 text-[14px] text-[#292D32]">
            <img src={type == "star" ? Star : Fire} alt="" />
            <p>{name}</p>
        </div>
    )
}


export default Search