import React from "react";
import { deletePost } from "../../store/actions/postActions";
import { useDispatch } from "react-redux";

export default function DeletePost(post) {

    const dispatch = useDispatch();
    
    return(
        <button className="btn pink lighten-1 z-depth-0" onClick={() => dispatch(deletePost(post))}>Delete</button>
    );
};