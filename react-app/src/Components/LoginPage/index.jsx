import React from "react";
import "./style.css";

export default function LoginPage() {
    return (
        <div className="loginForm">
            <div className="sideMenu">
                <h1>Dashbord</h1>
                <h1>Products</h1>
            </div>
            <div className="login">
                
                <div className="loginHeader">
                    <div className="userPic">
                    </div>
                    <div className="nameAndPosition">
                        <h1>--</h1>
                        <h1>No Position</h1>
                    </div>
                </div>
                <div className="rowLogin">
                    <div className="colLogin">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder="First Name"/>

                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name"/>

                        <label for="age">Age</label>
                        <input type="number" id="age" name="age" placeholder="Age"/>

                        <label id="gender">
                            Gender:
                            <div>
                                <input type="radio" name="gender" value="male" /> Male
                                <input type="radio" name="gender" value="female" /> Female
                            </div>
                        </label>
                    </div>
                    <div className="colLogin">
                        <label for="postion">Position</label>
                        <input type="text" id="position" name="position" placeholder="Position"/>

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email"/>

                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number"/>

                        <label for="date">Date of Birth</label>
                        <input type="date" id="date" aria-describedby="date-format" min="1900-03-01" max="2031-01-01" />

                        <label for="myfile">Select a file:</label>
                        <input type="file" id="myfile" name="myfile"></input>

                        <button id="saveLogin">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}