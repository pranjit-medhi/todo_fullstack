import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "./security/AuthContext";


export default function LoginComponent()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext  = useAuth();
    const handleUsername = (event) => {
      setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleLogin = () => {
       
        if(authContext.login(username, password))
        {
                console.log("Success")
                navigate(`/welcome/${username}`)
        }
        else{
            setShowErrorMessage(true)
        }
    }
    return(
        <div className="container">
             {showErrorMessage && <div className="errorMessage">Authentication Failed. 
                                                            Please check your credentials.</div>}
           <div>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleUsername} />
            </div>
            <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handlePassword}  />
            </div>
            <div>
            <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}