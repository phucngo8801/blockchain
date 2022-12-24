import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vaults from "./Pages/Vaults";

import Pay from "./Pages/Pay";
import Settings from "./Pages/Settings";
import Notifica from "./Pages/Notifica";
import Referrals from "./Pages/Referrals";
import Swap from "./Pages/Swap";
import Stake from "./Pages/Stake";
import Logout from "./Pages/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vaults" element={<Vaults/>}/>
          <Route path="/swap" element={<Swap />}/>
          <Route path="/pay" element={<Pay />}/>
          <Route path="/notifica" element={<Notifica />}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/referrals" element={<Referrals />}/>
          <Route path="/stake" element={<Stake />}/>
          <Route path="/logout" element={<Logout />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
