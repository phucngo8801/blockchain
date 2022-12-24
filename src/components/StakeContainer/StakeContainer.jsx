import React from 'react';
import { useState } from 'react';
import images from '../../constants/images';
import TopBar from '../TopBar/TopBar';
import './StakeContainer.css'

function StakeContainer() {
    const [stakeModel, setStakeModel] = useState(false);
    const handleClickOpenStake =()=>{
        setStakeModel(!stakeModel)
    }
    const handleCloseStakeModel = () =>{
        setStakeModel(false)
    }
    return (
        <div className='StakeContainer'>
            <TopBar title='Stake' />
            <div className='Stake'>
                <div className='Stake-list'>
                    <div className='Stake-list-item' onClick={handleClickOpenStake}>
                        <div className='Stake-list-item_img'>
                            <img src={images.DynamicIcons} alt="" style={{ width: 127, height: 125 }} className='Stake-list-item_img__big' />
                        </div>
                        <div className='Stake-list-item_title'>
                            <div className='Stake-list-item_title_left'>
                                <p>Pool</p>
                                <h2>DYNA</h2>
                                <p>Balence</p>
                                <span>-</span>
                            </div>
                            <div className='Stake-list-item_title_right'>
                                <p>APY</p>
                                <span style={{ marginTop: 6, marginBottom: 24 }}>-</span>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Stake-list-item' onClick={handleClickOpenStake}>
                        <div className='Stake-list-item_img'>
                            <img src={images.DynamicIcons} alt="" style={{ width: 127, height: 125 }} className='Stake-list-item_img__big' />
                            <img src={images.ETHIcon} alt="" style={{ width: 30, height: 30 }} className='Stake-list-item_img_small' />
                        </div>
                        <div className='Stake-list-item_title'>
                            <div className='Stake-list-item_title_left'>
                                <p>Pool</p>
                                <h2>DYNA/ETH</h2>
                                <p>Balence</p>
                                <span>-</span>
                            </div>
                            <div className='Stake-list-item_title_right'>
                                <p>APY</p>
                                <span style={{ marginTop: 6, marginBottom: 24 }}>-</span>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Stake-list-item' onClick={handleClickOpenStake}>
                        <div className='Stake-list-item_img' >
                            <img src={images.DynamicIcons} alt="" style={{ width: 127, height: 125 }} className='Stake-list-item_img__big' />
                            <img src={images.BNBIcon} alt="" style={{ width: 30, height: 30 }} className='Stake-list-item_img_small' />
                        </div>
                        <div className='Stake-list-item_title'>
                            <div className='Stake-list-item_title_left'>
                                <p>Pool</p>
                                <h2>DYNA/BNB</h2>
                                <p>Balence</p>
                                <span>-</span>
                            </div>
                            <div className='Stake-list-item_title_right'>
                                <p>APY</p>
                                <span style={{ marginTop: 6, marginBottom: 24 }}>-</span>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Stake-list Stake-list-2'>
                    <div className='Stake-list-item' onClick={handleClickOpenStake}>
                        <div className='Stake-list-item_img'>
                            <img src={images.DynamicIcons} alt="" style={{ width: 127, height: 125 }} className='Stake-list-item_img__big' />
                            <img src={images.AVAXIcon} alt="" style={{ width: 30, height: 30 }} className='Stake-list-item_img_small' />
                        </div>
                        <div className='Stake-list-item_title'>
                            <div className='Stake-list-item_title_left'>
                                <p>Pool</p>
                                <h2>DYNA/AVAX</h2>
                                <p>Balence</p>
                                <span>-</span>
                            </div>
                            <div className='Stake-list-item_title_right'>
                                <p>APY</p>
                                <span style={{ marginTop: 6, marginBottom: 24 }}>-</span>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Stake-list-item Stake-list-item-2' onClick={handleClickOpenStake}>
                        <div className='Stake-list-item_img' >
                            <img src={images.DynamicIcons} alt="" style={{ width: 127, height: 125 }} className='Stake-list-item_img__big' />
                            <img src={images.MATICIcon} alt="" style={{ width: 30, height: 30 }} className='Stake-list-item_img_small' />
                        </div>
                        <div className='Stake-list-item_title'>
                            <div className='Stake-list-item_title_left'>
                                <p>Pool</p>
                                <h2>DYNA/MATIC</h2>
                                <p>Balence</p>
                                <span>-</span>
                            </div>
                            <div className='Stake-list-item_title_right'>
                                <p>APY</p>
                                <span style={{ marginTop: 6, marginBottom: 24 }}>-</span>
                                <p>Earnings</p>
                                <span>-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* stake-model */}
            {stakeModel ?
            <div className='Stake-model'>
                <div className='Stake-model-page'>
                    <div className='Stake-model-header'>
                        <div className='Stake-model-header-left'>
                            <img src={images.DynamicIcons} alt="" style={{ width: 30, height: 30 }} />
                            <div className='Stake-model-header-left_title'>
                                <p>DYNA</p>
                            </div>
                        </div>
                        <div className='Stake-model-header-right'>
                            <img src={images.CloseModal} alt="" style={{padding:5}} onClick={handleCloseStakeModel}/>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='Stake-model-list'>
                        <div className='Stake-model-list-1'>
                            <div className='Stake-model-list-Amount'>
                                <p>Amount</p>
                                <p>APR: 24%</p>
                            </div>
                            <div className='Stake-model-list-DYNA'>
                                <div className='Stake-model-list-DYNA-left'>
                                    <p>0.00 DYNA</p>
                                </div>
                                <div className='Stake-model-list-DYNA-right'>
                                    <p>Max</p>
                                </div>
                            </div>
                        </div>
                        <div className='Stake-model-list-2'>
                            <div className='Stake-model-list-Duration'>
                                <p>Duration</p>
                            </div>
                            <div className='Stake-model-list-times'>
                                <div className='times-box'>1 month</div>
                                <div className='times-box'>3 month</div>
                                <div className='times-box'>6 month</div>
                                <div className='times-box'>12 month</div>
                            </div>
                        </div>
                        <div className='Stake-model-list-3'>
                            <div className='Stake-model-list-3-left'>
                                <div className='Stake-model-list-3-left__title'>
                                    <p>Balance:</p>
                                    <h5>683 DYNA</h5>
                                    <span>$138.49</span>
                                </div>
                                <div className='Stake-model-list-3-left__title'>
                                    <p>Interest:</p>
                                    <h5>83 DYNA</h5>
                                    <span>$16.60</span>
                                </div>
                                <div className='Stake-model-list-3-left__title'>
                                    <p>Staked on:</p>
                                    <h5>July 23, 2022 at 09:32</h5>
                                </div>
                                <div className='Stake-model-list-3-left__title'>
                                    <p>Last claim:</p>
                                    <h5>None yet</h5>
                                </div>
                            </div>
                            <div className='Stake-model-list-3-right'>
                                <div className='Stake-model-list-3-left-box'>
                                    Claim
                                </div>
                                <div className='Stake-model-list-3-left-box'>
                                    Withdraw
                                </div>
                            </div>
                        </div>
                        <div className='Stake-model-list-4'>
                            <div className='Stake-model-list-4-button'>
                                <button>Approve</button>
                            </div>
                            <div className='Stake-model-list-4-button'>
                                <button>Stake</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:''}
        </div>
    )
}

export default StakeContainer