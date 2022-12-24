import React from 'react';
import Stroll from '../Stroll/Stroll';
import Portfolio from '../Portfolio/Portfolio';
import Assets from '../Assets/Assets';
import Notify from '../Notify/Notify';

import images from '../../constants/images'
import './HomeContainer.css';
import TopBar from '../TopBar/TopBar';
import Fund from '../Fund/Fund';

function HomeContainer() {
    return (
        <>
            <div className='homecontainer'>
                <TopBar title="Home"/>
                <div className='Stroll__container-fluid'>
                    <div className='Stroll__container'>
                        <Stroll index='#1' src={images.DOTIcon} text='10.07% APY' />
                        <Stroll index='#2' src={images.USDTIcon} text='9.58% APY' />
                        <Stroll index='#3' src={images.AVAXIcon} text='5.19% APY' />
                        <Stroll index='#4' src={images.USDCIcon} text='4.05% APY' />
                        <Stroll index='#5' src={images.MATICIcon} text='3.90% APY' />
                        <Stroll index='#6' src={images.BTCIcon} text='3.18% APY' />
                    </div>
                </div>

                <div className='portfolio-funding__container'>
                    <Portfolio />
                    <Fund />  
                </div>

                <div className='btn__fund-vaults_mb'>
                    <button type='button' className='btn__fund-mb'>
                        Funding
                    </button>
                    <button type='button' className='btn__vaults-mb'>
                        Vaults
                    </button>
                </div>

                <div className='wrapper__assets-notify'>
                    <div className='assets__container'>
                        <div className='assets__head'>
                            <p className='assets__head-title'>Assets</p>
                            <p className='assets__head-title_sub'>in vaults</p>
                            <p className='assets__head-desc'>outside vaults</p>
                        </div>

                        <div className='assets__content'>
                            <div className='assets__content-list'>
                                <p className='assets__content-item_name'>Name</p>
                                <p className='assets__content-item_balance'>Balance</p>
                                <p className='assets__content-item_interest'>
                                    Interest
                                </p>
                                <p className='assets__content-item_allocation'>
                                    Allocation
                                </p>
                            </div>
                            <Assets
                                src={images.USDCIcon}
                                title='USD Coin'
                                sub='USDC'
                                balancePrice='$131,359.34'
                                balanceSub='131,359.34 USDC'
                                interestPrice='$9,131.78'
                                interestSub='+$9,131.78'
                                percent='38.3%'
                            />
                            <Assets
                                src={images.BTCIcon}
                                title='Bitcoin'
                                sub='BTC'
                                balancePrice='$131,359.34'
                                balanceSub='131,359.34 USDC'
                                interestPrice='$9,131.78'
                                interestSub='+$9,131.78'
                                percent='38.3%'
                            />
                            <Assets
                                src={images.AVAXIcon}
                                title='USD Coin'
                                sub='USDC'
                                balancePrice='$131,359.34'
                                balanceSub='131,359.34 USDC'
                                interestPrice='$9,131.78'
                                interestSub='+$9,131.78'
                                percent='38.3%'
                            />
                            <Assets
                                src={images.DOTIcon}
                                title='USD Coin'
                                sub='USDC'
                                balancePrice='$131,359.34'
                                balanceSub='131,359.34 USDC'
                                interestPrice='$9,131.78'
                                interestSub='+$9,131.78'
                                percent='38.3%'
                            />
                        </div>

                        <div className='assets__content-mb'>
                            <Assets
                                src={images.USDCIcon}
                                title='USD Coin'
                                sub='USDC'
                                interestPrice='$9,131.78'
                                interestSub='+$9,1.7'
                            />
                            <Assets
                                src={images.USDTIcon}
                                title='Tether'
                                sub='USDT - $100'
                                interestPrice='$40,057.66'
                                interestSub='+$92.34'
                            />
                            <Assets
                                src={images.BTCIcon}
                                title='Bitcoin'
                                sub='BTC - $30,056.38'
                                interestPrice='$28,359.59'
                                interestSub='+$67.43'
                            />
                            <Assets
                                src={images.AVAXIcon}
                                title='Avalanche'
                                sub='AVA - $100'
                                interestPrice='$9,131.78'
                                interestSub='+$9,2.78'
                            />
                        </div>
                    </div>
                    

                    <div className='notify__container'>
                        <p className='notify__title'>Notifications</p>
                        <Notify
                            status='Account activity'
                            action='You added 3,000 USDC'
                            time='May 11'
                        />
                        <Notify
                            status='Account activity'
                            action='You added 3,000 USDC'
                            time='May 11'
                        />
                        <Notify
                            status='Account activity'
                            action='You added 3,000 USDC'
                            time='May 11'
                        />
                        <Notify
                            status='Account activity'
                            action='You added 3,000 USDC'
                            time='May 11'
                        />

                    </div>
                </div>
            </div>

        </>
    )
};

export default HomeContainer;
