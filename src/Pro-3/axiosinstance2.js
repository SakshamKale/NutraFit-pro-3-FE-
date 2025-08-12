import axios from 'axios';

const userApi2 = axios.create({
  baseURL: 'http://localhost:5000/form'  // ✅ Correct key
});
export default userApi2;
