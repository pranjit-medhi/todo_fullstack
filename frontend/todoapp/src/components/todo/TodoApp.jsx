import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodoComponent from "./ListTodoComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function AuthenticatedRoute( { children })
{
    const   authcontext  = useAuth()
    if(authcontext.isAuthenticated)
        return children
    return <Navigate to="/" />
}
    
function Todo()
{
    return(
        <div>   
            <AuthProvider>          
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                            }/>
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                 <ListTodoComponent/>
                            </AuthenticatedRoute>
                            }/>
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default Todo;










