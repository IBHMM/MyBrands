import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import greentruck from '../../assets/products/greentruck.png'
import right from '../../assets/home/rightT.png'
import card from '../../assets/products/card.png'
import like from '../../assets/products/like.png'
import { removeProduct, addProduct, addProducttocard } from "../../features/User/UserSlice";
import RatingSize from "./Layout/Rating";
import liked from '../../assets/products/likedC.png';
import Card from '../../components/home/Layout/Card'

function ProductOpenMain() {
    const product = useSelector(state => state.user.ActiveProduct);

    return (
        <section className="w-[80%] max-[1200px]:w-[100%] flex flex-col items-start justify-start px-3 py-2  mt-[50px]">
            <ProductOrderPart product={product}/>
            <AboutProduct product={product}/>
            <SimilarProducts product={product}/>
        </section>        
    )
}


async function SetCardItem(product) {
    const respose = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/cart/', {
        method: "POST",
        body: {
            product: product.id,
            quantity: 1
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(respose.ok) {
        return true;
    }

    return false
}

function ProductOrderPart({product}) {
    const temp = [{size : 'XS', aviable: true},{size : 'S', aviable: false},{size : 'M', aviable: true},{size : 'L', aviable: false},{size : 'XL', aviable: true}];
    const [activesrc, setActiveSrc] = useState(product.images[0]);
    const [activecolor, setActiveColor] = useState(product.images[0]);
    const [isadded, setIsadded] = useState({b: false, msg: ""});
    const [activesize, setActiveSize] = useState({size: '', aviable: ''})
    const wishlist = useSelector(state => state.user.wishlist);
    const [isliket, setIsliked] = useState(wishlist.some(prd => prd.id == product.id))
    const dispatch = useDispatch();

    const HandleLike = () => {
        if (isliket) {
            setIsliked(!isliket);
            dispatch(removeProduct(product));
        }else {
            setIsliked(!isliket);
            dispatch(addProduct(product));
        }
    }

    const HandleAddCard = async  e => {
        e.preventDefault();
        const result = await SetCardItem(product);
        if (result || true) {
            dispatch(addProducttocard(product));
            setIsadded({b: true, msg: ""})
        }else {
            setIsadded({b: false, msg: "Please try again"})
        }
    }


    return (
        <section className="w-full flex items-center justify-start px-3 py-2 max-h-full max-[800px]:flex-col max-[800px]:w-full gap-[10px]">

            <section className="flex items-center justify-between w-full min-[800]:w-[60%]">
                <section className="flex flex-col items-start justify-start gap-[10px] h-[611px] max-[1300px]:hidden">
                    {
                        product.images.map((src, index) => {
                            return (
                                <img src={src} alt="src" key={index} className={`rounded-sm w-[82px] h-[112px] border ${activesrc == src ? 'border-red-300' : 'border-gray-300 '} `} onClick={() => setActiveSrc(src)}/>
                            )
                        })
                    }
                </section>

                <section className="w-full items-center justify-evenly overflow-x-auto hidden max-[1300px]:flex">

                    {
                        product.images.map((img, index) => {
                            return (
                                <img src={img} alt="" className="min-[800px]:h-[611px] h-[500px] w-full max-[800px]:w-[50%]" />                
                            )
                        })
                    }
                
                </section>

                <section className="flex w-full items-center justify-evenly overflow-x-auto max-[1300px]:hidden">
                    <img src={activesrc} alt="" className="min-[800px]:h-[611px] h-[500px] w-full" />                
                </section>



            </section>

            <section className="w-full min-[800]:w-[40%] flex flex-col items-start justify-center h-[611px]">
                
                <div className="w-full flex flex-col  items-start justify-center max-[800px]:flex-col-reverse">
                    <p className="text-[16px] text-[#9B96B7]">{product.brand}</p>
                    <p className="text-[20px] text-[#292D32]">{product.title}</p>
                    <RatingSize value={product.rating}/>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[24px] text-[#292D32]">{product.price} AZN</p>
                        <button className={` hidden max-[800px]:flex items-center justify-center w-[48px] h-[48px] transition-all duration-300 hover:scale-80 ${isliket ? 'border-[0px] bg-white' : 'flex'}`} onClick={HandleLike}>
                            <img src={isliket ? liked : like} alt="" />
                        </button>
                    </div>
                    
                </div>
                
                <div className="max-w-[340px] h-[77px] border border-[#14AE5C] bg-[#14AE5C] bg-opacity-5 flex flex-col items-start justify-center p-10 mt-[30px]">
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

                <div className=" flex flex-col items-start justify-start gap-[15px] mt-[30px] w-full">
                        <div className="w-full flex items-center justify-between ">
                            <p className="text-[#292D32] text-[16px] font-semibold">Bədən:</p>
                            <button className="flex items-center justify-between gap-[7px] text-[14px] text-[#484C52]">
                                Ölçü Cədvəli
                                <img src={right} alt="" className="w-[8px] flex items-center justify-center"/>
                            </button>
                        </div>
                        <div className="w-[400px] max-[800px]:w-full flex items-center justify-between">
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
                    <button className="w-full h-[48px] bg-[#26264C] text-white flex items-center justify-center gap-[10px] text-[16px] font-semibold transition-all duration-300 hover:rounded-xl active:scale-90" onClick={e => HandleAddCard(e)}>
                    {
                        !isadded.b ? 
                            <>
                                <img src={card} alt="" />
                                {'SƏBƏTƏ ƏLAVƏ ET'} 
                            </> :  
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-white animate-spin" viewBox="0 0 100 101" fill="#26264C" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                    }
                    </button>
                    <button className={`custom items-center justify-center w-[48px] h-[48px] transition-all duration-300 hover:scale-80`} onClick={HandleLike}>
                        <img src={isliket ? liked : like} alt="" />
                    </button>
                </div>


                
            </section>

        </section>
    )
}


function AboutProduct({product}) {


    return (
        <section className="w-full flex flex-col items-center justify-start ">
            <div className="w-full text-[20px]">
                Məhsul haqqında
            </div>
            <div className="w-full flex flex-col items-start justify-start">
                <p className="text-[18px] py-3">Məhsulun kodu: {product.sku}</p>
                <ul className="text-[#484C52] text-[16px]" >
                    <li>- {product.description}</li>
                    <li>- {product.title}</li>
                    <li>- {product.category}</li>
                    <li>- {product.brand}</li>
                </ul>
            </div>
        </section>
    )
}

function SimilarProducts({product}) {

    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then(res => res.json())
            .then(json => setSimilar(json.products));
    }, [])

    return (
        <section className="relative flex flex-col justify-center items-center w-full mt-[70px] gap-[30px] overflow-auto">
            <div className="flex items-center justify-between w-full">
                <p className="text-[30px]">Bənzər məhsullar</p>
            </div>
            <div className="flex items-center justify-between w-full overflow-y-auto gap-[18px] max-[500px]:gap-3">
                {similar.map((item, idx) => (
                    <Card product={item} key={idx} />
                ))}
            </div>
        </section>
    );
}


export default ProductOpenMain;