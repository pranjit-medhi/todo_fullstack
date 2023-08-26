import {useParams, Link} from "react-router-dom";

export default function WelcomeComponent()
{
    const {username} = useParams() 
    return(
        <div>
            Welcome {username}
            Manage your todos <Link to="/todos">here</Link>
        </div>
    )
}