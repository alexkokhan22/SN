import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '96882b02-a427-4592-b196-6833093c647f'
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
    },
    getStatus: (userId: string) => {
       return  instance.get(`profile/status/` + userId)
            .then((response) => {
                return response.data
            })
    },
    updateStatus: (status: string) => {
           return  instance.put(`profile/status/`, {status: status})
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

export const loginApi = {
    postUsersLogin: (email: string, password: string, rememberMe: boolean) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then((response) => {
                return response.data
            })
    },
    deleteUsersLogin: () => {
        return instance.delete(`auth/login`)
            .then((response) => {
                return response.data
            })
    }
}