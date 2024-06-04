import { useState } from "react";
import Cookies from 'js-cookie';

export default function UseSignin() {
    const [num, setNum] = useState("");
    const [pas, setPas] = useState("");
    const [error, setError] = useState({bl: false, message: ""});
    const [loading, setLoading] = useState(false);

    const HandleSubmit = async () => {
        setLoading(true);

        if (num.length === 13 && pas.length > 3) {
            setError({bl: false, message: ""});
            try {
                const response = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/user/token/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        mobile_number: num,
                        password: pas
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    // // Set cookies for access and refresh tokens
                    // Cookies.set("refresh", data.refresh, { expires: 7 }); // expires in 7 days
                    // Cookies.set("access", data.access, { expires: 1 });  // expires in 1 day

                    window.location = '/';
                } else {
                    const data = await response.json();
                    setError({bl: true, message: data.detail});
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error during request:', error);
                setError({bl: true, message: "Request failed"});
                setLoading(false);
            }
        } else {
            setError({bl: true, message: "Invalid Credentials"});
            setLoading(false);
        }
    };

    return {
        num, error, pas, setNum, setError, setPas, HandleSubmit, loading
    };
}
