import axios from 'axios';
const userApi = axios.create({
  baseURL: 'http://localhost:5000/data'  // ✅ Correct key
});


export default userApi;


