import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../store/actions/postActions";
// import { useDispatch } from "react-redux";

// export default function DeletePost(post) {

//     const dispatch = useDispatch();
    
//     return(
//         <button className="btn pink lighten-1 z-depth-0" onClick={() => dispatch(deletePost(post))}>Delete</button>
//     );
// };
class DeletePost extends React.Component {
    state = {
        post: this.props
    };

    handleDelete = e => {
        e.preventDefault();
        this.props.deletePost(this.state);
    };

    render() {
        return(
            <button className="btn pink lighten-1 z-depth-0" onClick={this.handleDelete}>Delete</button>
        );
    }
}

const mapActionProps = dispatch => {
    return {
        deletePost: post => dispatch(deletePost(post))
    };
};

export default connect(
    null,
    mapActionProps
)(DeletePost);