import React from "react";
import {
    
    MDBBtn,
    MDBContainer,
} from "mdb-react-ui-kit";

import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";

const { Zilliqa } = require("@zilliqa-js/zilliqa");
const { BN, Long, units } = require("@zilliqa-js/util");

const { StatusType, MessageType } = require("@zilliqa-js/subscriptions");

function HomeScreen() {
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
        <p>HomeScreen</p>
    );
}

export default HomeScreen;
