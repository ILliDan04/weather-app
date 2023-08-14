declare module 'react-native-config' {
  export interface NativeConfig {
    WEATHER_API_KEY?: string
    WEATHER_API_BASE_URL?: string
  }

  export const Config: NativeConfig
  export default Config
}
