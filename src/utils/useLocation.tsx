import Geolocation, { GeolocationResponse, GeolocationError } from '@react-native-community/geolocation'
import React, { useContext, useEffect, useState, useMemo, useCallback } from 'react'
import { Platform, PermissionsAndroid, PermissionStatus } from 'react-native'

Geolocation.setRNConfiguration({ skipPermissionRequests: true, authorizationLevel: 'whenInUse' })

type ContextValue = {
  response: GeolocationResponse | null
  error: GeolocationError | null
  ready: boolean
}

const locationContext = React.createContext<ContextValue>({ error: null, response: null, ready: false })
const { Provider } = locationContext

type Props = {
  children: React.JSX.Element | React.JSX.Element[]
}

export const LocationProvider = ({ children }: Props) => {
  const [locationResponse, setLocationValue] = useState<GeolocationResponse | null>(null)
  const [locationError, setLocationError] = useState<GeolocationError | null>(null)
  const [ready, setReady] = useState(false)

  const finalizeLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      data => {
        setLocationValue(data)
        setReady(true)
      },
      err => {
        setLocationError(err)
        setReady(true)
      }
    )
  }, [])

  useEffect(() => {
    if (Platform.OS !== 'android') {
      finalizeLocation()
      return
    }
    const androidSetup = async () => {
      const result = await PermissionsAndroid.request('android.permission.ACCESS_COARSE_LOCATION')
      console.log(result)

      if (result === 'granted') {
        finalizeLocation()
        return
      }
      setReady(true)
    }
    androidSetup()
  }, [])

  const contextValue = useMemo<ContextValue>(
    () => ({ error: locationError, response: locationResponse, ready }),
    [locationError, locationResponse, ready]
  )

  return <Provider value={contextValue}>{children}</Provider>
}

const useLocation = () => {
  const value = useContext(locationContext)
  return useMemo(
    () => ({
      lat: value.response?.coords.latitude ?? null,
      lon: value.response?.coords.longitude ?? null,
      ready: value.ready,
    }),
    [value]
  )
}

export const useLocationError = () => {
  const value = useContext(locationContext)
  return value.error
}

export default useLocation
