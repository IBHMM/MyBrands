import top from '../../assets/products/top.png';
import bottom from '../../assets/products/bottom.png';
import { useState } from 'react';
import './style/style.css';

function SideBar() {
    const [gender, setGender] = useState({ value: "", state: false });
    const [price, setPrice] = useState({ min: 0, max: 0, state: false });

    return (
        <aside className="flex flex-col min-w-[294px]">
            <section className="max-w-full min-w-full flex flex-col items-center justify-between bg-red border border-gray-300 px-3 p-4 gap-[20px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Cins</p>
                    <img
                        src={gender.state ? top : bottom}
                        alt=""
                        onClick={() => setGender({ ...gender, state: !gender.state })}
                    />
                </div>
                {
                    gender.state &&
                    <div className='flex flex-wrap w-full animate'>
                        <div className="flex items-center me-4">
                            <input id="red-radio" type="radio" value="kisi" name="gender-radio" className='w-4 h-4' onChange={e => setGender({ ...gender, value: e.target.value })} />
                            <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kisi</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="green-radio" type="radio" value="qadin" name="gender-radio" className='w-4 h-4' onChange={e => setGender({ ...gender, value: e.target.value })} />
                            <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Qadin</label>
                        </div>
                    </div>
                }
            </section>

            <section className="max-w-full min-w-full flex flex-col items-center justify-between  bg-red border border-gray-300 px-3 p-4 gap-[20px] mt-[10px]">
                <div className='flex w-full items-center justify-between'>
                    <p>Qiymət aralığı</p>
                    <img
                        src={price.state ? top : bottom}
                        alt=""
                        onClick={() => setPrice({ ...price, state: !price.state })}
                    />
                </div>
                {
                    price.state &&
                    <div className='flex items-center justify-around animate'>
                        <div className='flex flex-col items-center justify-center p-1'>
                            <label htmlFor="min">Min</label>
                            <input type="text" name="min" id="min" className='w-[100px] p-2 bg-yellow-50' onChange={e => setPrice({ ...price, min: e.target.value })} />
                        </div>
                        <div className='flex flex-col items-center justify-center p-1'>
                            <label htmlFor="max">Max</label>
                            <input type="text" name="max" id="max" className='w-[100px] p-2 bg-yellow-50' onChange={e => setPrice({ ...price, max: e.target.value })} />
                        </div>
                    </div>
                } 
            </section>
        </aside>
    );
}

export default SideBar;
