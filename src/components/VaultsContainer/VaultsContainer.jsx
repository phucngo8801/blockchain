import React, { useState } from 'react'
import images from '../../constants/images'
import TopBar from '../TopBar/TopBar';
import './VaultsContainer.css'
import { Link } from "react-router-dom";

function VaultsContainer() {
    const [popup, setPop] = useState(false);
    const handleClickOpenmodel = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false);
    }

    const [deposit, setDeposit] = useState(true);
    return (
        <>
        <div className='VaultsContainer'>
            <TopBar title="Vaults" />
            <div className='Vaults'>
                <div className='Vaults-header'>
                    <div className='Vaults-header-left'>
                        <p>Stable</p>
                        <span>Sort by APY</span>
                    </div>
                    <div className='Vaults-header-right'>
                        <button className='lend'>Lend</button>
                        <button className='borrow'><Link to='/swap'>Borrow</Link></button>

                    </div>
                </div>

                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDCIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                            <p  onClick={handleClickOpenmodel}>Vault</p>
                                <h2 onClick={handleClickOpenmodel}>USDC</h2>
                                <p  onClick={handleClickOpenmodel}>Balance</p>
                                <span onClick={handleClickOpenmodel}>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.USDTIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                            <p  onClick={handleClickOpenmodel}>Vault</p>
                                <h2 onClick={handleClickOpenmodel}>USDC</h2>
                                <p  onClick={handleClickOpenmodel}>Balance</p>
                                <span onClick={handleClickOpenmodel}>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BUSDIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                            <p  onClick={handleClickOpenmodel}>Vault</p>
                                <h2 onClick={handleClickOpenmodel}>USDC</h2>
                                <p  onClick={handleClickOpenmodel}>Balance</p>
                                <span onClick={handleClickOpenmodel}>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Vaults-header Vaults-native'>
                    <div className='Vaults-header-left'>
                        <p>Native</p>
                        <span>Sort by APY</span>
                    </div>
                </div>
                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BTCIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                            <p  onClick={handleClickOpenmodel}>Vault</p>
                                <h2 onClick={handleClickOpenmodel}>USDC</h2>
                                <p  onClick={handleClickOpenmodel}>Balance</p>
                                <span onClick={handleClickOpenmodel}>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.ETHIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'  onClick={handleClickOpenmodel}>
                                <p  onClick={handleClickOpenmodel}>Vault</p>
                                <h2 onClick={handleClickOpenmodel}>USDC</h2>
                                <p  onClick={handleClickOpenmodel}>Balance</p>
                                <span onClick={handleClickOpenmodel}>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BNBIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                                <p  onClick={handleClickOpenmodel}>Vault</p>
                                <h2  onClick={handleClickOpenmodel}>USDC</h2>
                                <p  onClick={handleClickOpenmodel}>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                                <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Vaults-list'>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.MATICIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.BNBIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className='Vaults-list-item'>
                        <div className='Vaults-list-item_img'>
                            <img src={images.XRPIcon} alt="" className='img-big' />
                            <img src={images.DynamicIcons} alt="" className='img-small' />
                        </div>
                        <div className='Vaults-list-item_title' onClick={handleClickOpenmodel}>
                            <div className='Vaults-list-item_title__left'>
                                <p>Vault</p>
                                <h2>USDC</h2>
                                <p>Balance</p>
                                <span>-</span>
                            </div>
                            <div className='Vaults-list-item_title__right'>
                            <p  onClick={handleClickOpenmodel}>APY</p>
                                <h2  onClick={handleClickOpenmodel}>7.42%</h2>
                                <p  onClick={handleClickOpenmodel}>Earnings</p>
                                <span  onClick={handleClickOpenmodel}>-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {popup ?
                    <div className='main'>

                        <div className='Vaults-table'>
                            <div className='table-header'>
                                <div className='Usdc-header'>
                                    <h1>USDC Vault </h1>
                                    <h5 className='Deposit' onClick={() =>{
                                        setDeposit(() => ({
                                            deposit: true,
                                        }));
                                    }}>Deposit</h5>
                                    <h5 className='Redeem' onClick={() =>{
                                        setDeposit(() => ({
                                            deposit: false,
                                        }));
                                    }}>Redeem</h5>

                                </div>
                                <div className='table-header_close' onClick={closePopup} >
                                    <img src={images.CloseModal} alt="" />
                                </div>
                            </div>
                            {deposit.deposit === true ? <div className='table-deposit'>
                                <div className='table-number'>
                                    <div className='Depositt'>
                                        <div className='table-icon'>$</div>
                                        <div className='table-numberr'>10,000</div>
                                    </div>
                                    <div className='table-max'>Max</div>
                                </div>
                                <div className='Loop'>
                                    <h1>Loop</h1>
                                    <input className='checkbox' type="checkbox" />
                                </div>
                                <div className='Rectanglee'>
                                    <button>2X</button>
                                    <button>4X</button>
                                    <button>6X</button>
                                    <button>8X</button>

                                </div>
                                <div className='Balance'>
                                    <div className='balace'>Balance</div>
                                    <div className='price'>10,000USDC</div>
                                </div>
                                <div className='end'>
                                    <h3>Deposit Funds   </h3>
                                </div>
                            </div> : <div className='table-redeem'>
                                <div className='table-number'>
                                    <div className='Depositt'>
                                        <div className='table-icon'>$</div>
                                        <div className='table-numberr'>10,000</div>
                                    </div>
                                    <div className='table-max'>Max</div>
                                </div>
                                
                                <div className='Balance Balance-redeem'>
                                    <div className='balace'>Balance</div>
                                    <div className='price'>10,000USDC</div>
                                </div>
                                <div className='end'>
                                    <h3>Deposit Funds   </h3>
                                </div>
                            </div>}

                            
                        </div>
                    </div> : ""}
            </div>
        </div>

    </>
    )
}

export default VaultsContainer