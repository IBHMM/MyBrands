import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import greentruck from '../../assets/products/greentruck.png'
import like from '../../assets/products/like.png'
import bin from '../../assets/products/bin.png'

function CardMain() {

    const card = useSelector(state => state.user.userCard);
    const [totalCost, setTotalCost] = useState();
    const [productcost, setProductCost] = useState();


    useEffect(() => {
        let total = 0;
        card.forEach(element => {
            total += element.total;
        });

        if(total > 100) {
            setTotalCost(Math.round(total))
            setProductCost(Math.round(total))
        }else {
            setTotalCost(Math.round(total) + 50)
            setProductCost(Math.round(total))
        }
    })


    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">

            <div className="w-full flex items-center justify-between py-5 px-3 border border-gray-50 max-[500px]:gap-[20px]">
                <p className='text-[24px] max-[500px]:text-[20px]'>Səbət</p>        
            </div>

            <div className="flex items-start justify-between w-full gap-[20px] mt-[30px]">
            
                <div className="flex flex-col items-center justify-center w-full  gap-[20px]">
                    <div className="flex items-center justify-between w-full p-5 border ">
                        <p className="text-[18px] font-semibold">Səbətə əlavə edilmiş məhsullar</p>
                        <p className="text-[14px] text-[#484C52]">Səbətinizdə {card.length} məhsul var.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full gap-[20px]">
                        {
                            card.map((order, index) => {
                                return (
                                    <div className="flex h-[130px] border border-[#F4F4F6] w-full" key={index}>
                                        <div className="bg-[#F9F8FC] flex items-center justify-center h-full w-[96px]">
                                            <img src={order.thumbnail} alt="" className="w-full h-full"/>
                                        </div>
                                        <div className="w-full flex items-center justify-between pl-3"> 
                                            <div className="flex flex-col items-start justify-between gap-[10px]">
                                                <p>{order.title}</p>
                                                <div className="w-full flex items-center justify-start gap-[10px]">
                                                    <p className="text-[#F84568]">{order.price} AZN</p>
                                                    {
                                                        (order.discountPercentage > 0) && 
                                                        <>
                                                            <p className="text-[13px] text-[#9B96B7] line-through">
                                                                {order.price*order.discountPercentage / 100}
                                                            </p>
                                                            <p className="text-[#F84568]">
                                                                {order.discountPercentage}%
                                                            </p>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>  

                <div className="flex flex-col items-center justify-center min-w-[400px] border border-[#F4F4F6]">
                    <div className="flex w-full items-center justify-start text-[18px] p-5">
                        Sifarişin detalları
                    </div>
                    <div className="w-full flex items-center justify-between p-5 border-t-[1px] border-[#F4F4F6]">
                        <p className="text-[16px] text-[#9B96B7]">
                            Məhsulun dəyəri:
                        </p>
                        <p className="text-[16px] text-[#9B96B7]">
                            {productcost} AZN
                        </p>
                    </div>
                    <div className="w-full flex flex-col  gap-[20px] items-center justify-between p-5 border-t-[1px] border-[#F4F4F6]">
                        <div className="w-full flex items-center justify-between ">
                            <p className="text-[20px] font-semibold ">
                                Toplam məbləğ:
                            </p>
                            <p className="text-[20px] text-[#F84568]">
                                {totalCost} AZN
                            </p>

                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button className="w-full h-[48px] bg-[#26264C] text-white flex items-center justify-center gap-[10px] text-[16px] font-semibold transition-all duration-300 hover:rounded-xl active:scale-90">
                                Səbəti təsdiq et
                            </button>    
                        </div>
                        <div className="w-full h-[77px] border border-[#14AE5C] bg-[#14AE5C] bg-opacity-5 flex flex-col items-start justify-center p-5">
                            <div className="flex items-center gap-[10px]">
                                <p className="text-[#14AE5C] text-[18px]">Pulsuz çatdırılma!</p>
                                <img src={greentruck} alt="" />
                            </div>
                            <div className="text-[14px]">
                                100 Azn və üzəri sifarişlər ödənişsiz çatdırılır.
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}




export default CardMain;