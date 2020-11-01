let rerenderEntireTree = () =>{
    console.log ('State is changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 20},
            {id: 2, post: 'It\'s my first post', likesCount: 11},
            {id: 3, post: 'I finished my first task', likesCount: 5},
        ],
        dialogs: [
            {id: 1, name: 'Egor'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Maks'},
        ],
        newPostText: '',
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Let\'s go to the circus'},
        ],
    },
};

export const addPost = () => {
    let newPost = {
        id: 4,
        post: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;