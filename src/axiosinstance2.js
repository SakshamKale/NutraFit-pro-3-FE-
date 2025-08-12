import axios from 'axios';

const userApi2 = axios.create({
  baseURL: 'https://nutrafit-pro-3-backend.onrender.com/form'  // ✅ Correct key
});
export default userApi2;
