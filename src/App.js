import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <MainRoutes />
    </div>
  );
};

export default App;
