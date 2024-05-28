import Logo from '../../../assets/app/Logo.png'
import Card from '../../../assets/home/card.png'
import Profile from '../../../assets/home/profile.png'
import Liked from '../../../assets/home/like.png'
import SearchIcon from '../../../assets/home/search.png'
import Menu from '../../../assets/home/menu.png'
import Close from  '../../../assets/home/back.png'
import Search from './Search'
import MobileM from './Menu'
import useNavbar from '../../../hooks/Home/Menu'
import { setMenu } from "../../../features/Home/Categoryies";
import { Link } from 'react-router-dom'

function Navbar() {

    const {search, menu, setSearch, dispatch, setPages, wishlistL} = useNavbar();
    
    return (
        <nav className='flex w-[80%] items-center justify-between bg-[#FFFFFF] max-[1200px]:w-full font-normal h-[96px] px-1'>
            <Link to={'/home'}>
                <img src={Logo} alt="" className='min-w-[150px]'/>
            </Link>
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
                <Link to="/home/profile" className='hidden items-center justify-center md:flex relative '>
                    <img className="" src={Profile} alt="" />
                </Link>
                <Link to="/profile/liked" className='flex items-center justify-center relative'>
                    <img className="" src={Liked} alt="" />            
                    <div className={`w-[19px] h-[12px] text-[8px] flex items-center justify-center rounded-[10px] bg-[#E12D55] text-white absolute right-[-3px] top-[0px]`}>
                        {wishlistL} 
                    </div>
                </Link>
                <Link to={'/profile/Card'} className='flex gap-[10px] items-center justify-center'>
                    <img className="" src={Card} alt="" />
                    Sebet
                </Link>
                <div className='flex items-center justify-center md:hidden' onClick={() => dispatch(setMenu(true))}>
                    <img src={Menu} alt="" />
                </div>
            </div>

            {
                search && <Search />
            }

            {
                menu && <MobileM />
            }
        </nav>
    )
}



export default Navbar;
