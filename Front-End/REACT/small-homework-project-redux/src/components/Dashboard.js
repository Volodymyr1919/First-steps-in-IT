import React, { Component } from "react";
import PostList from './posts/PostList';
import { connect } from "react-redux";
import CreatePost from './posts/CreatePost';

class Dashboard extends Component {
    render() {
        const { posts } = this.props;
        // console.log(posts);
        return(
            <div className="dashbord container">
                <div className="row">
                <div className="col s12 m6">
                    <PostList posts={posts} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <CreatePost/>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        posts: state.post.posts
    };
};

export default connect(mapStateToProps)(Dashboard);