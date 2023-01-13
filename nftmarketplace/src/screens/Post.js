import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";

function Post({ username, caption, imageUrl }) {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/buy`; /* Hard codedpath */
        navigate(path);
    };
    return (
        <div className="post">
            <div className="post__header">
                {/* Header: avatar with username */}

                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/profile1.jpg"
                />

                <h3>{username}</h3>

                
            </div>
            {/* Image */}
            {/* <img className="post__image" src={imageUrl} alt="" onClick={routeChange}/> */}
            <img className="post__image" src={imageUrl} alt="" />

            {/* Username + caption */}
            <h4 className="post__text">
                <strong>{username}</strong> {caption}
                <MDBBtn className="buy-btn" color="dark" onClick={routeChange}>Buy Now</MDBBtn>
            </h4>
        </div>
    );
}

export default Post;
