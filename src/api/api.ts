import axios from "axios";

type GetUsersPropsType = {
    currentPage: number,
    pageSize: number,
}


const instance = axios.create({
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            "API-KEY": "cdcf9189-0a6c-4ea6-a766-22c26d9d1d3e"
        }
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count =${pageSize}`)
            .then((response) => response.data)
    },
}



