import axios from 'axios'

// 88845000/json

const api = axios.create({
  baseURL : 'http://viacep.com.br/ws/'

})

export default api