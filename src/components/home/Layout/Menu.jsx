import Close from '../../../assets/home/back.png'
import SearchIcon from '../../../assets/home/Blacksearch.png'
import Profile from '../../../assets/home/profileWhite.png'
import useNavbar from '../../../hooks/Home/Menu'
import { setMenu } from '../../../features/Home/Categoryies'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import right from '../../../assets/home/leftb.png'

function MobileM() {

    const {dispatch} = useNavbar();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = useSelector(state => state.home.AllCategories);

    const handleCategoryClick = (index, type, e) => {
        setSelectedCategory(index);
        dispatch(ActiveCategory(categories[index]));        
    };

    return (
        <section className="fixed top-0 left-0 w-screen bg-white flex justify-center flex-col mt-[30px] min-[768px]:hidden zindex">
            <div className='w-full flex items-center justify-between px-3 mt-[20px] border-b-[1px] pb-1 border-gray-100'>
                <p className='text-[20px]'>Menu</p> 
                <img src={Close} alt="" onClick={() => dispatch(setMenu(false))} />
            </div>

            <div className='w-full flex items-center justify-center px-3 mt-[20px] pb-1'>
                <div className='w-full flex items-center justify-center px-2 py-2 h-[56px] border border-gray-100  rounded-md '>
                    <input type="text" className='h-[40px] w-full focus:outline-none pl-5' placeholder='Metni daxil edin' />
                    <img src={SearchIcon} alt="" className='pr-2' />
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center px-3 mt-[20px] pb-1'>
                {categories.map((tc, index) => {
                    return(
                        <div className='w-full items-center justify-between flex p-3' key={index}>
                            <p>
                                {tc.main}
                            </p>
                            <img src={right} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className='w-full flex items-center justify-center px-3 mt-[20px] pb-1'>
                <button className='bg-[#26264C] w-full h-[56px] hover:opacity-[0.7] transition-all rounded-sm'>
                    <div className='flex items-center justify-center text-white gap-[9px]'>
                        <img src={Profile} alt="" />
                        Hesabim
                    </div>
                </button>
            </div>

        </section>
    )
}



export default MobileM