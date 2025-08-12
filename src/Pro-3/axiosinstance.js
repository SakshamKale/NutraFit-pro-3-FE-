  import axios from 'axios';
  const userApi = axios.create({
    baseURL: 'https://nutrafit-pro-3-backend.onrender.com/data'  // ✅ Correct key
  });


  export default userApi;


