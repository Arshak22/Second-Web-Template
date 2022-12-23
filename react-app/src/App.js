import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Hook } from "./Components/hook";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Hook /> */}
    </div>
  );
}

export default App;
