const initState = {
    posts: [
        { id: 1, title: 'Yesterday news', content: 'ksjvbdjbveruobaeroubneroönboreubnöerberaoubevebvearuibveru' },
        { id: 2, title: 'Today news', content: 'ldviubiulebhilurehbvulirbvliud' },
        { id: 3, title: 'Expectations of tomorrow', content: 'dkfbvkjbbjlrnbsrljibr' }
    ]
};

const postReducer = (state = initState, action) => {
    const poduceRes = obj => Object.assign({}, state, obj);

    switch (action.type) {
        case 'CREATE_POST':
            console.log('action.post', action.post);
            action.post.id = String(state.posts.length + 1);

            return poduceRes({
                posts: [...state.posts, action.post]
            });

        case 'DELETE_POST':
            console.log('action.post', action.post.post.post);
            const filteredPosts = state.posts.filter((item) => item.id !== action.post.post.post.id);

            return {
                ...state,
                posts: filteredPosts
            };

        case 'UPDATE_POST':
            console.log('action.post', action.post, 'post.id', action.post._id);
            const updatedPosts = state.posts.map((item) => item.id === action.post.id ? action.post : item);

            return {
                ...state,
                posts: updatedPosts
            };

        default:
            return state;
    }
};

export default postReducer;