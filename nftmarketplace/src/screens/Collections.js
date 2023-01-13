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
    MDBCardBody,
    MDBCardTitle,
    MDBInput,
    MDBCard,
} from "mdb-react-ui-kit";
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Collections.css";
import getCollections from "../blockchain functions/fetchstate";

function Collections() {
    const [showBasic, setShowBasic] = useState(false);
    const [collection,setCollection]= useState([]);
    
      return (
        <MDBContainer>
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="title" href="./home">
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
                                <MDBNavbarLink href="./collections">Collections</MDBNavbarLink>
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
            <MDBBtn onClick={async() => {
                setCollection(await getCollections(window.zilPay.wallet.defaultAccount.base16))
            }}
            >View All Collections</MDBBtn>
            <hr></hr>
            <MDBCard>
                {collection.map(item => (
                    <MDBCardTitle>{item}</MDBCardTitle>
                ))}
            </MDBCard>
        </MDBContainer>
    );
}

export default Collections;