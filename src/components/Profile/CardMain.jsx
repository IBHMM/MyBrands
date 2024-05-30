import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import greentruck from '../../assets/products/greentruck.png'
import like from '../../assets/products/like.png'
import bin from '../../assets/products/bin.png'
import redM from '../../assets/products/redminus.png'
import blackM from '../../assets/products/blackminus.png'
import redplus from '../../assets/products/redplus.png'
import { UpdateProductcard, addProduct, removeProduct, removeProductfromcard, setProduct } from "../../features/User/UserSlice";
import liked from '../../assets/products/likedC.png'
import EmptyCard from "./EmptyCard";
import info from '../../assets/products/info.png'

function CardMain() {

    const card = useSelector(state => state.user.userCard);
    const [totalCost, setTotalCost] = useState();
    const [productcost, setProductCost] = useState();

    useEffect(() => {
        let total = 0;
        card.forEach(element => {
            total += element.price * element.quantity;
        });

        if(total > 100) {
            setTotalCost(Math.round(total))
            setProductCost(Math.round(total))
        }else {
            setTotalCost(Math.round(total) * 20 / 100)
            setProductCost(Math.round(total))
        }
    }, [card]);


    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">

            <div className="w-full flex items-center justify-between py-5 px-3 border border-gray-50 max-[500px]:gap-[20px]">
                <p className='text-[24px] max-[500px]:text-[20px]'>Səbət</p>        
            </div>

            {
                card.length > 0 ? 

                <div className="flex items-start justify-between w-full gap-[20px] mt-[30px] max-[1147px]:flex-col  max-[1147px]:gap-[30px]">
                
                    <div className="flex flex-col items-center justify-center w-full  gap-[20px]">
                        <div className="flex items-center justify-between w-full p-5 border ">
                            <p className="text-[18px] font-semibold">Səbətə əlavə edilmiş məhsullar</p>
                            <p className="text-[14px] text-[#484C52]">Səbətinizdə {card.length} məhsul var.</p>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[30px]">
                            {
                                card.map((order, index) => {
                                    return (
                                        <Order order={order} key={index} card={card}/>
                                    )
                                })
                            }
                        </div>
                    </div>  

                    <div className="flex flex-col items-center justify-center w-[50%] border border-[#F4F4F6] max-[1147px]:w-full ">
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
                
                </div> :

                <EmptyCard />
            }
        </section>
    )
}


function Order({ order, card }) {
    const [minuscolor, setMinusColor] = useState(card.length > 1 ? redM : blackM);
    const [count, setCount] = useState(order.quantity);
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.user.wishlist);

    const handleCardChange = (e, order, delta) => {
        const newCount = count + delta;
        if (newCount >= 0) {
            setCount(newCount);
            dispatch(UpdateProductcard({ ...order, quantity: newCount }));
        }
    };

    const handleDelete = (e, order) => {
        dispatch(removeProductfromcard(order));
    };

    return (
        <div className="flex flex-col min-h-[130px] border border-[#F4F4F6] w-full" key={order.id}>
            <div className="flex h-[130px] w-full" key={order.id}>
                <div className="bg-[#F9F8FC] flex items-center justify-center h-full min-w-[96px]">
                    <img src={order.thumbnail} alt={order.title} className="w-full h-full" />
                </div>
                <div className="w-full flex items-center justify-between pl-3">
                    <div className="flex flex-col items-start justify-between gap-[10px]">
                        <p className="max-[800px]:text-[12px]">{order.title}</p>
                        <div className="w-full flex items-center justify-start gap-[10px]">
                            <p className="text-[#F84568] max-[800px]:text-[12px]">{order.price} AZN</p>
                            {order.discountPercentage > 0 && (
                                <>
                                    <p className="text-[13px] text-[#9B96B7] line-through max-[800px]:text-[10px]">
                                        {Math.round(order.price * order.discountPercentage / 100)}
                                    </p>
                                    <p className="text-[#F84568] max-[800px]:text-[12px]">
                                        {Math.round(order.discountPercentage)}%
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-[30px] pr-5">
                        <div className="flex flex-col items-center justify-center max-[1147px]:hidden">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90" onClick={e => handleCardChange(e, order, -1)}>
                                    <img src={minuscolor} alt="Decrease" />
                                </div>
                                <div className="flex items-center justify-center cursor-pointer bg-[#FFFFFF] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90">
                                    {count}
                                </div>
                                <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90" onClick={e => handleCardChange(e, order, 1)}>
                                    <img src={redplus} alt="Increase" />
                                </div>
                            </div>
                        </div>
                        <div className="cardbox">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#FAFAFA]" onClick={e => handleDelete(e, order)}>
                                <img src={bin} alt="Delete" className="w-[15px] h-[17px]" />
                            </div>
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#FAFAFA]">
                                {wishlist.some(p => p.title === order.title) ? (
                                    <img src={liked} alt="Remove from Wishlist" className="w-[27px] h-[27px]" onClick={() => dispatch(removeProduct(order))} />
                                ) : (
                                    <img src={like} alt="Add to Wishlist" className="w-[17px] h-[17px]" onClick={() => dispatch(addProduct(order))} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden max-[1147px]:flex items-center justify-end border-t border-[1px] py-1">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-[10px] px-3">
                        <img src={info} alt="Info" />
                        <p className="text-[14px] text-[#484C52]">
                            Son 3 məhsul
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90 rounded-l-[20px]" onClick={e => handleCardChange(e, order, -1)}>
                            <img src={minuscolor} alt="Decrease" />
                        </div>
                        <div className="flex items-center justify-center cursor-pointer bg-[#FFFFFF] w-[40px]">
                            {count}
                        </div>
                        <div className="flex items-center justify-center cursor-pointer bg-[#FAFAFA] w-[40px] h-[40px] transition-all duration-300 hover:scale-110 active:scale-90 rounded-r-[20px]" onClick={e => handleCardChange(e, order, 1)}>
                            <img src={redplus} alt="Increase" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardMain;