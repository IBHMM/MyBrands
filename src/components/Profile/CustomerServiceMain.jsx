import operator from '../../assets/profile/customerservice.png'
import { Link } from 'react-router-dom'
import Goback from '../../assets/profile/goback.png'

function CustomerServiceMain() {
    return(
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <section className="w-full flex items-center justify-between py-5 px-3 border border-gray-50">
                <div className='flex items-center justify-start gap-[10px]'>
                    <img src={operator} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>Musteri Xidmetleri </p>
                </div>
                <Link to={'/profile'} className='flex items-center justify-end gap-[10px]'>
                    <img src={Goback} alt="" />
                    <p className='text-[14px] text-[#292D32]'>Geri qayit</p>
                </Link>
            </section>


        </section>
    )
}

export default CustomerServiceMain