import profile from '../../assets/profile/profile.png'
import GoBack from '../../assets/profile/goback.png';
import { Link } from 'react-router-dom';
import password from '../../assets/profile/password.png'
import i from '../../assets/profile/i.png'
import { useState } from 'react';

function UserInformationMain() {
    
    const [change, setChange] = useState(false);
    
    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px] gap-[30px]"> 
             <section className="w-full flex items-center justify-between py-5 px-3 border border-gray-100">
                <div className='flex items-center justify-start gap-[10px]'>
                    <img src={profile} alt="" />
                    <p className='text-[24px] max-[500px]:text-[20px]'>İstifadəçi məlumatları</p>
                </div>
                <Link to={'/profile'} className='flex items-center justify-end gap-[10px]'>
                    <img src={GoBack} alt="" />
                    <p className='text-[14px] text-[#292D32]'>Geri qayit</p>
                </Link>
            </section>

            <section className='w-full flex items-center justify-between gap-[30px]'>
                <section className='w-[70%] flex flex-col justify-between items-start border p-3 border-gray-100 min-h-[550px] max-h-[550px]'>

                    <div className="w-full flex items-center justify-start border border-gray-50 gap-[20px]">
                        <img src={profile} alt="" />
                        <p className='text-[18px] max-[500px]:text-[20px]'>Məlumatları yenilə</p>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-center mt-2 w-[49%]">
                            <label htmlFor="ad" className="text-[14px] mb-1 ml-1">
                                Ad
                            </label>
                            <input
                                type="text"
                                id="ad"
                                className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center mt-2 w-[49%]">
                            <label htmlFor="soyad" className="text-[14px] mb-1 ml-1">
                                Soyad
                            </label>
                            <input
                                type="text"
                                id="soyad"
                                className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-center mt-2 w-[49%]">
                            <label htmlFor="ad" className="text-[14px] mb-1 ml-1">
                                Mobil nomre
                            </label>
                            <div className="flex border-gray-300 border rounded-md w-full px-2">
                                <span className="flex items-center justify-center py-2">+994</span>
                                <input
                                    type="text"
                                    placeholder="077 325 69 75"
                                    className="w-full py-2 pl-2 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center mt-2 w-[49%]">
                            <label htmlFor="soyad" className="text-[14px] mb-1 ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="soyad"
                                className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                                required
                                placeholder='nacittagiyev@gmail.com'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-start w-[49%]'>
                        <label htmlFor="soyad" className="text-[14px] mb-1 ml-1">
                            Dogum tarixi 
                        </label>
                        <input
                            type="date"
                            id="soyad"
                            className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                            required
                            placeholder='nacittagiyev@gmail.com'
                        />
                    </div>

                    <div className='flex flex-wrap'>
                        <div className="flex items-center me-4">
                            <input id="red-radio" type="radio" value="red" name="colored-radio" className='w-4 h-4'/>
                            <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kisi</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="green-radio" type="radio" value="green" name="colored-radio" className='w-4 h-4'/>
                            <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Qadin</label>
                        </div>
                    </div>

                    <div className='text-white bg-[#26264C] w-[70%] py-3 flex items-center justify-center'>
                        Yadda Saxla
                    </div>

                </section>

                <section className='w-[30%] flex flex-col justify-between border p-3 border-gray-100 max-h-[550px] min-h-[550px]'>

                    <div className="w-full flex items-center justify-start border border-gray-50 gap-[20px]">
                        <img src={password} alt="" />
                        <p className='text-[18px] max-[500px]:text-[20px]'>Şifrəni dəyiş</p>
                    </div>

                    <div className="flex flex-col items-start justify-center mt-2 flex-2">
                        <label htmlFor="ad" className="text-[14px] mb-1 ml-1">
                            Hazırki şifrə
                        </label>
                        <input
                            type="password"
                            id="ad"
                            className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col items-start justify-center mt-2 flex-2">
                        <label htmlFor="ad" className="text-[14px] mb-1 ml-1">
                            Yeni şifrə
                        </label>
                        <input
                            type="password"
                            id="ad"
                            className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                            required
                        />
                    </div>
                   
                    <div className="flex flex-col items-start justify-center mt-2 flex-2">
                        <label htmlFor="ad" className="text-[14px] mb-1 ml-1">
                            Şifrəni təsdiq edin
                        </label>
                        <input
                            type="password"
                            id="ad"
                            className="w-full py-2 rounded-md border border-gray-300 pl-1 focus:outline-none"
                            required
                        />
                    </div>

                    <div className='w-full p-1 flex items-center gap-[10px]'>
                        <img src={i} alt="" />
                        <p className='text-[#9B96B7] text-[14px] leading-4'>
                            Şifrə hərf və rəqəm daxil olmaqla 
                            ən azı 8 simvoldan ibarət olmalıdır
                        </p>
                    </div>
                                        
                    <div className={`text-white bg-[#26264C] w-full py-3 flex items-center justify-center transition-opacity duration-300 ${change ? "opacity-100" : "opacity-70"}`}>
                        Yadda Saxla
                    </div>

                    <div className='text-black bg-[#F4F4F6] w-full py-3 flex items-center justify-center transition-opacity duration-300 hover:opacity-100' onClick={() => setChange(true)}>
                        Şifrəni unutmusan ?
                    </div>

                </section>
            </section>

        </section>  
    )
}


export default UserInformationMain