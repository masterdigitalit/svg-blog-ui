import axios from 'axios'

export default axios.create({
	baseURL: "https://svg-blog-server.onrender.com/", //https://mains-h5w5.onrender.com/server/api      http://192.168.1.3:9999/    https://svg-blog-server.onrender.com
	withCredentials: true,
});