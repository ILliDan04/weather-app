import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query'
import api from '.'

type ReturnData = {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: 90
  }
  rain?: {
    '1h'?: number
    '3h'?: number
  }
  snow?: {
    '1h'?: number
    '3h'?: number
  }
  dt: number
  sys: {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

type Options = UseQueryOptions<ReturnData>

const useWeatherForCity = (city: string, options: Options = {}) => {
  return useQuery({
    ...options,
    queryKey: ['regionWeather', city.trim().toLowerCase()] as QueryKey,
    queryFn: async () => {
      const { data } = await api.get<ReturnData>('weather', { params: { q: city } })
      return data
    },
  })
}

export default useWeatherForCity
