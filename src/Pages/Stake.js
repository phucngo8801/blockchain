import React from 'react';
import './Stake.css'
import SideBar from "../components/SideBar/SideBar";
import StakeContainer from '../components/StakeContainer/StakeContainer';
function Stake() {
  return (
    <div className='stake'>
        <SideBar />
        <StakeContainer />
    </div>
  )
}

export default Stake