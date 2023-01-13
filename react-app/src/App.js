import {React, useState} from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Hook } from "./Components/hook";
import LoginPage from "./Components/LoginPage";
import { UserContext } from "./Hooks/Context/UserContext";
import { Memo } from "./Components/Memo";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashbord } from "./Components/Dashbord";

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
        picture: ""
    }
  );
  return (
    <UserContext.Provider value={{user, setUser}}>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/dashbord" element={<Dashbord/>}></Route>
        <Route path="/login" element={<LoginPage/>}>
        </Route>
        </Routes>
      {/* <Footer/> */}
    </UserContext.Provider>
    
    // <div className="App">
    //   <UserContext.Provider value={{user, setUser}}> 
    //   <LoginPage/>
    //   {/* <Memo/> */}
    //   {/* <Header />
    //   <Home />
    //   <Footer /> */}
    //   {/* <Hook /> */}
    // </UserContext.Provider>
     
    // </div>
  );
}

export default App;
