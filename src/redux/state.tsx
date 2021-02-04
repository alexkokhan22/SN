let render = () => {

}


export const subscribe = (callback: () => void) => {
    render = callback;
}

export type messagePropsType = {
    id: number
    message: string
}


export type dialogPropsType = {
    id: number
    name: string
}


export type dialogsPropsType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
}

export type postsPropsType = {
    id: number
    message: string
    likeCount: number
}

export type profilePropsType = {
    posts: Array<postsPropsType>
    newPostText: string
}


export type StatePropsType = {
    profile: profilePropsType
    dialogs: dialogsPropsType
}


const state: StatePropsType = {
    profile: {
        posts: [
            {id: 1, message: 'My first post', likeCount: 11},
            {id: 2, message: 'Hi, how are you', likeCount: 21},
        ],
        newPostText: ''
    },
    dialogs: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Lera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you ?'}
        ]
    }

}

export const addPost = () => {
    let newPost: postsPropsType = {
        id: 3,
        message: state.profile.newPostText,
        likeCount: 0
    }

    state.profile.posts.push(newPost)
    render();
}

export const newPostTextFunction = (newText: string) => {
    state.profile.newPostText = newText;
    render();

}


export default state;