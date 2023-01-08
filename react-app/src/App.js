import {React, useState} from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Hook } from "./Components/hook";
import LoginPage from "./Components/LoginPage";
import { UserContext } from "./Hooks/Context/UserContext";

function App() {
  const [user, setUser] = useState(
    {
        firstName: "-",
        lastName: "-",
        position: "No Position",
        age: 0,
        gender: "",
        email: "",
        phone: "",
        DOB: "",
        picture: null
    }
  );
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}> 
      <LoginPage/>
      {/* <Header />
      <Home />
      <Footer /> */}
      {/* <Hook /> */}
    </UserContext.Provider>
     
    </div>
  );
}

export default App;
