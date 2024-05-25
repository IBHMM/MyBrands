import { useState } from "react";
import { useSelector } from "react-redux";
import greentruck from '../../assets/products/greentruck.png'

function ProductOpenMain() {
    const product = useSelector(state => state.user.ActiveProduct);

    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex flex-col items-start justify-start px-3 py-2 max-h-[611px] mt-[50px]">
            <ProductOrderPart product={product}/>
            <AboutProduct product={product}/>
        </section>        
    )
}

function ProductOrderPart({product}) {

    const [activesrc, setActiveSrc] = useState(product.images[0]);
    const [activecolor, setActiveColor] = useState(product.images[0]);

    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex items-center justify-start px-3 py-2 max-h-full">
            <section className="flex items-center justify-between w-[609px]">
                <section className="flex flex-col items-start justify-start gap-[10px] h-[611px]">
                    {
                        product.images.map((src, index) => {
                            return (
                                <img src={src} alt="src" key={index} className={`w-[82px] h-[112px] border ${activesrc == src ? 'border-red-300' : 'border-gray-300'} `} onClick={() => setActiveSrc(src)}/>
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
                <p className="text-[24px] text-[#292D32]">{product.price} AZN</p>
                
                <div className="w-[400px] h-[77px] border border-[#14AE5C] bg-[#14AE5C] bg-opacity-5 flex flex-col items-start justify-center pl-5 mt-[10px]">
                    <div className="flex items-center gap-[10px]">
                        <p className="text-[#14AE5C] text-[18px]">Pulsuz çatdırılma!</p>
                        <img src={greentruck} alt="" />
                    </div>
                    <div>
                        100 Azn və üzəri sifarişlər ödənişsiz çatdırılır.
                    </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <p>Rəng:</p>
                    <div className="flex items-center justify-start gap-[10px]">
                        {
                            product.images &&
                            product.images.map((color, index) => {
                                return (
                                    <img src={color} key={index} className={`w-[56px] h-[76px] ${activecolor == color ? "border border-red-300" : "border border-gray-300"}`} onClick={() => setActiveColor(color)}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}


function AboutProduct({product}) {
    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex items-center justify-start px-3 py-2">
            About
        </section>
    )
}


export default ProductOpenMain;