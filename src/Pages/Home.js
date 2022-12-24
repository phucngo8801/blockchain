import React from "react";

import SideBar from "../components/SideBar/SideBar";
import HomeContainer from "../components/HomeContainer/HomeContainer";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <HomeContainer />
    </div>
  );
}

export default Home;
