import React from 'react';
import images from '../../constants/images';
import TopBar from '../TopBar/TopBar';
import './ReferralsContainer.css'

function ReferralsContainer() {
  return (
    <div className='ReferralsContainer'>
      <TopBar title='Referrals' />
      <div className='Referrals'>
        <div className='Referrals-header'>
          <div className='Referrals-header-top'>
            <h1>Invite & Earn</h1>
          </div>
          <div className='Referrals-header-bot'>
            <p>After your referred user deposits $100+ in any vault, you </p>
            <p>both will be rewarded with $10 paid in DYNA automatically.</p>
          </div>
        </div>
        <div className='Referrals-title'>
          <div className='Referrals-title-top'>
            <p>Your link:</p>
          </div>
          <div className='Referrals-title-bot'>
            <div className='Referrals-title-bot-search'>
              <form action="">
                <input type="text" name="search" placeholder='app.dynamic.fi/join/cameron' />
              </form>
            </div>
            <div className='Referrals-title-bot-copy'>
              <button>Copy</button>
            </div>
          </div>
        </div>
        <div className='Referrals-or'>
          <div className='Referrals-or-line'></div>
          <div className='Referrals-or-title'>
            <p>Or</p>
          </div>
          <div className='Referrals-or-line'></div>
        </div>
        <div className='Referrals-social'>
          <div className='Referrals-social_network'>
            <img src={images.Rectangle275} alt="" />
          </div>
          <div className='Referrals-social_network'>
            <img src={images.Rectangle276} alt="" />
          </div>
          <div className='Referrals-social_network'>
            <img src={images.Rectangle277} alt="" />
          </div>
          <div className='Referrals-social_network'>
            <img src={images.Rectangle278} alt="" />
          </div>
        </div>
        <div className='Referrals-footer'>
          <div className='Referrals-footer-header'>
            <p>Your earnings:</p>
          </div>
          <div className='Referrals-footer-box'>
            <div className='Referrals-footer-box-item'>
              <div className='Referrals-footer-box-item_avatar'>
                <img src={images.Rectangle280} alt="" />
              </div>
              <div className='Referrals-footer-box-item_title'>
                <p>@christian deposited $100+ in a vault!</p>
              </div>
              <div className='Referrals-footer-box-item_DYNA'>
                <span>+$10 DYNA</span>
              </div>
            </div>
            <div className='line'></div>
            <div className='Referrals-footer-box-item'>
              <div className='Referrals-footer-box-item_avatar'>
                <img src={images.Rectangle281} alt="" />
              </div>
              <div className='Referrals-footer-box-item_title'>
                <p>@christian deposited $100+ in a vault!</p>
              </div>
              <div className='Referrals-footer-box-item_DYNA'>
                <span>+$10 DYNA</span>
              </div>
            </div>
            <div className='line'></div>
            <div className='Referrals-footer-box-item'>
              <div className='Referrals-footer-box-item_avatar'>
                <img src={images.Rectangle282} alt="" />
              </div>
              <div className='Referrals-footer-box-item_title'>
                <p>@christian deposited $100+ in a vault!</p>
              </div>
              <div className='Referrals-footer-box-item_DYNA'>
                <span>+$10 DYNA</span>
              </div>
            </div>
            <div className='line'></div>
            <div className='Referrals-footer-box-item'>
              <div className='Referrals-footer-box-item_avatar'>
                <img src={images.Rectangle280} alt="" />
              </div>
              <div className='Referrals-footer-box-item_title'>
                <p>@christian deposited $100+ in a vault!</p>
              </div>
              <div className='Referrals-footer-box-item_DYNA'>
                <span>+$10 DYNA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReferralsContainer