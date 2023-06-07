import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import { Card } from "@mui/material";

const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <MainRoutes />
    </div>
  );
};

export default App;
