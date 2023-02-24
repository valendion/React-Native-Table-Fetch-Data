import axios from 'axios'
import {baseUrl} from '../constans/constans'

export const client = axios.create({
   baseURL: baseUrl,
})
