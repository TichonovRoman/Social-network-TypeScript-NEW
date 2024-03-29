import axios from "axios";
import { ProfileInfoType } from "components/Profile/ProfileInfo/ProfileInfo";
import { initialValuesType } from "../components/Login/Login";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "cdcf9189-0a6c-4ea6-a766-22c26d9d1d3e",
    // "API-KEY": process.env.PUBLIC_URL
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count =${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(id: string) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },
  follow(id: string) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },
  getProfile(userId: string) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get<ProfileInfoType>(`profile/` + userId);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status });
  },
  savePhoto(file: File) {
    let formData = new FormData();
    formData.append("image", file);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile: any) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  login(values: initialValuesType) {
    return instance.post("/auth/login", values);
  },
  logout() {
    return instance.delete("/auth/login");
  },
};
