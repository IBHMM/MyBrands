import { useState } from 'react'
import Logo from '../../../assets/app/Logo.png'
import Card from '../../../assets/home/card.png'
import Profile from '../../../assets/home/profile.png'
import Liked from '../../../assets/home/like.png'
import SearchIcon from '../../../assets/home/search.png'
import Menu from '../../../assets/home/menu.png'
import Close from  '../../../assets/home/back.png'
import Search from './Search'


function Navbar() {

    const [search, setSearch] = useState(false);


    return (
        <nav className='flex w-[80%] items-center justify-between bg-[#FFFFFF] max-[1200px]:w-full font-normal h-[96px] px-1 '>
            <div className='min-w-[100px]'>
                <img src={Logo} alt="" />
            </div>
            <div className='flex items-center justify-end w-full mr-[30px] '>
                {
                    search ? 
                    <>
                        <input type="text" name="" id="" placeholder='Metni daxil edin ...' className='w-[80%] h-[40px] border border-gray-300 focus:outline-none pl-2'/>
                        <div className='h-[40px] w-[50px] border border-gray-300 border-l-0 flex items-center justify-center' onClick={() => setSearch(!search)}>
                            <img src={Close} alt="" />
                        </div> 
                    </> 
                    :
                    <img className="hidden md:flex" src={SearchIcon} alt="" onClick={() => setSearch(!search)}/>
                }
            </div>
            <div className='flex itemc-center justify-between gap-[30px] min-w-[180px]'>
                <a href="" className='hidden items-center justify-center md:flex'>
                    <img className="" src={Profile} alt="" />
                </a>
                <a href="" className='flex items-center justify-center'>
                    <img className="" src={Liked} alt="" />
                </a>
                <a href="" className='flex gap-[10px] items-center justify-center'>
                    <img className="" src={Card} alt="" />
                    Sebet
                </a>
                <div className='block md:hidden'>
                    <img src={Menu} alt="" />
                </div>
            </div>

            {
                search && <Search />
            }
        </nav>
    )
}



export default Navbar;

// function Navbar() {

    //     const [search, setSearch] = useState(true)
    

//     return (
//         <nav className="flex w-[80%] items-center justify-between bg-[#FFFFFF] max-[1200px]:w-full font-normal h-[96px] px-2">
//             <div className='h-full flex items-center justify-center'>
//                 <img src={Logo} alt="" />
//             </div>
//             <div className='flex items-center justify-end w-full'>
//                 {
//                     (!search) ? 
//                     <div>
//                         <input type="text" name="" id="" className=''/>
//                         <span className='' onClick={() => setSearch(!search)}>
//                             <img src={Back} alt="" />
//                         </span>
//                     </div>  :
                    
//                 }
//             </div>
//             <div className='flex w-full items-center justify-end gap-[40px]'>
//                 <a href="" className='hidden md:block'>
//                     <img className="w-[17px] h-[17px]" src={Profile} alt="" />
//                 </a>
//                 <a href="">
//                     <img className="w-[17px] h-[17px]" src={Liked} alt="" />
//                 </a>
//                 <a href="" className='flex gap-[10px] items-center'>
//                     <img className="w-[17px] h-[17px]" src={Card} alt="" />
//                     Sebet
//                 </a>
//                 <div className='block md:hidden'>
//                     <img src={Menu} alt="" />
//                 </div>
//             </div>
//         </nav>
//     )
// }



// {!search ? 
//     <div className='max-w-[764px] w-[60%] flex items-center justify-end'>
//         <input type="text" name="" id="" className='w-full h-[40px] border border-gray-300 focus:outline-none pl-2'/>
//         <span className='w-[56px] h-[40px] flex items-center justify-center border border-gray-300' onClick={() => setSearch(!search)}>
//             <img src={Back} alt="" />
//         </span>
//     </div> :
//     <div className='hidden md:block' onClick={() => setSearch(!search)}>
//         <img className="w-[17px] h-[17px]" src={Search} alt="" />
//     </div>
// }
