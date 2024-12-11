import Axios from 'axios'; 
const axios = Axios.create({
	baseURL:'https://veocab-project.vercel.app/api/v1',
});

export const axiosWithToken = (token) => Axios.create({
	baseURL:'https://veocab-project.vercel.app/api/v1',
	headers: {
		'Authorization': `Bearer ${token}`,
		'Accept': 'application/json',
	}
})

export default axios;