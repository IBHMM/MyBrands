import { useSelector } from "react-redux"
import {services} from '../../utils/Profile/Constants' 
import ProfileCard from "./Layout/ProfileCard";
import { useState } from "react";
import Exit from './Layout/Exit'
import Referal from "./Layout/Referal";

function Main() {

    const name = useSelector(state => state.user.name);
    const [exit, setExit] = useState(false)
    const [referal, setReferal] = useState(false)

    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%]">
            <div className="flex flex-col justify-start items-start w-full py-3 pl-4">
                <p className="text-[25px]">{name}</p>
                <p>
                    Xoş gəldin
                </p>
            </div>
            <div className="flex w-full items-center justify-start flex-wrap gap-[1%]">
                {
                    services.map((service, index) => {
                        return(
                            <ProfileCard service={service} key={index} setExit={setExit} setReferal={setReferal}/>
                        )
                    })
                }
            </div>
            {exit && <Exit setExit={setExit}/>}
            {referal && <Referal setReferal={setReferal}/>}
        </section>
    )
}


export default Main