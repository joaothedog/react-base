import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const API = {
  getAllPosts: async () => {
    let res = await axiosInstance.get(`/posts/`);
    return res.data;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let res = await axiosInstance.post(`/posts/`, {
      title, body, userId
    });
    return res.data;
  },
}