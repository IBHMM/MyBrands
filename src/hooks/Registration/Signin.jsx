import { useState } from "react"
import { useSelector } from "react-redux"
import HandleUserNumber from "../../utils/Registration/helperfunctions"

export default function UseSignin() {
    const [num, setNum] = useState("")
    const [pas, setPas] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState({number: false, password: false, code: false})
    const method = useSelector((state) => state.register.LoginMethod);

    const HandleChange = (event) => {    
        if(method == 1) {
            let newValue = HandleUserNumber(event.target.value);
            setNum(newValue);
        }    
        setNum(event.target.value)
    }

    const DirectToHome = () => {
        if (num.length != 12 && pas.length < 4) {
            setError({number: true, password: true})
        }else if (num.length != 12 && pas.length >= 4) {
            setError({number: true, password: false})
        }else if (num.length == 12 && pas.length < 4) {
            setError({number: false, password: true})
        }else{
            setError({number: false, password: false})
            // Send request body {num, pass}
        }
    }

    const HandleCode = e => {
        if (code.length != 18) {
            setError({...error, code : true})
        }else {
            setCode(code)
            setError({...error, code: false})
        }
    }


    return {
        num, error, pas, code, 
        method, HandleChange, 
        DirectToHome, HandleCode,
        setNum, setError, setCode,
         setPas 
    }
    
}