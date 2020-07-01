import axios from 'axios'

export const BASE_URL = 'http://172.22.236.55:8080/docker/user/' 
axios.defaults.baseURL = BASE_URL;

export const TOKEN_KEY = 'cnb_client_token'