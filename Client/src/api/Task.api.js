import axios from 'axios'
export const getAllTask =() =>{
   return axios.get('http://localhost:8000/task/api/v1/task/')
}