import axios from 'axios'
import { Config } from 'react-native-config'

const api = axios.create({
  baseURL: Config.WEATHER_API_BASE_URL,
})

api.interceptors.request.use(req => {
  req.params = {
    ...req.params,
    appid: Config.WEATHER_API_KEY,
    units: 'metric',
  }
  return req
})

export default api
