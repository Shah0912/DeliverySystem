import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { DeliveryDash } from "./pages/deliverydash/DeliveryDash";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <DeliveryDash />
    </React.Fragment>
  );
}

export default App;
