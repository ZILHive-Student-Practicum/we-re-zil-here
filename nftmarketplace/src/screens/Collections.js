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
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalFooter,
    MDBModalBody,
} from "mdb-react-ui-kit";
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Collections.css";
import getCollections from "../blockchain functions/fetchstate";
import Dropdown from "./Dropdown";

function Collections() {
    const [showBasic, setShowBasic] = useState(false);
    const [collection, setCollection] = useState([]);

    // function getCollections() {
    //     console.log("here");
    //     setCollection(
    //         getCollections(window.zilPay.wallet.defaultAccount.base16)
    //     );
    // }

    // useEffect(() => {
    //     setInterval(() => getCollections(), 1000);
    // }, []);
    const [postModal, setPostModal] = useState(false);
    const toggleShow = () => setPostModal(!postModal);
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
                                    <MDBBtn color="dark">Search</MDBBtn>
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
                                <MDBNavbarLink href="./collections">
                                    Collections
                                </MDBNavbarLink>
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
            <MDBBtn
                color="dark"
                onClick={async () => {
                    setCollection(
                        await getCollections(
                            window.zilPay.wallet.defaultAccount.base16
                        )
                    );
                }}
            >
                View All Collections
            </MDBBtn>

            {/* <MDBCard>
                {collection.map(item => (
                    <MDBCardTitle>{item}</MDBCardTitle>
                ))}
            </MDBCard> */}
            <div>
                {collection.map((item, index) => (
                    <Dropdown
                        contractAddress={item}
                        name={index}
                        className="cards"
                    />
                ))}
            </div>
            <MDBModal tabIndex="-1" show={postModal} setShow={setPostModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Create a Collection</MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={toggleShow}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {/* <input
                            type="text"
                            placeholder="Collection Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /> */}
                            {/* <input
                            type="text"
                            placeholder="Symbol"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                        /> */}
                        </MDBModalBody>
                        <MDBModalFooter>
                            {/* <MDBBtn onClick={() => DeployCollection(name, symbol)}>Submit</MDBBtn> */}
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </MDBContainer>
    );
}

export default Collections;
