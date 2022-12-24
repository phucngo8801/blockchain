import React, { useState } from 'react';
import './Fund.css';
import images from '../../constants/images';
import FundingModel from '../FundingModel/FundingModel';
import SelectToken from '../SelectToken/SelectToken';

function Fund() {
    const [openFundingModel, setOpenFundingModel] = useState(false);
    const [openSelectModel, setOpenSelectModel] = useState(false);

    return (
        <div>
            <div className="fund">
                <p className="fund__title">Funding</p>

                <div className="fund__chasebank">
                    <div className="fund__chasebank-check">
                        <img src={images.ChaseBankIcon} alt="chasebank" />
                        <div className="fund__chasebank-check_text">
                            <p className="fund__chasebank-check_text-title">Chase Bank 0245</p>
                            <p className="fund__chasebank-check_text-desc">Checking account</p>
                        </div>
                    </div>

                    <div className="fund__chasebank-btn" onClick={() => {
                        setOpenFundingModel(true)
                    }}>Change</div>
                </div>

                <div className="fund__input-first">
                    <p>0.00</p>
                    <div className="fund__input-btn">$200</div>
                    <div className="fund__input-btn">$500</div>
                    <div className="fund__input-btn">$1,000</div>
                    <img src={images.Switch} alt="switch" />
                </div>

                <div className="fund__input-second">
                    <p>0.00</p>
                    <div className="fund__input-btn" onClick={() => {
                        setOpenSelectModel(true)
                    }}>
                        <img src={images.USDCIcon} alt="USDCIcon" />
                        <p>USDC</p>
                        <img src={images.DropdownIcon} alt="DropdownIcon" />
                    </div>
                </div>

                <button type="button" className="btn-fund btn__fund-acc">
                    Fund Account
                </button>

                <button type="button" className="btn-fund btn__fund-withdraw">
                    Withdraw Funds
                </button>
            </div>
            {openFundingModel && <FundingModel closeFundingModel={setOpenFundingModel} />}
            {openSelectModel && <SelectToken  closeSelectModel={setOpenSelectModel}/>}

           
        </div>

    )
}

export default Fund