let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 20},
            {id: 2, message: 'It\'s my first post', likeCount: 11},
            {id: 3, message: 'I finished my first task', likeCount: 5},
        ],
        dialogs: [
            {id: 1, name: 'Egor'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Maks'},
        ],
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Let\'s go to the circus'},
        ],
    },
};

export default state;