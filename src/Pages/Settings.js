import React from 'react'
import SettingsContainer from '../components/SettingsContainer/SettingsContainer';
import SideBar from '../components/SideBar/SideBar';
import './Settings.css'

function Settings() {
  return (
    <div className='settings'>
        <SideBar />
        <SettingsContainer />
    </div>
  )
}

export default Settings