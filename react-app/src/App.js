import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Hook } from "./Components/hook";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      {/* <Header />
      <Home />
      <Footer /> */}
      {/* <Hook /> */}
    </div>
  );
}

export default App;
