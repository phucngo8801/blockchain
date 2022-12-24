import React from 'react'
import SideBar from '../components/SideBar/SideBar';

import SwapContainer from '../components/SwapContainer/SwapContainer';
import './Swap.css'

function Swap() {
  return (
    <div className='swap'>
      <SideBar/>
      <SwapContainer/>
    </div>
  )
}

export default Swap