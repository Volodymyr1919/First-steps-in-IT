import React from "react";
import DeletePost from "./DeletePost";
import { UpdatePost } from "./UpdatePost"


const PostSummary = ({ post }) => {
    return (
        <div className="card z-depth-0 project-summery">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <p>Posted</p>
                <p className="grey-text">3rd September, 2am</p>
                <UpdatePost post={post} />
            </div>
            <DeletePost post={post} />
        </div>
    );
};

export default PostSummary;