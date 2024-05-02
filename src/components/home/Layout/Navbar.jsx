import { useState } from 'react'
import Logo from '../../../assets/app/Logo.png'
import Card from '../../../assets/home/card.png'
import Profile from '../../../assets/home/profile.png'
import Liked from '../../../assets/home/like.png'
import Search from '../../../assets/home/search.png'
import Menu from '../../../assets/home/menu.png'
import Back from  '../../../assets/home/back.png'

function Navbar() {

    const [search, setSearch] = useState(true)


    return (
        <nav className="flex w-[80%] items-center justify-between bg-[#FFFFFF] max-[1200px]:w-full font-normal h-[96px] px-2">
            <div className='h-full flex items-center justify-center'>
                <img src={Logo} alt="" />
            </div>
            <div className='flex w-full items-center justify-end gap-[40px]'>
                {!search ? 
                    <div className='max-w-[764px] w-[60%] flex items-center justify-end'>
                        <input type="text" name="" id="" className='w-full h-[40px] border border-gray-300 focus:outline-none pl-2'/>
                        <span className='w-[56px] h-[40px] flex items-center justify-center border border-gray-300' onClick={() => setSearch(!search)}>
                            <img src={Back} alt="" />
                        </span>
                    </div> :
                    <div className='hidden md:block' onClick={() => setSearch(!search)}>
                        <img className="w-[17px] h-[17px]" src={Search} alt="" />
                    </div>
                }
                
                <a href="" className='hidden md:block'>
                    <img className="w-[17px] h-[17px]" src={Profile} alt="" />
                </a>
                <a href="">
                    <img className="w-[17px] h-[17px]" src={Liked} alt="" />
                </a>
                <a href="" className='flex gap-[10px] items-center'>
                    <img className="w-[17px] h-[17px]" src={Card} alt="" />
                    Sebet
                </a>
                <div className='block md:hidden'>
                    <img src={Menu} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
