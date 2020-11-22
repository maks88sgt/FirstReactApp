import * as axios from "axios";

const instanceOfAxios = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "3fb7a1a3-24b6-43a1-8418-563e9e0f87e4",
        },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    }
)


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceOfAxios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },

    follow (userId) {
        return instanceOfAxios.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instanceOfAxios.delete(`follow/${userId}`);
    },

    getProfile (userId) {
        return instanceOfAxios.get(`profile/${userId}`);
    }
}

export const authAPI = {
    me () {
        return instanceOfAxios.get(`auth/me`);
    }
}


