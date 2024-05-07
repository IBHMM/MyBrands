import React from "react";
import TT from '../../../assets/home/tiktok.svg'
import FB from '../../../assets/home/facebook.svg'
import YT from '../../../assets/home/youtube.svg'
import IN from '../../../assets/home/instagram.svg'
import email from '../../../assets/home/email.png'
import mobile from '../../../assets/home/mobile.png'
import customer from '../../../assets/home/customer.png'
import googleplay from '../../../assets/home/googleplay.png'
import appstore from '../../../assets/home/appstore.png'
import '../style/style.css'

function Footer () {
  return (
    <footer className='flex items-stretch justify-between w-[80%] max-[1200px]:w-[90%] mt-[100px] gap-[100px] relative left-0 pb-20 border-t-[1px] pt-1 border-gray-100 max-[1069px]:flex-col'>
        <div className="flex items-start justify-between w-full">
            <div className="flex flex-col justify-center gap-4 w-"> 
                <p className="text-[18px] mb-5">MyBrands</p>
                <a className="a">Haqqımızda</a>
                <a className="a">Ödəniş və çatdırılma</a>
                <a className="a">Qaytarılma siyasət</a>
                <a className="a">Müştəri xidməti</a>
            </div>
            <div className="flex flex-col justify-center gap-4"> 
                <p className="text-[18px] mb-5">Mağaza</p>
                <a className="a">Kişi</a>
                <a className="a">Qadın</a>
                <a className="a">Uşaq</a>
                <a className="a">Endirimlər</a>
            </div>
            <div className="flex flex-col justify-center gap-4"> 
                <p className="text-[18px] mb-5">Hesab</p>
                <a className="a">Qeydiyyat</a>
                <a className="a">Sifariş</a>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 w-full">
            <p className="text-[18px] mb-5">Əlaqə</p>
            <div className="flex items-center">
                <img src={email} alt="" />
                <p className="ml-2">help@mybrands.az</p>
            </div>
            <div className="flex items-center">
                <img src={mobile} alt="" />
                <div className="flex flex-col items-start justify-center ml-2">
                    <p>+994504114114</p>
                    <p className="a text-[#9B96B7]">Online mağaza</p>
                </div>
            </div>
            <div className="flex items-center ">
                <img src={customer} alt="" />
                <div className="flex flex-col items-start justify-center ml-2">
                    <p>*0114</p>
                    <p className="a text-[#9B96B7]">Müştəri xidmətləri</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 w-full">
            <p className="text-[18px] mb-5">Bizi izləməyi unutmayın</p>
            <p className="text-[#9B96B7] text-[18px]">Bizim müştərilər qrupuna qoşulun. Yeni məhsullar <br /> və aksiyalardan ilk siz xəbərdar olun.</p>
            <div className="flex flex-col ">
                <div className="w-full flex items-center justify-center">
                    <input type="text" name="" id="" placeholder="numune@gmail.com" className="w-full border border-[#F4F4F6] py-1 focus:outline-none pl-2"/>
                    <span className="border-[2px] rounded-md border-[#F84568] text-[#F84568] w-[140px] flex items-center justify-center py-1">Abunə ol</span>
                </div>
                <div className="flex items-center gap-[20px] w-[80%] mt-[30px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] border border-gray-200">
                        <img src={FB} alt="" className="" />
                    </div>
                    <div className="bg-[#26264C] flex items-center justify-center w-[50px] h-[50px] ">
                        <img src={IN} alt="" className="" />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] border border-gray-200">
                        <img src={YT} alt="" className="" />
                    </div>
                    <div className="flex items-center justify-center w-[50px] h-[50px] border border-gray-200">
                        <img src={TT} alt="" className="" />
                    </div>
               
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 flex left-0 gap-[10px]">
            <img src={appstore} alt="" />
            <img src={googleplay} alt="" />
        </div>
    </footer>
  );
};

export default Footer;