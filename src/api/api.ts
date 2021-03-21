import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '19218bce-5d96-4d62-bcbb-beec954ba863'
        }
    }
)

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    unFollowUsers: (id: number) => {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },

    followUsers: (id: number) => {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    }

}

export const profileApi = {
    setUsersProfile: (userId: string) => {
      return   instance.get(`profile/` + userId)
            .then((response) => {
              return response.data
            })
    }
}


export const headerApi = {
    setUsersLogin: () => {
    return  instance.get(`auth/me`)
        .then((response) => {
            return response.data
        })
    }
}