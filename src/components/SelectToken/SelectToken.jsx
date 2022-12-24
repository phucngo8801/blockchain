import React from 'react';
import './SelectToken.css';
import images from '../../constants/images';

function SelectToken({closeSelectModel}) {
    return (
        <div className='SelectToken-model'>
            <div className='SelectToken'>
                <div className='SelectToken-header'>
                    <h3>Select Token</h3>
                    <div className='SelectToken-header-img' onClick={() => closeSelectModel(!true)}>
                        <img src={images.CloseModal} alt="" />
                    </div>
                </div>
                <div className='line'></div>
                <div className='SelectToken-list'>
                    <div className='SelectToken-list-title_item'>
                        <div className='SelectToken-list-title_item_left'>
                            <div className='left-img'>
                                <img src={images.USDCIcon} alt="" style={{ width: 30, height: 30 }} />
                            </div>
                            <div className='left-text'>
                                <p>USD Coin</p>
                            </div>
                        </div>
                        <div className='SelectToken-list-title_item_right'>
                            <p>USDC</p>
                        </div>
                    </div>
                    <div className='SelectToken-list-title_item'>
                        <div className='SelectToken-list-title_item_left'>
                            <div className='left-img'>
                                <img src={images.BUSDIcon} alt="" style={{ width: 30, height: 30 }} />
                            </div>
                            <div className='left-text'>
                                <p>Binance USD</p>
                            </div>
                        </div>
                        <div className='SelectToken-list-title_item_right'>
                            <p>BUSD</p>
                        </div>
                    </div>
                    <div className='SelectToken-list-title_item'>
                        <div className='SelectToken-list-title_item_left'>
                            <div className='left-img'>
                                <img src={images.USDTIcon} alt="" style={{ width: 30, height: 30 }} />
                            </div>
                            <div className='left-text'>
                                <p>Tether</p>
                            </div>
                        </div>
                        <div className='SelectToken-list-title_item_right'>
                            <p>USDT</p>
                        </div>
                    </div>
                    <div className='SelectToken-list-title_item'>
                        <div className='SelectToken-list-title_item_left'>
                            <div className='left-img'>
                                <img src={images.BTCIcon} alt="" style={{ width: 30, height: 30 }} />
                            </div>
                            <div className='left-text'>
                                <p>Bitcoin</p>
                            </div>
                        </div>
                        <div className='SelectToken-list-title_item_right'>
                            <p>BTC</p>
                        </div>
                    </div>
                    <div className='SelectToken-list-title_item'>
                        <div className='SelectToken-list-title_item_left'>
                            <div className='left-img'>
                                <img src={images.ETHIcon} alt="" style={{ width: 30, height: 30 }} />
                            </div>
                            <div className='left-text'>
                                <p>Ethereum</p>
                            </div>
                        </div>
                        <div className='SelectToken-list-title_item_right'>
                            <p>ETH</p>
                        </div>
                    </div>
                    <div className='SelectToken-list-title_item'>
                        <div className='SelectToken-list-title_item_left'>
                            <div className='left-img'>
                                <img src={images.BNBIcon} alt="" style={{ width: 30, height: 30 }} />
                            </div>
                            <div className='left-text'>
                                <p>Binance Coin</p>
                            </div>
                        </div>
                        <div className='SelectToken-list-title_item_right'>
                            <p>BNB</p>
                        </div>
                    </div>
                    <div className='SelectToken-list-footer'>
                        <p>Scroll to load more</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SelectToken