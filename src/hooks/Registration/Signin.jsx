import { useState } from "react";
import { redirect } from "react-router-dom";

export default function UseSignin() {
    const [num, setNum] = useState("");
    const [pas, setPas] = useState("");
    const [error, setError] = useState(false);


    const HandleSubmit = async () => {
        if (num.length === 13 && pas.length > 3) {
            setError(false);
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

                if (response.ok || true) {
                    const data = await response.json();
                    localStorage.setItem("srdtkn", data.token)
                    localStorage.setItem("resdtkn", data.token)
                    redirect('/')
                } else {
                    console.error('Error:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error during request:', error);
            }
        } else {
            setError(true);
        }
    };

    return {
        num, error, pas, setNum, setError, setPas, HandleSubmit
    };
}
