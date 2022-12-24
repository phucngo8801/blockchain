import React from "react";
import images from "../../constants/images";
import TopBar from "../TopBar/TopBar";
import "./SettingsContainer.css";

function SettingsContainer() {
    return (
        <div className="SettingsContainer">
            <TopBar title="Settings" />
            <div className="line"></div>
            <div className="Settings">
                <div className="Settings-header">
                    <div className="Settings-header-left">
                        <div className="Settings-header-left_avatar">
                            <img src={images.ProfilePic} alt="" style={{ width: 80, height: 80 }} />
                        </div>
                        <div className="Settings-header-left_title" style={{ marginLeft: 32 }}>
                            <h1>Cameron Conrad</h1>
                            <p>@cameron</p>
                        </div>
                    </div>
                    <div className="Settings-header-right">
                        <p>Edit profile photo</p>
                    </div>
                </div>
                <div className="Settings-account">
                    <div className="Settings-account-list">
                        <div className="Settings-account-list_left">
                            <p>Account</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="Settings-account-list">
                        <div className="Settings-account-list_left">
                            <p>Username</p>
                        </div>
                        <div className="Settings-account-list_right">
                            <div className="Settings-account-list_right_text">
                                <p>@cameron</p>
                            </div>
                            <div className="Settings-account-list_right_edit">
                                <img src={images.Rectangle336} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>

                    <div className="Settings-account-list">
                        <div className="Settings-account-list_left">
                            <p>Full name</p>
                        </div>
                        <div className="Settings-account-list_right">
                            <div className="Settings-account-list_right_text">
                                <p>@Cameron Conrad</p>
                            </div>
                            <div className="Settings-account-list_right_edit">
                                <img src={images.Rectangle336} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="Settings-account-list">
                        <div className="Settings-account-list_left">
                            <p>Email address</p>
                        </div>
                        <div className="Settings-account-list_right">
                            <div className="Settings-account-list_right_text">
                                <p>cameron@dynamic.fi</p>
                            </div>
                            <div className="Settings-account-list_right_edit">
                                <img src={images.Rectangle336} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="Settings-account-list">
                        <div className="Settings-account-list_left">
                            <p>Wallet address</p>
                        </div>
                        <div className="Settings-account-list_right">
                            <div className="Settings-account-list_right_text">
                                <p>0x34...6948</p>
                            </div>
                            <div className="Settings-account-list_right_change">
                                <button>Change</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Settings-prefer">
                    <div className="Settings-prefer-list">
                        <div className="Settings-prefer-list_left">
                            <p>Preferences</p>
                        </div>
                    </div>
                    <div className="Settings-prefer-list">
                        <div className="Settings-prefer-list_left">
                            <p>Default network</p>
                        </div>
                        <div className="Settings-prefer-list_right">
                            <div className="Settings-prefer-list_right_text default_ethereum">
                                <p>Ethereum</p>
                            </div>
                            <div className="Settings-prefer-list_right-img">
                                <img
                                    src={images.MATICIcon}
                                    alt=""
                                    style={{ width: "34px", height: "34px" }}
                                    className="MATICIcon"
                                />
                                <img
                                    src={images.BNBIcon}
                                    alt=""
                                    style={{ width: "34px", height: "34px" }}
                                    className="BNBIcon"
                                />
                                <img
                                    src={images.AVAXIcon}
                                    alt=""
                                    style={{ width: "34px", height: "34px" }}
                                    className="AVAXIcon"
                                />
                                <img
                                    src={images.ETHIcon}
                                    alt=""
                                    style={{ width: "34px", height: "34px" }}
                                    className="ETHIcon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Settings-prefer-list">
                        <div className="Settings-prefer-list_left">
                            <p>Connected bank</p>
                        </div>
                        <div className="Settings-prefer-list_right">
                            <div className="Connected_bank">
                                <div className="Settings-prefer-list_right_img">
                                    <img src={images.ChaseBankIcon} alt="" style={{ width: '34px', height: '34px' }} />
                                </div>
                                <div className="Settings-prefer-list_right_text Connected_bank_right">
                                    <p>Chase Bank 0245</p>
                                    <span>Checking account</span>
                                </div>
                                <div className="Settings-account-list_right_change">
                                    <button>Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Settings-prefer-list">
                        <div className="Settings-prefer-list_left">
                            <p>Transactions</p>
                        </div>
                        <div className="Settings-prefer-list_right">
                            <div className="Settings-account-list_right_change">
                                <button>Dowload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsContainer;
