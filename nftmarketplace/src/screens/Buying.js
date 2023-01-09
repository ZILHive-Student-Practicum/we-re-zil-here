import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBTextArea,
    MDBFile,
} from "mdb-react-ui-kit";

import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./HomeScreen.css";
import Post from "./Post";

function Buying() {
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
                                    <MDBBtn color="primary">Search</MDBBtn>
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

                            <MDBIcon far icon="user-circle" size='2x' className="icons" />
                            <MDBIcon fas icon="wallet" size='2x'  className="icons"/>
                            <MDBIcon fas icon="shopping-cart" size='2x'  className="icons"/>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </MDBContainer>
    );
}

export default Buying;