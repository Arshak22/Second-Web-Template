import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Hooks/Context/UserContext";
import "./style.css";

export default function LoginPage() {
    const {user, setUser} = useContext(UserContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [DOB, setDOB] = useState('');

    const newUser = (firstName, lastName, age, gender, position, email, phone, date, preview) => {
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            position: position,
            email: email,
            phone: phone,
            DOB: date,
            picture : preview
        }
        setUser(newUser);
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        console.log(firstName);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handlePosition = (e) => {
        setPosition(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleDOB = (e) => {
        setDOB(e.target.value);
    }

    const handleLogin = () => {
        const picture = document.getElementById('picture').files;
        if(picture.length > 0) {
            let image = new FileReader();
            image.onloadend = () => {
                newUser(firstName, lastName, age, gender, position, email, phone, DOB, image.result);
            }
            image.readAsDataURL(picture[0]);
        }
    }

    return (
       
            <div className="loginForm">
                <div className="sideMenu">
                    <NavLink to={"/dashbord"} end><h1>Dashbord</h1></NavLink>
                    <h1>Products</h1>
                </div>
                <div className="login">
                    <div className="loginHeader"> 
                        <div className="userPic">
                            {user.picture ? <img src={user.picture} alt="userAvatar" style={{width: "100%", height: "100%", objectFit: "cover"}} />: null}
                        </div>
                        <div className="nameAndPosition">
                            <h1>{user.firstName} {user.lastName}</h1>
                            <h1>{user.position}</h1>
                        </div>
                    </div>
                    <div className="rowLogin">
                        <div className="colLogin">
                            <form action="">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" required onChange={handleFirstName}/>

                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required onChange={handleLastName}/>

                                <label for="age">Age</label>
                                <input type="number" id="age" name="age" placeholder="Age" required onChange={handleAge}/>

                                <label id="gender" required>
                                    Gender:
                                    <div>
                                        <input type="radio" name="gender" value="male" onChange={handleGender}/> Male
                                        <input type="radio" name="gender" value="female" onChange={handleGender}/> Female
                                    </div>
                                </label>
                            </form>
                        </div>
                        <div className="colLogin">
                            <label for="postion">Position</label>
                            <input type="text" id="position" name="position" placeholder="Position" required onChange={handlePosition}/>

                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" required onChange={handleEmail}/>

                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Phone Number" required onChange={handlePhone}/>

                            <label for="date">Date of Birth</label>
                            <input type="date" id="date" aria-describedby="date-format" min="1900-03-01" max="2031-01-01" required onChange={handlePhone}/>

                            <label for="picture">Select a file:</label>
                            <input type="file" id="picture" name="picture" accept="image/*" required></input>

                            <button id="saveLogin" onClick={handleLogin}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}