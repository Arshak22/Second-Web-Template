import React, { useContext, useState } from "react";
import { UserContext } from "../../Hooks/Context/UserContext";
import "./style.css";

export default function LoginPage() {
    const {user, setUser} = useContext(UserContext);
    const [preview, setPreview] = useState();

    const handleLogin = () => {
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const age = document.getElementById('age');
        const gender = document.querySelector('input[name="gender"]:checked');
        const position = document.getElementById('position');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const date = document.getElementById('date');
        const picture = document.getElementById('picture').files;
        if(picture.length > 0) {
            let image = new FileReader();
            image.onloadend = () => {
                setPreview(image.result);
            }
            image.readAsDataURL(picture[0]);
        }
        const newUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value,
            gender: gender.value,
            position: position.value,
            email: email.value,
            phone: phone.value,
            DOB: date.value,
            picture: picture.value
        }
        setUser(newUser);
    }

    return (
            <div className="loginForm">
                <div className="sideMenu">
                    <h1>Dashbord</h1>
                    <h1>Products</h1>
                </div>
                <div className="login">
                    <div className="loginHeader"> 
                        <div className="userPic">
                            {preview ? <img src={preview} alt="userAvatar" style={{width: "100%", height: "100%", objectFit: "cover"}} />: null}
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
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>

                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required/>

                                <label for="age">Age</label>
                                <input type="number" id="age" name="age" placeholder="Age" required/>

                                <label id="gender" required>
                                    Gender:
                                    <div>
                                        <input type="radio" name="gender" value="male" /> Male
                                        <input type="radio" name="gender" value="female" /> Female
                                    </div>
                                </label>
                            </form>
                        </div>
                        <div className="colLogin">
                            <label for="postion">Position</label>
                            <input type="text" id="position" name="position" placeholder="Position" required/>

                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" required/>

                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>

                            <label for="date">Date of Birth</label>
                            <input type="date" id="date" aria-describedby="date-format" min="1900-03-01" max="2031-01-01" required/>

                            <label for="picture">Select a file:</label>
                            <input type="file" id="picture" name="picture" accept="image/*" required></input>

                            <button id="saveLogin" onClick={handleLogin}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}