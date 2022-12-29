import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useLocation, useNavigate } from "react-router-dom";

import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./LoginScreen.css";

const { Zilliqa } = require("@zilliqa-js/zilliqa");
const { BN, Long, units } = require("@zilliqa-js/util");

const { StatusType, MessageType } = require("@zilliqa-js/subscriptions");

function LoginScreen() {
    const navigate = useNavigate();

    //-------------------------------------
    //* Get the current account in ZilPay *
    //-------------------------------------
    const getCurrentAccount = () => {
        window.zilPay.wallet.connect().then(function (connected) {
            console.log(connected);
            console.log(window.zilPay.wallet.net);
            console.log(window.zilPay.wallet.defaultAccount);

            //monitor if the user chnages the network from mainnet to testnet vice versa
            // subscribe to network changes
            window.zilPay.wallet
                .observableNetwork()
                .subscribe(function (network) {
                    console.log("Network has been changed to " + network);
                });

            //monitor if the user changes the account number in the zillpay wallet extension on web browser
            // subscribe to user account changes
            window.zilPay.wallet
                .observableAccount()
                .subscribe(function (account) {
                    console.log(
                        "Account has been changed to " +
                            account.base16 +
                            " (" +
                            account.bech32 +
                            ")"
                    );
                    window.zilPay.blockchain
                        .getBalance(account.bech32)
                        .then(function (resp) {
                            console.log(resp);
                        });
                });

            navigate("/home");
        });
    };
    //-----------------------------------------------
    //* Check if ZilPay is installed on the browser *
    //-----------------------------------------------
    const connectZilPay = async (e) => {
        console.log("here");
        if (window.zilPay) {
            console.log("ZilPay Present");
            getCurrentAccount();
        } else {
            console.log("Cannot Find ZilPay");
        }
    };

    return (
        <MDBContainer className="pt-5 my-5 d-flex flex-column w-50 ">
            {/* <img src="logoWithName.png" alt="logo"></img> */}
            <h1 className="text-center logo">Closed Sea</h1>
            <p className="text-center raleway-font">
                Closed Sea is a platform for buying, selling, and trading
                non-fungible tokens (NFTs) with a focus on community and social
                interaction.Our platform allows artists to promote their NFT
                collections with their friends and followers.
            </p>
            <p className="text-center raleway-font">
                Connect your Zilliqa wallet to login to our platform:
            </p>

            <div className="text-center">
                <MDBBtn className="mb-4 w-50" onClick={connectZilPay}>
                    Connect here
                </MDBBtn>
            </div>
            {/* <img src="sea.png" alt="logo"></img> */}
        </MDBContainer>
    );
}

export default LoginScreen;
