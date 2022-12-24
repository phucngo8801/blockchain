import React from 'react';
import PayContainer from '../components/PayContainer/PayContainer';
import SideBar from '../components/SideBar/SideBar';
import './Pay.css'

function Pay() {
  return (
    <div className='pay'>
      <SideBar />
      <PayContainer />
    </div>
  )
}

export default Pay