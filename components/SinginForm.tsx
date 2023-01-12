import { useState } from "react";

export default function SinginForm() {

    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        // dbConnect();

        const res = await fetch("api/addUser", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name,
                role: "admin",
                status: "active",
                created_at: getCurrentDate(),
                edited_at: null,
            })
 
        })

        const data = await res.json()
        setMessage(data.message)

        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
    

    }

    function getCurrentDate(separator=""){

        const newDate = new Date()
        const date = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    return(
        <div className='p-5 m-5 bg-white flex max-w-md rounded'>     
            <form onSubmit={handleSubmit}>
                <h1 className='m-3 font-extrabold text-2xl text-rose-500'>Sign in</h1>
                <div className='m-3'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' className='rounded-lg ml-5' id='email' name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='m-3'>
                    <label htmlFor='first_name'>First Name:</label>
                    <input type='text' className='rounded-lg ml-5' id='first_name' name='first_name'
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='m-3'>
                    <label htmlFor='last_name'>Last Name:</label>
                    <input type='text' className='rounded-lg ml-5' id='last_name' name='last_name'
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='m-3'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' className='rounded-lg ml-6' id='password' name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type="checkbox" className="rounded text-pink-500 ml-11 m-2"  /> I accept Terms & Conditions

                <input className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-rose-700 rounded-lg focus:shadow-outline hover:bg-rose-800" type='submit' value='Join!'></input> 
            </form>
            {message &&
                    <div className="m-5 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                        <p className="font-bold">Informational message</p>
                        <p className="text-sm">{message}.</p>
                    </div>
                }
        </div>
    )
}