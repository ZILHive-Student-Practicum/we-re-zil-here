import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
    MDBRow,
    MDBCol,
    MDBInput,
} from "mdb-react-ui-kit";
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./BuyScreen.css";

function BuyScreen() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <MDBContainer>
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="title" href="#">
                        Minty
                    </MDBNavbarBrand>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 align-items-center justify-content-end">
                            <MDBNavbarItem className="navbar-items">
                                <form className="d-flex input-group w-auto">
                                    <MDBInput
                                        type="search"
                                        className="form-control"
                                        label="Search here"
                                        aria-label="Search"
                                        size="sm"
                                    />
                                    <MDBBtn color='dark'>Search</MDBBtn>
                                </form>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="navbar-items">
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    Marketplace
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="navbar-items">
                                <MDBNavbarLink href="#">Drops</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="navbar-items">
                                <MDBNavbarLink href="#">Posts</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="navbar-items">
                                <MDBNavbarLink href="#">Stats</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="navbar-items">
                                <MDBNavbarLink href="#"></MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBIcon
                                far
                                icon="user-circle"
                                size="2x"
                                className="icons"
                            />
                            <MDBIcon
                                fas
                                icon="wallet"
                                size="2x"
                                className="icons"
                            />
                            <MDBIcon
                                fas
                                icon="shopping-cart"
                                size="2x"
                                className="icons"
                            />
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <MDBRow>
                <MDBCol size="6" className="left-side">
                    <img
                        src="./post1.png"
                        alt=""
                        className="square border border-4 border-dark"
                    ></img>
                    <h3>Description:</h3>
                    <p>
                        This is a sample description describing this NFT in
                        detail
                    </p>
                </MDBCol>
                <MDBCol size="6" className="right-side">
                    <h3>Collection Name:</h3> <p>PewPew</p>
                    <br></br>
                    <h3>NFT Name:</h3> <p>Hands Up</p>
                    <br></br>
                    <h3>Creator:</h3> <p>Blessingthebobo</p>
                    <br></br>
                    <MDBIcon fas icon="heart" size="2x" className="icons" />
                    <MDBIcon fas icon="share" size="2x" className="icons" />
                    <MDBIcon
                        fas
                        icon="ellipsis-h"
                        size="2x"
                        className="icons"
                    />
                    <br></br>
                    <MDBIcon far icon="clock" size="2x" className="icons" />
                    <p>Sale ends Feb 13 2300 GMT-8</p>
                    <br></br>
                    <h2>100Zil</h2>
                    <br></br>
                    <MDBBtn className="button" color="dark">
                        Buy Now
                    </MDBBtn>
                    <MDBBtn className="button" color="dark">
                        Add to cart
                    </MDBBtn>
                    <MDBBtn className="button" color="dark">
                        Make offer
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default BuyScreen;
