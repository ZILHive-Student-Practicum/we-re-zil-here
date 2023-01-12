import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
 
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./LoginScreen.css";

function LoginScreen() {
    const navigate = useNavigate();
    const getCurrentAccount = () => {
        window.zilPay.wallet.connect().then(function (connected) {
            console.log(connected);
            console.log(window.zilPay.wallet.net);
            console.log(window.zilPay.wallet.defaultAccount);

            window.zilPay.wallet
                .observableNetwork()
                .subscribe(function (network) {
                    console.log("Network has been changed to " + network);
                });

            
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
    
    const connectZilPay = async (e) => {
        if (window.zilPay) {
            console.log("ZilPay Present");
            getCurrentAccount();
        } else {
            console.log("Cannot Find ZilPay");
        }
    };

    return (
        <MDBContainer className="pt-5 my-5 d-flex flex-column w-50 ">
            <h1 className="text-center logo">Minty</h1>
            <p className="text-center raleway-font">
                Minty is a platform for buying, selling, and trading
                non-fungible tokens (NFTs) with a focus on community and social
                interaction. Our platform allows artists to promote their NFT
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
        </MDBContainer>
    );
}

export default LoginScreen;
