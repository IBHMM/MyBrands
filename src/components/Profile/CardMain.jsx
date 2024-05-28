import { useSelector, useDispatch } from "react-redux";

function CardMain() {

    const card = useSelector(state => state.user.userCard);


    return (
        <section className="flex flex-col items-center justify-between w-[80%] max-[1200px]:w-[90%] mt-[30px]">
            <div className="w-full flex items-center justify-between py-5 px-3 border border-gray-50  max-[500px]:gap-[20px]">
                <p className='text-[24px] max-[500px]:text-[20px]'>Səbət</p>
            </div>

            <div className="flex items-center justify-between w-full">
            
                <div className="flex flex-col items-center justify-center w-[824px]">
                    <div className="flex items-center justify-between w-full p-5 border ">
                        <p className="text-[18px] font-semibold">Səbətə əlavə edilmiş məhsullar</p>
                        <p className="text-[14px] text-[#484C52]">Səbətinizdə {card.length} məhsul var.</p>
                    </div>
                    <div className="flex flex-col w-full">

                    </div>
                </div>  

                <div></div>
            
            </div>
        </section>
    )
}




export default CardMain;