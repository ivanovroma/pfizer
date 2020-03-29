import axios from 'axios'
import env from '../env'

export default () => {
  var options = {
    baseURL: env.baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (localStorage.getItem(env.jwt)) {
    options.headers = {
      'authorization': localStorage.getItem(env.jwt),
      'Content-Type': 'application/json'
    }
  }

  return axios.create(options)
}
