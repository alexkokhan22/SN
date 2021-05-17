import profileReducer, {addPostActionCreator, deletePostsAC} from "./profileReducer";

test('new post should be added',() => {
    //1. start data
    const addPost = addPostActionCreator('new post')
    const state = {
        posts: [
            {id: 1, message: 'My first post', likeCount: 11},
            {id: 2, message: 'Hi, how are you', likeCount: 21},
        ],
        profile: {
            aboutMe: '',
            contacts: {
                skype: '',
                vk: '',
                facebook: '',
                icq: '',
                email: '',
                googlePlus: '',
                twitter: '',
                instagram: '',
                whatsApp: ''
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 1,
            photos: {
                small: '',
                large: ''
            }
        },
        status: ''
    }

    //2. some action
    const newState = profileReducer(state, addPost)

    //3. result
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('new post')
})

test('delete post',() => {
    //1. start data
    const action = deletePostsAC(1)
    const state = {
        posts: [
            {id: 1, message: 'My first post', likeCount: 11},
            {id: 2, message: 'Hi, how are you', likeCount: 21},
            {id: 2, message: 'Hi, how are you', likeCount: 21}
        ],
        profile: {
            aboutMe: '',
            contacts: {
                skype: '',
                vk: '',
                facebook: '',
                icq: '',
                email: '',
                googlePlus: '',
                twitter: '',
                instagram: '',
                whatsApp: ''
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 1,
            photos: {
                small: '',
                large: ''
            }
        },
        status: ''
    }

    //2. some action
    const newState = profileReducer(state, action)

    //3. result
    expect(newState.posts.length).toBe(2)

})

