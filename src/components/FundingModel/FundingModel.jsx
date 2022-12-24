import React from 'react';
import './FundingModel.css';
import images from '../../constants/images';
import '../Fund/Fund'

function FundingModel({closeFundingModel}) {

    return (
        <>
            <div className='Funding-model'>
                <div className='Funding-Source'>
                    <div className='Funding-Source-top'>
                        <h3 className='Funding-Source-top_header'>
                            Funding Source
                        </h3>
                        <div className='Funding-Source-top_close' onClick={() => closeFundingModel(!true)}>
                            <img src={images.CloseModal} alt="" />
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='Funding-Source-bot'>
                        <div className='Funding-Source-bot_title'>
                            <div className='Funding-Source-bot_title-title2'>
                                <p>
                                    Bank account
                                </p>
                                <span>Connect new</span>
                            </div>
                            <button className='Funding-Source-bot_title-box'>
                                Current
                            </button>
                        </div>
                        <div className='line'></div>
                        <div className='Funding-Source-bot_title'>
                            <div className='Funding-Source-bot_title-title2'>
                                <p>
                                    Debit / Credit
                                </p>
                                <span>Add card</span>

                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='Funding-Source-bot_title'>
                            <div className='Funding-Source-bot_title-title2'>
                                <p>
                                    Wire transfer
                                </p>
                                <span>More info</span>

                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='Funding-Source-bot_title'>
                            <div className='Funding-Source-bot_title-title2'>
                                <p>
                                    Crypto
                                </p>
                                <span>0x23..4935</span>

                                <div className='Funding-Source-bot_title-copy'>
                                    <img src={images.Rectangle258} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundingModel