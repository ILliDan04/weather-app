import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query'
import { WeatherData } from './types'
import api from '.'

type RequestParams = {
  lat: number | null
  lon: number | null
}

type Options = UseQueryOptions<WeatherData>

const useCurrentRegionWeather = ({ lat, lon }: RequestParams, options: Options = {}) => {
  return useQuery({
    ...options,
    enabled: lat !== null && lon !== null,
    queryKey: ['currentRegionWeather', lat, lon] as QueryKey,
    queryFn: async () => {
      const { data } = await api.get<WeatherData>('weather', { params: { lat, lon } })
      return data
    },
  })
}

export default useCurrentRegionWeather
