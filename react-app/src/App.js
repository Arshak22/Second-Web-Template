import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Hook } from "./Components/hook";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      {/* <Hook /> */}
    </div>
  );
}

export default App;
