import axios from 'axios';
import { config } from '../config';

export const httpService = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  proxy: {
    host: '104.236.174.88',
    port: 3128,
  },
});
