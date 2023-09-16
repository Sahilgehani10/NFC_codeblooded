import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage(){
    const [name,SetName]=useState('');
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const[number,setNumber]=useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password
            })
            alert('Registration Succesful')
        }
        catch(e){
            alert('registration failed.Try again later')
        }
        
    }
    
    
    
    
    
    
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className=" mt-[7.5rem] mb-40">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input type="text" placeholder="John Doe" value={name} onChange={ev=>SetName(ev.target.value)} />
                <input type="email" placeholder="your@email.com" value={email} onChange={ev=>SetEmail(ev.target.value)}/>
                <input type="tel" placeholder="1234567890" value={number} onChange={ev=>setNumber(ev.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={ev=>SetPassword(ev.target.value)}/>
                <button className="primary">Register</button>
                <div className="text-center py-2">
                    already have an account?<Link to={"/login"} className="text-accent underline">Login</Link>
                </div>
            </form>
            </div>
        </div>
    );
}
