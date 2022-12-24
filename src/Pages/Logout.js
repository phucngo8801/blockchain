import React from 'react';
import images from '../constants/images';
import {Link} from 'react-router-dom'
import './Logout.css'

function Logout() {
    return (
        <>
            <div className='logout'>
                <div className='logout-header'>
                    <Link to='/' className='logout-header-left'>
                        <img src={images.DynamicIcon} alt="" style={{width:38, height:38}}/>
                        <div className='logout-header-left-title'>
                            <h1>Dynamic</h1>
                            <p>Put your funds to work</p>
                        </div>
                    </Link>
                    <div className='logout-header-right'>
                        <img src={images.Rectangle275} alt="" style={{width: 24, height: 24}}/>
                        <div className='logout-header-right-title'>
                            <p>@dynamic</p>
                        </div>
                    </div>
                </div>
                <div className='line'></div>
                <div className='logout-header-list'>
                    <img src={images.ProfilePic} alt="" width={120} height={120}/>
                    <div className='logout-header-list-cameron'>
                        <h1>Cameron Conrad</h1>
                        <p>@cameron</p>
                    </div>
                    <div className='line-button'></div>
                    <div className='logout-header-list-button'>
                        <div className='button-send'>Send</div>
                        <div className='dash'></div>
                        <div className='button-receive'>Receive</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout