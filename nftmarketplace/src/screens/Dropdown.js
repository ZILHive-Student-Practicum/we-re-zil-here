import { React, useState } from "react";
import {
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardSubTitle,
    MDBCardFooter,
} from "mdb-react-ui-kit";

import Collections from "./Collections";

function Dropdown({ contractAddress, name }) {
    let arr = ["Pixelated Dreams", "Ethereal Realms", "Crypto Canvas"];

    return (
        <div className="card">
            <MDBCard background="light" className="card">
                <MDBCardTitle>
                    <p className="title">Collection Name: </p>
                    {arr[name]}
                </MDBCardTitle>
                <MDBCardSubTitle>
                    <p className="title">Contract Address:</p> {contractAddress}
                </MDBCardSubTitle>
                <MDBCardFooter>
                    <MDBBtn color="dark" className="button">
                        Mint new NFT
                    </MDBBtn>
                    <MDBBtn color="dark">create post</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        </div>
    );
}

export default Dropdown;
