import top from '../../assets/products/top.png';
import bottom from '../../assets/products/bottom.png';
import { useState } from 'react';
import './style/style.css';
import { useSelector } from 'react-redux';
import {colors, sizes} from '../../utils/Products/Constants'

function SideBar() {
    const [gender, setGender] = useState({ value: [], state: false });
    const [price, setPrice] = useState({ min: 0, max: 0, state: false });
    const [color, setColor] = useState({value: [], state: false})
    const [brand, setBrand] = useState({ value: [], state: false });
    const [size, setSize] = useState({value: [], state: false });
    const brands = useSelector(state => state.home.Brands);

    const HandleGender = (event, gen) => {
        const index = gender.value.findIndex(g => g == gen);
        if (index == -1) {
            setGender({ ...gender, value: [...gender.value, gen]})
        }else {
            const genders = gender.value.filter(g => g != gen);
            setGender({value: genders, state: gender.state})
        }
    }

    const HandleBrand = (event, brd) => {
        const index = brand.value.findIndex(b => b == brd);
        if (index == -1) {
            setBrand({ ...brand, value: [...brand.value, brd]})
        }else {
            const brands = brand.value.filter(b => b != brd);
            setBrand({value: brands, state: brand.state})
        }
    }

    const HandleColor = (event, clr) => {
        const index = color.value.findIndex(c => c == clr);
        if (index == -1) {
            setColor({ ...color, value: [...color.value, clr]})
        }else {
            const colors = color.value.filter(c => c != clr);
            setColor({value: colors, state: color.state})
        }
    }

    const HandleSize = (event, sz) => {
        const index = size.value.findIndex(s => s == sz);
        if (index == -1) {
            setSize({ ...size, value: [...size.value, sz]})
        }else {
            const sizes = size.value.filter(s => s != sz);
            setSize({value: sizes, state: size.state})
        }
    }


    return (
        <aside className="flex flex-col min-w-[294px]">


            <section className="max-w-full min-w-full flex flex-col items-center justify-between bg-red border border-gray-300 px-3 p-4 gap-[20px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Cins</p>
                    <img
                        src={bottom}
                        alt=""
                        onClick={() => setGender({ ...gender, state: !gender.state })}
                        className={`${gender.state ? "rotate" : "rotateb"}`}
                    />
                </div>    
                <div className={`flex-col p-3 gap-[4px] w-full animate ${gender.state ? 'flex expandd' : 'hidden'}`}>
                    <div className="flex items-center me-4">
                        <input id="kisi" type="checkbox" value="kisi" name="gender-checkbox" className='w-4 h-4' onChange={e => HandleGender(e, e.target.value)} />
                        <label htmlFor="kisi" className="ms-2 text-[14px] text-gray-500">Kisi</label>
                    </div>
                    <div className="flex items-center me-4">
                        <input id="qadin" type="checkbox" value="qadin" name="gender-checkbox" className='w-4 h-4' onChange={e => HandleGender(e, e.target.value)} />
                        <label htmlFor="qadin" className="ms-2 text-[14px] text-gray-500">Qadin</label>
                    </div>
                    <div className="flex items-center me-4">
                        <input id="oglan" type="checkbox" value="oglan" name="gender-checkbox" className='w-4 h-4' onChange={e => HandleGender(e, e.target.value)} />
                        <label htmlFor="oglan" className="ms-2 text-[14px] text-gray-500">Oglan</label>
                    </div>
                    <div className="flex items-center me-4">
                        <input id="qiz" type="checkbox" value="qiz" name="gender-checkbox" className='w-4 h-4' onChange={e => HandleGender(e, e.target.value)} />
                        <label htmlFor="qiz" className="ms-2 text-[14px] text-gray-500">Qiz</label>
                    </div>
                </div>
            </section>


            <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Qiymət aralığı</p>
                    <img
                        src={bottom}
                        alt=""
                        onClick={() => setPrice({ ...price, state: !price.state })}
                        className={`${price.state ? "rotate" : "rotateb"}`}
                    />
                </div>              
                    <div className={`flex items-center justify-around flex-wrap w-full animate ${price.state ? 'flex expandd' : 'hidden'}`}>
                        <div className='flex flex-col items-center justify-center p-1'>
                            <input type="text" name="min" id="min" placeholder="Min" className='w-[100px] p-2 bg-gray-100 text-black rounded-md focus:outline-none' onChange={e => setPrice({ ...price, min: e.target.value })} />
                        </div>
                        <div className='flex flex-col items-center justify-center p-1'>
                        <input type="text" name="max" id="max"  placeholder="Max" className='w-[100px] p-2 bg-gray-100 text-black rounded-md  focus:outline-none' onChange={e => setPrice({ ...price, max: e.target.value })} />
                    </div>
                </div>
            </section>


            <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Brendler</p>
                    <img
                        src={bottom}
                        alt=""
                        onClick={() => setBrand({...brand, state : !brand.state})}
                        className={`${brand.state ? "rotate" : "rotateb"}`}
                    />
                </div>  

                <div className={`flex-col gap-[4px] w-full p-3 items-start justify-start ${brand.state ? 'flex' : 'hidden'}`}>
                    {
                        brands.map((brd, index) => {
                            return (
                                <div className='flex w-full gap-[4px]' key={index}>
                                    <input type="checkbox" name={brd.name} id={brd.name} value={brd.name} onChange={e => HandleBrand(e, brd.name)}/>
                                    <label htmlFor={brd.name} className='text-[14px] text-gray-500'>{brd.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </section>


            <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Rəng</p>
                    <img
                        src={bottom}
                        alt=""
                        onClick={() => setColor({...color, state : !color.state})}
                        className={`${color.state ? "rotate" : "rotateb"}`}
                    />
                </div>  

                <div className={`grid grid-cols-5 gap-[4px] w-full p-3 ${color.state ? 'flex' : 'hidden'}`}>
                    {
                        colors.map((clr, index) => {
                            return (
                                <div    className={`animate w-[32px] h-[32px] flex items-center justify-center border rounded-[50%]`} 
                                        style={{background: clr.hex}} 
                                        key={index}
                                        onClick={e => HandleColor(e, clr.name)}
                                >
                                    <div className={`w-[13.33px] h-[13.33px] rounded-[50%] bg-white ${color.value.some(c => c == clr.name) ? 'inline animate' : 'hidden'}`}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            
            <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Rəng</p>
                    <img
                        src={bottom}
                        alt=""
                        onClick={() => setSize({...size, state : !size.state})}
                        className={`${size.state ? "rotate" : "rotateb"}`}
                    />
                </div>  

                <div className='w-full grid grid-cols-4 p-3'>

                </div>

            </section>

        </aside>
    );
}

export default SideBar;
