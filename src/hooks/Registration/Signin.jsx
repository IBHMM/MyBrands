import { useState } from "react";
import Cookies from 'js-cookie';

export default function UseSignin() {
    const [num, setNum] = useState("");
    const [pas, setPas] = useState("");
    const [error, setError] = useState({bl: false, message: ""});
    const [loading, setLoading] = useState(false);

    const HandleSubmit = async () => {
        setLoading(true);

        // // Check if phone number and password meet criteria
        // if (num.length === 9 && pas.length > 3) {
        //     setError({bl: false, message: "Invalid Input"});
            
        //     try {
        //         // Simulate API call for demonstration
        //         // Replace with actual fetch call in your application
        //         // const response = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/user/token/', {
        //         //     method: "POST",
        //         //     headers: {
        //         //         'Content-Type': 'application/json'
        //         //     },
        //         //     body: JSON.stringify({
        //         //         mobile_number: "+994" + num,
        //         //         password: pas
        //         //     })
        //         // });

        //         // Handle response
        //         if (response.ok || true) {
        //             // const data = await response.json();
                    
        //             // Set cookies and localStorage items
        //             // Cookies.set("refresh", data.refresh, { expires: 7 });
        //             // Cookies.set("access", data.access, { expires: 7 });  
        //             // Cookies.set("csrftoken", data.access, { expires: 7 }); 
        //             Cookies.set("sessionid", "session_id_value", { expires: 7 });  // Set a sample sessionid
        //             localStorage.setItem("access", data.access);

        //             // Redirect user after successful login
        //             setTimeout(() => {
        //                 window.location = '/';
        //             }, 1000); // Redirect after 1 second
        //         } else {
        //             const data = await response.json();
        //             setError({bl: true, message: data.detail});
        //             setLoading(false);
        //         }
        //     } catch (error) {
        //         console.error("Error:", error);
        //         setError({bl: true, message: "Request failed"});
        //         setLoading(false);
        //     }
        // } else {
        //     setError({bl: true, message: "Invalid Credentials"});
        //     setLoading(false);
        // }


        if (num && pas) {
            Cookies.set("sessionid", "session_id_value", { expires: 7 });  
            localStorage.setItem("access", "access_token_value");
            setTimeout(() => {
                setLoading(false);
                window.location = '/';
            }, 1000);
        }
    };

    return {
        num,
        error,
        pas,
        setNum,
        setError,
        setPas,
        HandleSubmit,
        loading
    };
}

export function useSigninmonk() {
    const [num, setNum] = useState("");
    const [pas, setPas] = useState("");
    const [error, setError] = useState({bl: false, message: ""});
    const [loading, setLoading] = useState(false);

   const Handlesubmit = () => {
        if (num.length === 9 && pas.length > 3) {
            setError({bl: false, message: "Invalid Input"});
            setLoading(true);
            
        }else {
            setError({bl: true, message: "Invalid Credentials"});
            setLoading(false);
        }
   }
}
