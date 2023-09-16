import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useSearchParams,useNavigate} from "react-router-dom";


export default function LoginPage(){
    const navigate=useNavigate();
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const [redirect,SetRedirect]=useState(false)
    //const{setUser}=useContext(UserContext)
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            const {data}=await axios.post('/login',{email,password})
            setUser(data)
            alert('login succesful')
            SetRedirect(true);
        }
        catch(e){
            alert('login unsucessful')                            
        }
        SetRedirect(true);
       
        
    }
    
        
        
        
        
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-54">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={()=>navigate("/homepage")}>
                <input type="email" placeholder="your@email.com" value={email} onChange={ev=>SetEmail(ev.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={ev=>SetPassword(ev.target.value)} />
                <button className="primary">Login</button>
                <div className="text-center py-2">
                    dont have an account yet?<Link to={"/register"} className="text-accent underline">Register Now</Link>
                </div>
            </form>
            </div>
        </div>
    );
}