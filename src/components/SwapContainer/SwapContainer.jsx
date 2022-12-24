import React, { useState } from 'react'
import TopBar from '../TopBar/TopBar';
import images from '../../constants/images';
import './SwapContainer.css'
import SelectToken from '../SelectToken/SelectToken';


function SwapContainer() {
    const [openSelectModel, setOpenSelectModel] = useState(false);
    const [chain, setChain] = useState(false);
    const [popup, setPop] = useState(false);
    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false);
    }

    const [popupModel, setPopModel] = useState(false);
    const handleClickOpenModel = () => {
        setPopModel(!popupModel)
    }
    const closePopupModel = () => {
        setPopModel(false);
    }
    return (
        <>
            <div className='SwapContainer'>
                <TopBar title='Swap' />
                <div className='Swap'>
                    <div className='Swap-table'>
                        <div className='Swap-top'>
                            <button className='Same Chain' onClick={() => {
                                setChain(() => ({
                                    chain: false,
                                }));
                            }}>Same Chain</button>
                            <button className='Cross Chain' onClick={() => {
                                setChain(() => ({
                                    chain: true,
                                }));
                            }}>Cross Chain</button>
                        </div>
                        <div className='Swap-tablemax'>
                            {chain.chain === false ?
                                <div className='Swap-chain'>
                                    <div className='Swap-center'>
                                        <div className='Swap-header'>
                                            <div className='Name'>Swap</div>
                                            <div className='iconn'>
                                                <img src={images.Rectangle150} alt='' />
                                            </div>
                                        </div>

                                        <div className='choose'>

                                            <div className='from ' onClick={handleClickOpen}>
                                                <h5 onClick={handleClickOpen}>From</h5>
                                                <img src={images.BNBIcon} alt='' style={{ width: 30, height: 30 }} />
                                                <h5>Binance</h5>
                                            </div>
                                            <div className='down'>
                                                <img src={images.DropdownIcon} onClick={handleClickOpen} alt='' />
                                            </div>

                                        </div>
                                        <div className='choose-ethereum'>
                                            <div className='choose-ethereumleft'>
                                                <div className='number'>0.00</div>
                                                <div className='max'><h5>Max</h5></div>
                                            </div>

                                            <div className='choose-ethereumright' onClick={() =>{
                                                setOpenSelectModel(true)
                                            }}>
                                                <img className='imgleft' src={images.BUSDIcon} alt='' style={{ width: 30, height: 30 }} />
                                                <h4>BUSD</h4>
                                                <img className='imgright' src={images.DropdownIcon} alt='' />
                                            </div>

                                        </div>
                                        <div className='icon-center'>
                                            <img src={images.Switch} alt='' />
                                        </div>
                                        <div className='choose-min'>
                                            <div className='from' >
                                                <h5>To</h5>
                                                <img src={images.AVAXIcon} alt='' />
                                                <h5>Avalanche</h5>
                                            </div>
                                            <div className='down'>
                                                <img src={images.DropdownIcon} onClick={handleClickOpenModel} alt='' />
                                            </div>
                                        </div>
                                        <div className='choose-ethereum'>

                                            <div className='choose-ethereumleft'>
                                                <div className='number'>0.00</div>

                                            </div>

                                            <div className='choose-ethereumright' onClick={() =>{
                                                setOpenSelectModel(true)
                                            }}>
                                                <img className='imgleft' src={images.USDCIcon} alt='' />
                                                <h4>BUSD</h4>
                                                <img className='imgright' src={images.DropdownIcon} alt='' />
                                            </div>

                                        </div>
                                        <div className='click-transactionbutton'>
                                            <h1>Begin Swap</h1>
                                        </div>

                                    </div>
                                    <div className='Rectangle'>
                                        <div className='sec-right'>
                                            <h1> 45 sec </h1>
                                            <br />
                                            <p>Finality</p>
                                        </div>
                                        <div className='sec-left'>
                                            <h1> 0.50% </h1>
                                            <br />
                                            <p>Fee</p>
                                        </div>
                                    </div>
                                </div>


                                :
                                <div className='Cross-chain'>
                                    <div className='Swap-centerbutton'>
                                        <div className='Swap-header'>
                                            <div className='Name'>Swap</div>
                                            <div className='iconn'>
                                                <img src={images.Rectangle150} alt='' />
                                            </div>
                                        </div>

                                        <div className='choose-ethereum'>

                                            <div className='choose-ethereumleft'>
                                                <div className='number'>0.00</div>
                                                <div className='max'><h5>Max</h5></div>
                                            </div>

                                            <div className='choose-ethereumright' onClick={() =>{
                                                setOpenSelectModel(true)
                                            }}>
                                                <img className='imgleft' src={images.USDCIcon} alt='' style={{ width: 30, height: 30 }} />
                                                <h4>BUSD</h4>
                                                <img className='imgright' src={images.DropdownIcon} alt='' />
                                            </div>

                                        </div>
                                        <div className='icon-center'>
                                            <img src={images.Switch} alt='' />
                                        </div>
                                        <div className='choose-ethereum-button'>

                                            <div className='choose-ethereumleft'>
                                                <div className='number'>0.00</div>

                                            </div>

                                            <div className='choose-ethereumright' onClick={() =>{
                                                setOpenSelectModel(true)
                                            }}>
                                                <img className='imgleft' src={images.AVAXIcon} style={{ width: 30, height: 30 }} alt='' />
                                                <h4>BUSD</h4>
                                                <img className='imgright' src={images.DropdownIcon} alt='' />
                                            </div>

                                        </div>

                                        <div className='click-transactionbutton'>
                                            <h1>Begin Swap</h1>
                                        </div>
                                    </div>
                                    <div className='Rectanglebotton'>
                                        <div className='sec-right'>
                                            <h1> 45 sec </h1>
                                            <br />
                                            <p>Finality</p>
                                        </div>
                                        <div className='sec-left'>
                                            <h1> 0.50% </h1>
                                            <br />
                                            <p>Fee</p>
                                        </div>
                                    </div>
                                </div>
                            }



                        </div>
                    </div>
                    {openSelectModel && <SelectToken closeSelectModel={setOpenSelectModel}/>}
                    {popup ?
                        <div className='mainn'>
                            <div className='Source'>
                                <div className='table-Source'>
                                    <div className='Sourcename'>Source</div>
                                    <img src={images.CloseModal} onClick={closePopup} alt='' />
                                </div>
                                <div className='edge'></div>

                                <div className='tabletwo-Source'>
                                    <div className='Ethereum-Source'>
                                        <img src={images.ETHIcon} alt='' />
                                        <h1>Ethereum</h1>
                                    </div>

                                    <div className='edge'></div>

                                    <div className='Ethereum-Source'>
                                        <img src={images.AVAXIcon} alt='' />
                                        <h1>Avalanche</h1>
                                    </div>
                                    <div className='edge'></div>

                                    <div className='Ethereum-Source'>
                                        <img src={images.BNBIcon} alt='' style={{ width: 30, height: 30 }} />
                                        <h1>Binance</h1>
                                        <div className='Current'><h1>Current</h1></div>
                                    </div>
                                    <div className='edge'></div>

                                    <div className='Ethereum-Source'>
                                        <img src={images.Polygon} alt='' />
                                        <h1>Polygon</h1>
                                    </div>
                                </div>
                            </div>

                        </div> : ""}
                    {popupModel ?
                        <div className='mainn'>
                            <div className='Source'>
                                <div className='table-Source'>
                                    <div className='Sourcename'>Source</div>
                                    <img src={images.CloseModal} onClick={closePopupModel} alt='' />
                                </div>
                                <div className='edge'></div>

                                <div className='tabletwo-Source'>
                                    <div className='Ethereum-Source'>
                                        <img src={images.ETHIcon} alt='' />
                                        <h1>Ethereum</h1>
                                        <div className='Current'><h1>Current</h1></div>
                                    </div>

                                    <div className='edge'></div>

                                    <div className='Ethereum-Source'>
                                        <img src={images.AVAXIcon} alt='' />
                                        <h1>Avalanche</h1>
                                    </div>
                                    <div className='edge'></div>

                                    <div className='Ethereum-Source'>
                                        <img src={images.BNBIcon} alt='' />
                                        <h1>Binance</h1>

                                    </div>
                                    <div className='edge'></div>

                                    <div className='Ethereum-Source'>
                                        <img src={images.Polygon} alt='' />
                                        <h1>Polygon</h1>
                                    </div>
                                </div>
                            </div>

                        </div> : ""}
                </div>
            </div>
        </>
    )
}

export default SwapContainer