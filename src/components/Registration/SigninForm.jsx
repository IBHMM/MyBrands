import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./Layout/Banner";
import FormButton from "./Layout/FormButton";
import RightImage from "./Layout/Desk-Right-Image";
import HandleUserNumber from "../../utils/Registration/helperfunctions";
import UseSignin from "../../hooks/Registration/Signin";

function SigninForm() {
    const {
        num, error, pas, code, 
        method, HandleChange, 
        DirectToHome, HandleCode,
        setNum, setError, setCode,
        setPas 
    } = UseSignin()


    return (
        <section className="flex justify-center items-center flex-col h-screen w-[40%] max-[1200px]:w-[50%] max-[1000px]:w-full">
                <Banner />
                <div className="flex flex-col h-[466px] min-[470px]:w-[379px] max-[469px]:w-[80%] gap-[10px]">
                    <p className="text-[32px] text-[#292D32] font-bold mb-[20px]">
                    Daxil ol
                    </p>
                    <label htmlFor="accesspec" className="text-[14px]">
                    {method == 1 ? "Mobil nomre" : "ID-ni daxil et"}
                    </label>
                    <div className={`flex items-center border rounded-[3px] py-2 pl-2 ${error.number  ? 'border-red-400' : 'borderr-gray-300'}`}>
                    <span className={`${method == 2 ? "hidden" : "inline"}`}>
                        +994
                    </span>
                    {
                        method == 1 ? 
                        <input
                            id="accesspec"
                            onChange={e => HandleChange(e)}
                            className="pl-2 focus:outline-none w-full h-full pb-[2px]"
                            type="text"
                            // value={num}
                            placeholder={
                            method == 1 ? "50 450 45 33" : "COFOT43VH2JDCOSLM"
                            }
                        />
                        : 
                        <input
                            id="accesspec"
                            onChange={e => HandleCode(e)}
                            className="pl-2 focus:outline-none w-full h-full pb-[2px]"
                            type="text"
                            placeholder={"COFOT43VH2JDCOSLM"}
                        />
                    }
                    </div>
                    <label htmlFor="sifre" className="text-[14px]">
                    Sifre
                    </label>
                    <input
                    type="password"
                    className={`border ${error.password  ? 'border-red-400' : 'borderr-gray-300'} rounded-[3px] focus:outline-none py-2 pl-2`}
                    placeholder="***********"
                    onChange={e => setPas(e.target.value)}
                    />
                    <a
                    onClick={() => setForget(!forget)}
                    className="flex w-full items-center justify-end text-[14px]"
                    href="/forget"
                    >
                    Sifreni unutmusan ?
                    </a>
                    
                    {/* send request to end point below button */}
                    
                    <div className="w-full" onClick={() => DirectToHome()}>
                        <FormButton
                            content="Daxil ol"
                            style={{ bg: "#26264C", text: "#FFFFFF", border: "0px" }}
                            method={undefined}
                        />
                    </div>

                    <FormButton
                    content={
                        method == 1 ? "MyBrands karti ilə daxil ol" : "Nomre ile Daxil ol"
                    }
                    method={method}
                    style={{ bg: "#FFFFFF", text: "#26264C", border: "5px" }}
                    />
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
