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
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
} from "mdb-react-ui-kit";
import getNFTContractState from "../blockchain functions/fetchstate";
import DeployNFT from "../blockchain functions/deploy_collection_contract";
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./HomeScreen.css";
import Post from "./Post";


function HomeScreen() {
    const [showBasic, setShowBasic] = useState(false);

    // const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState({
        name: "",
        symbol:""
        // imageU: "",
    });

    const [posts, setPosts] = useState([
        {
            username: "blessingthebobo",
            caption: "New Drop coming 19 Dec 1800 PST!",
            imageUrl: "post1.png",
        },
        {
            username: "godtello",
            caption: "Oh, I'm a God!",
            imageUrl: "post2.png",
        },
    ]);

    const onChangeText = (e) => {
        e.preventDefault();
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const addPost = () => {
        toggleShow();
        DeployNFT(newPost.name,newPost.symbol)
        const post = {
            username: "theNFTKing",
            caption: newPost.name,
        };

        setPosts((posts) => [...posts, post]);

        imageName = "";

        setNewPost({ [newPost.name]: "" });
    };

    let imageName = "";

    const onFileChange = (event) => {
        imageName = event.target.files[0].name;
    };

    const [postModal, setPostModal] = useState(false);

    const toggleShow = () => setPostModal(!postModal);

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
                <MDBCol size="6" className="marketplace">
                    <h1>NFT Marketplace</h1>
                    <h3>Top Sales</h3>
                    <hr></hr>
                    <MDBRow className="justify-content-end">
                        <MDBCol md="2">
                            <p className="legend">Price</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p className="legend">Volume</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p className="legend">Time</p>
                        </MDBCol>
                    </MDBRow>

                    {/* Hard coded Top 5 list */}
                    <MDBRow className="align-items-center top-sales-list">
                        <MDBCol md="1">
                            <p>1.</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <img
                                src="profile1.jpg"
                                alt="logo"
                                className="profilepic"
                            ></img>
                        </MDBCol>
                        <MDBCol md="3">
                            <p className="title">Collection A</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>100ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>1M ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>3 mins</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="align-items-center top-sales-list">
                        <MDBCol md="1">
                            <p>2.</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <img
                                src="profile2.jpg"
                                alt="logo"
                                className="profilepic"
                            ></img>
                        </MDBCol>
                        <MDBCol md="3">
                            <p className="title">Collection B</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>90ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>900K ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>5 mins</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="align-items-center top-sales-list">
                        <MDBCol md="1">
                            <p>3.</p>
                        </MDBCol>

                        <MDBCol md="2">
                            <img
                                src="profile3.jpg"
                                alt="logo"
                                className="profilepic"
                            ></img>
                        </MDBCol>
                        <MDBCol md="3">
                            <p className="title">Collection C</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>80ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>800K ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>30 mins</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="align-items-center top-sales-list">
                        <MDBCol md="1">
                            <p>4.</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <img
                                src="profile4.jpg"
                                alt="logo"
                                className="profilepic"
                            ></img>
                        </MDBCol>
                        <MDBCol md="3">
                            <p className="title">Collection D</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>120ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>550K ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>12 mins</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="align-items-center top-sales-list">
                        <MDBCol md="1">
                            <p>5.</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <img
                                src="profile5.jpg"
                                alt="logo"
                                className="profilepic"
                            ></img>
                        </MDBCol>
                        <MDBCol md="3">
                            <p className="title">Collection E</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>90ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>400K ZIL</p>
                        </MDBCol>
                        <MDBCol md="2">
                            <p>20 mins</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol size="6" className="marketplace">
                    <MDBRow>
                        <MDBCol md="9">
                            <h1>Posts</h1>
                        </MDBCol>

                        <MDBCol>
                            <MDBBtn size="m" onClick={toggleShow}>
                                Create Collection
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    <h3>Trending</h3>
                    <hr></hr>

                    <div>
                        {posts.map((post) => (
                            <Post
                                username={post.username}
                                caption={post.caption}
                                imageUrl={post.imageUrl}
                            />
                        ))}
                    </div>
                </MDBCol>
            </MDBRow>
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
                            <MDBInput
                                label="Enter Collection Name"
                                id="input1"
                                type="text"
                                className="input"
                                name="text1"
                                onChange={onChangeText}
                            ></MDBInput>
                            <MDBInput
                                label="Enter Collection Symbol"
                                id="input2"
                                type="text"
                                className="input"
                                name="text2"
                                onChange={onChangeText}
                            ></MDBInput>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn onClick={addPost}>Post</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </MDBContainer>
    );
}

export default HomeScreen;
