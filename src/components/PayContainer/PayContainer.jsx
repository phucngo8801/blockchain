import React, { useState } from 'react'
import images from '../../constants/images';
import SelectToken from '../SelectToken/SelectToken';
import TopBar from '../TopBar/TopBar';
import './PayContainer.css'
function PayContainer() {
    const [receive, setReceive] = useState(false);
    const [openSelectModel, setOpenSelectModel] = useState(false);
    return (
        <>
            <div className='PayContainer'>
                <TopBar title="Pay" />
                <div className='Pay'>
                    <div className='Pay-box_left'>
                        <div className='Pay-box_left-header'>
                            <div className='left-header send' onClick={() => {
                                setReceive(() => ({
                                    receive: false,
                                }));
                            }} >
                                <h2>Send</h2>
                            </div>
                            <div className='dash'></div>
                            <div className='left-header receive' onClick={() => {
                                setReceive(() => ({
                                    receive: true,
                                }));
                            }} >
                                <h2>Receive</h2>
                            </div>
                        </div>
                        <div className='line'></div>

                        {receive.receive === false ?
                        // send
                            <div className='Pay-box_left-title'>
                                <div className='Pay-box_left-title_top'>
                                    <div className='Pay-box_left-title_top-dollar'>
                                        <p>$</p>
                                        <h1>O</h1>
                                    </div>
                                    <div className='Pay-box_left-title_top-convert'>
                                        <div className='convert' onClick={() =>{
                                            setOpenSelectModel(true)
                                        }}>
                                            <img src={images.Rectangle236} alt="" />
                                        </div>
                                        <p>USDC</p>
                                    </div>
                                </div>
                                <div className='Pay-box_left-title_bot'>
                                    <div className='Pay-box_left-title_bot-list first'>
                                        <div className='bot-list-left'>
                                            <p>Pay with</p>
                                        </div>
                                        <div className='bot-pay-right' onClick={() =>{
                                            setOpenSelectModel(true)
                                        }}>
                                            <div className='bot-list-right_imgl'>
                                                <img src={images.Rectangle141} alt="" />
                                            </div>
                                            <div className='bot-pay-right_USDC'>
                                                <p>USDC</p>
                                            </div>
                                            <div className='bot-list-right_imgr'>
                                                <img src={images.DropdownIcon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='line'></div>
                                    <div className='Pay-box_left-title_bot-list'>
                                        <div className='bot-list-left'>
                                            <p>To</p>
                                        </div>
                                        <div className='bot-list-span'>
                                            <span>@username</span>
                                        </div>

                                    </div>
                                    <div className='line'></div>
                                    <div className='Pay-box_left-title_bot-list'>
                                        <div className='bot-list-left'>
                                            <p>Note</p>
                                        </div>
                                        <div className='bot-list-span'>
                                            <span>leave a message</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='continue'>
                                    <button>Continue</button>
                                </div>
                            </div>
                            :
                            <div className='Pay-box_left-title'>
                                <div className='Pay-box_left-title-qr'>
                                    <div className='ima-qr'>
                                        <img src={images.qrpay} alt="" />
                                    </div>
                                    <div className='scan'>
                                        <p>Scan</p>
                                    </div>
                                </div>
                                <div className='Pay-box_left-title-assets'>
                                    <div className='assets__left'>
                                        <p>Assets</p>
                                    </div>
                                    <div className='bot-pay-right' onClick={() =>{
                                        setOpenSelectModel(true)
                                    }}>
                                        <div className='bot-list-right_imgl'>
                                            <img src={images.Rectangle141} alt="" /></div>
                                        <div className='bot-pay-right_USDC'>
                                            <p>USDC</p></div>
                                        <div className='bot-list-right_imgr'>
                                            <img src={images.DropdownIcon} alt="" /></div>
                                    </div>
                                </div>
                                <div className='continue'>
                                    <button>Continue</button>
                                </div>
                            </div>}


                        {openSelectModel && <SelectToken closeSelectModel={setOpenSelectModel}/>}
                        {/* footer */}
                        <div className='Pay-box_left-footer'>
                            <div className='footer-title'>
                                <div className='footer-title-item'>
                                    <p>USDC Balance</p>
                                </div>
                                <div className='footer-title-item'>
                                    <p>1,918 USDT = $1,918</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='Pay-box_right'>
                        <div className='Pay-box-right-header'>
                            <p>Recent Activity</p>
                        </div>
                        <div className='line'></div>
                        <div className='Pay-box-right-list'>
                            <div className='list-item'>
                                <h3>Outgoing transfer</h3>
                                <p>You sent $25 USDC to @subway</p>
                                <span>May 11</span>
                            </div>
                            <div className='line'></div>
                            <div className='list-item'>
                                <h3>Outgoing transfer</h3>
                                <p>You sent $25 USDC to @subway</p>
                                <span>May 11</span>
                            </div>
                            <div className='line'></div>
                            <div className='list-item'>
                                <h3>Outgoing transfer</h3>
                                <p>You sent $25 USDC to @subway</p>
                                <span>May 11</span>
                            </div>
                            <div className='line'></div>
                            <div className='list-item'>
                                <h3>Outgoing transfer</h3>
                                <p>You sent $25 USDC to @subway</p>
                                <span>May 11</span>
                            </div>
                            <div className='line'></div>
                            <div className='list-item'>
                                <h3>Outgoing transfer</h3>
                                <p>You sent $25 USDC to @subway</p>
                                <span>May 11</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayContainer