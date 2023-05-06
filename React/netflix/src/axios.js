
import axios from 'axios';
import {base_URL} from './constants/constans';

const instance = axios.create({
  baseURL: base_URL,
});

export default instance;