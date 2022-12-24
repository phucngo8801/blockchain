import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import VaultsContainer from '../components/VaultsContainer/VaultsContainer'
import './Vaults.css'

function Vaults() {
  return (
    <div className='vaults'>
        <SideBar />
        <VaultsContainer />
    </div>
  )
}

export default Vaults