import Banner from "./Layout/Banner";
import UseSignin from "../../hooks/Registration/Signin";

function SigninForm() {
    const {
        num, error,  pas, setNum, setPas, HandleSubmit
    } = UseSignin()

    console.log(num, pas)

    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full">
                <Banner />
                <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                    <p className="text-[32px] text-[#292D32] font-bold mb-[20px]">
                    Daxil ol
                    </p>
                    <label htmlFor="number" className="text-[14px] mb-[-5px]">
                        Nomre
                    </label>
                    <div className={`flex items-center justify-start border border-[#ECECEE] h-[48px] ${error ? "border-red-500" : "border-[#ECECEE]"}`}>
                        <p className="pl-2">+994</p>
                        <input
                            id="number" 
                            type="text" 
                            placeholder="70 325 69 75" 
                            className={`w-[80%] h-[46px] ml-3 focus:outline-none`}
                            onChange={e => setNum("+994" + e.target.value)}    
                        />
                    </div>
                    <label htmlFor="password" className="text-[14px] mb-[-5px]">
                        Password
                    </label>
                    <div  className={`flex items-center justify-start border border-[#ECECEE] h-[48px] ${error ? "border-red-500" : "border-[#ECECEE]"}`}>
                        <input 
                        id="password" 
                        type="text"
                        value={pas}
                        placeholder="**********" 
                        className="w-[80%] h-[46px] ml-5 focus:outline-none"
                        onChange={e => setPas(e.target.value)}    
                    />
                    </div>
                    
                    <button 
                        className="bg-[#26264C] text-white h-[48px] mt-4 transition-all duration-200 hover:opacity-70 active:scale-90"
                        onClick={HandleSubmit}    
                    >                     
                        Daxil ol
                    </button>

                    <span className="text-[13px] text-[#9B96B7] w-full flex items-center justify-center gap-[3px] mt-[30px]">
                    Hesabiniz yoxdu?{" "}
                    <a className="text-[#26264C] underline font-semibold" href="/signup">
                        Qeydiyyatdan keç
                    </a>
                    </span>
                </div>
        </section>
  );
}

export default SigninForm;
