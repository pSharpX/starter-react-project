import axios from 'axios';
import * as services from './services/service';

const API = axios.create({
  baseURL: `http://localhost:3001/`
});

export default API;

export const fetchItems = () => API.get(`item/`).then((res) => services.sleepDelay(3000, res));
export const fetchItemById = (id) => API.get(`item/${id}`);
export const saveItem = ({data, config, ...rest}) => API.post('/item', data, config);
export const updateItem = ({data, config, ...rest}) => API.put('/item', data, config);

export const fetchCategories = () => API.get("/category");