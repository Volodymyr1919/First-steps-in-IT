const initState = {
    posts: [
        { id: 1, title: 'Yesterday news', content: 'ksjvbdjbveruobaeroubneroönboreubnöerberaoubevebvearuibveru' },
        { id: 2, title: 'Today news', content: 'ldviubiulebhilurehbvulirbvliud' },
        { id: 3, title: 'Expectations of tomorrow', content: 'dkfbvkjbbjlrnbsrljibr' }
    ]
};

const postReducer = (state = initState, action) => {
    const poduceRes = obj => Object.assign({}, state, obj);
    function _remove(array, action) {
        let newArray = array.slice();
        newArray.splice(action.index, 1)
        return newArray;
    }
    switch (action.type) {
        case 'CREATE_POST':
            console.log('action.post', action.post);
            action.post.id = String(state.posts.length + 1);

            return poduceRes({
                posts: [...state.posts, action.post]
            });

        case 'DELETE_POST':
            console.log('action.post', action.post);
            // state.posts = state.posts.filter(item => item.id !== action.post.id)
            
            return _remove(state.posts, action.post);

        default:
            return state;
    }
};

export default postReducer;