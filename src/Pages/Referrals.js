import React from 'react'
import ReferralsContainer from '../components/ReferralsContainer/ReferralsContainer'
import SideBar from '../components/SideBar/SideBar'
import './Referrals.css'

function Referrals() {
  return (
    <div className='referrals'>
        <SideBar />
        <ReferralsContainer />
    </div>
  )
}

export default Referrals