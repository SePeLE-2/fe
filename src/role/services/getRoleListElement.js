<<<<<<< HEAD
import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const getRoleListElement = (params = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();
	let paramsGet = Object.assign(params, {token});
	return axios.get(`${environment.rootApi}/call/role/list`, {
		params: paramsGet,		
		headers: {
			'Authorization': token
		}
	}).catch((error) => {
		console.error(error)
	})
} 

export default getRoleListElement
=======
import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const getRoleListElement = (params = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();
  let paramsGet = Object.assign(params, { token });
  return axios
    .get(`${environment.rootApi}/call/role/list`, {
      params: paramsGet,
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getRoleListElement;
>>>>>>> 294086b7dd1b0528d477b652110b7d31093ae5fa
