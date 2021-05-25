import axios from "axios";
import {profileUsersPropsType} from "../redux/profileReducer";

const API_KEY = '96882b02-a427-4592-b196-6833093c647f';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': API_KEY
        }
    }
)

export const usersApi = {
    getUsers: async (currentPage: number, pageSize: number) => {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data

    },
    unFollowUsers: async (id: number) => {
        const response = await instance.delete(`follow/${id}`)
        return response.data
    },

    followUsers: async (id: number) => {
        const response = await instance.post(`follow/${id}`)
        return response.data
    }

}

export const profileApi = {
    setUsersProfile: async (userId: number) => {
        const response = await instance.get(`profile/` + userId)
        return response.data

    },
    getStatus: async (userId: string) => {
        const response = await instance.get(`profile/status/` + userId)
        return response.data
    },
    updateStatus: async (status: string) => {
        const response = await instance.put(`profile/status/`, {status: status})
        return response.data
    },
    savePhoto: async (file: File) => {
        let formData = new FormData()
        formData.append('image', file)
        const response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    },
    saveProfile: async (profile: profileUsersPropsType) => {
        const response = await instance.put(`profile`, profile)
        return response
    }

}


export const headerApi = {
    setUsersLogin: async () => {
        const response = await instance.get('auth/me')
        return response.data

    }
}

export const loginApi = {
    postUsersLogin: async (email: string, password: string, rememberMe: boolean, captcha: string) => {
        const response = await instance.post(`auth/login`, {email, password, rememberMe, captcha})
        return response.data

    },
    deleteUsersLogin: async () => {
        const response = await instance.delete(`auth/login`)
        return response.data
    }
}

export const securityApi = {
    captcha: async () => {
        const response = await instance.get(`security/get-captcha-url`)
        return response
    }
}