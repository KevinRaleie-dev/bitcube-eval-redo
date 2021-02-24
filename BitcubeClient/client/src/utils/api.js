import axios from 'axios';

// https://localhost:5001/api/users/login
// https://localhost:5001/api/users/register
// https://localhost:5001/api/posts
// https://localhost:5001/api/posts/create
const baseUrl = 'https://localhost:5001/api';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/posts`);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const registerUser = async (data) => {
    try {
        await axios.post(`${baseUrl}/users/register`, data);
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (data) => {
    try {
        await axios.post(`${baseUrl}/users/login`, data);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/posts/create`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}
