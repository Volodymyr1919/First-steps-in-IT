export const createPost = post => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_POST', post: post });
    };
};
export const deletePost = post => {
    return (dispatch, getState) => {
        dispatch({ type: 'DELETE_POST', post: post.post });
    };
};
export const updatePost = post => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_POST', post: post });
    };
};