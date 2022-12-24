import React from 'react'
import NotificaContainer from '../components/NotificaContainer/NotificaContainer'
import SideBar from '../components/SideBar/SideBar';
import './Notifica.css'

function Notifica() {
  return (
    <div className='notifica'>
        <SideBar />
        <NotificaContainer />
    </div>
  )
}

export default Notifica