import {React, useContext} from "react";
import "./style.css";
import { UserContext } from "../../Hooks/Context/UserContext";

export const Dashbord = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        <div>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.position}</h1>
            <h2>{user.gender}</h2>
            <h2>{user.age}</h2>
            <h2>{user.phone}</h2>
            <h2>{user.email}</h2>
            <h2>{user.DOB}</h2>
            <div>
                <img src={user.picture} alt="userAvatar" style={{width: "100%", height: "100%", objectFit: "cover"}}/>   
             </div>
        </div>
    );
}