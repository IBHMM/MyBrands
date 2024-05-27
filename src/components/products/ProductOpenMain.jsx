import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import greentruck from '../../assets/products/greentruck.png'
import right from '../../assets/home/rightT.png'
import card from '../../assets/products/card.png'
import like from '../../assets/products/like.png'
import addProduct from '../../features/User/UserSlice'
import RatingSize from "./Layout/Rating";

function ProductOpenMain() {
    const product = useSelector(state => state.user.ActiveProduct);

    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex flex-col items-start justify-start px-3 py-2  mt-[50px]">
            <ProductOrderPart product={product}/>
            <AboutProduct product={product}/>
        </section>        
    )
}

function ProductOrderPart({product}) {
    const temp = [{size : 'XS', aviable: true},{size : 'S', aviable: false},{size : 'M', aviable: true},{size : 'L', aviable: false},{size : 'XL', aviable: true}];
    const [activesrc, setActiveSrc] = useState(product.images[0]);
    const [activecolor, setActiveColor] = useState(product.images[0]);
    const [activesize, setActiveSize] = useState({size: '', aviable: ''})
    const dispatch = useDispatch();

    return (
        <section className="w-full flex items-center justify-start px-3 py-2 max-h-full">

            <section className="flex items-center justify-between w-[609px]">
                <section className="flex flex-col items-start justify-start gap-[10px] h-[611px]">
                    {
                        product.images.map((src, index) => {
                            return (
                                <img src={src} alt="src" key={index} className={`rounded-sm w-[82px] h-[112px] border ${activesrc == src ? 'border-red-300' : 'border-gray-300 '} `} onClick={() => setActiveSrc(src)}/>
                            )
                        })
                    }
                </section>
                <section>
                    <img src={activesrc} alt="" className="w-[506px] h-[611px]" />
                </section>
            </section>

            <section className="flex flex-col w-[612px] items-start justify-start h-[611px]">
                <p className="text-[16px] text-[#9B96B7]">{product.brand}</p>
                <p className="text-[20px] text-[#292D32]">{product.title}</p>
                <RatingSize value={product.rating}/>
                <p className="text-[24px] text-[#292D32]">{product.price} AZN</p>
                
                <div className="w-[400px] h-[77px] border border-[#14AE5C] bg-[#14AE5C] bg-opacity-5 flex flex-col items-start justify-center pl-5 mt-[30px]">
                    <div className="flex items-center gap-[10px]">
                        <p className="text-[#14AE5C] text-[18px]">Pulsuz çatdırılma!</p>
                        <img src={greentruck} alt="" />
                    </div>
                    <div>
                        100 Azn və üzəri sifarişlər ödənişsiz çatdırılır.
                    </div>
                </div>

                <div className="flex flex-col gap-[10px] mt-[30px]">
                    <p>Rəng:</p>
                    <div className="flex items-center justify-start gap-[10px]">
                        {
                            product.images &&
                            product.images.map((color, index) => {
                                return (
                                    <img src={color} key={index} className={`w-[56px] h-[76px] rounded-md  ${activecolor == color ? "border border-red-300" : "border border-gray-300"}`} onClick={() => setActiveColor(color)}/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="w-[328px] flex flex-col items-start justify-start gap-[15px] mt-[30px]">
                        <div className="w-full flex items-center justify-between ">
                            <p className="text-[#292D32] text-[16px] font-semibold">Bədən:</p>
                            <button className="flex items-center justify-between gap-[7px] text-[14px] text-[#484C52]">
                                Ölçü Cədvəli
                                <img src={right} alt="" className="w-[8px] flex items-center justify-center"/>
                            </button>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            {
                                temp.map((size, index) => {
                                    return (
                                        <div

                                            className={`flex items-center justify-center w-[56px] h-[40px] border rounded-md cursor-pointer transition-all duration-300 
                                            ${activesize.size == size.size ? 'border-[#F84568] text-[#F84568] bg-[#F8456814]' : (size.aviable) ? 
                                            'border-[#ECECEE] bg-white' : 'border-[#F4F4F6] line-through text-[#9B96B7]'} hover:scale-110 active:scale-90`} 

                                            key={index}
                                            onClick={() => (size.aviable) && setActiveSize(size)}
                                            >
                                            {size.size}
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>

                <div className="flex items-center justify-between w-full h-10 mt-[30px] gap-[10px]">
                    <button className="w-[548px] h-[48px] bg-[#26264C] text-white flex items-center justify-center gap-[10px] text-[16px] text-semibold">
                        <img src={card} alt="" />
                        {'Səbətə əlavə et'.toUpperCase()}
                    </button>
                    <button className="border border-[#ECECEE] flex items-center justify-center bg-[#FAFAFA] w-[48px] h-[48px]">
                        <img src={like} alt="" />
                    </button>
                </div>
            </section>

        </section>
    )
}


function AboutProduct({product}) {
    console.log(product)
    return (
        <section className="w-full flex flex-col items-center justify-start ">
            <div className="w-full text-[20px]">
                Məhsul haqqında
            </div>
            <div className="w-full flex flex-col items-start justify-start">
                <p className="text-[18px] py-3">Məhsulun kodu: {product.sku}</p>
                <ul className="text-[#484C52] text-[16px]">
                    <li>- {product.description}</li>
                    <li>- {product.title}</li>
                    <li>- {product.category}</li>
                    <li>- {product.brand}</li>
                </ul>
            </div>
        </section>
    )
}


export default ProductOpenMain;