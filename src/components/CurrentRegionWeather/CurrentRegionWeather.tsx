import React, { useEffect, useMemo, useState } from 'react'
import { Animated, View, Image } from 'react-native'
import useLocation from '../../utils/useLocation'
import useCurrentRegionWeather from '../../api/useCurrentRegionWeather'
import { useStyles } from './styles'
import dayjs from 'dayjs'

const CurrentRegionWeather = () => {
  const styles = useStyles()
  const { lat, lon } = useLocation()
  const [date, setDate] = useState(dayjs())

  const { data } = useCurrentRegionWeather({ lat, lon })

  const [hours, minutes, seconds] = useMemo(() => {
    const hour = `${date.hour()}`
    const minute = `${date.minute()}`
    const second = `${date.second()}`
    return [
      hour.length < 2 ? `0${hour}` : hour,
      minute.length < 2 ? `0${minute}` : minute,
      second.length < 2 ? `0${second}` : second,
    ]
  }, [date])

  useEffect(() => {
    setTimeout(() => {
      setDate(dayjs())
    }, 1000)
  }, [date])

  return (
    <Animated.View style={styles.container}>
      <View style={styles.infoWrapper}>
        <View>
          <Animated.Text style={styles.cityTitle}>{data?.name}</Animated.Text>
          <Animated.Text style={styles.tempTitle}>{data?.main.temp}&#176;</Animated.Text>
        </View>
        <View>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png` }}
            style={styles.icon}
            height={150}
            width={150}
          />
        </View>
      </View>
      <View style={styles.timerWrapper}>
        <View style={styles.timerSectionWrapper}>
          <Animated.Text style={styles.timerText}>{hours}:</Animated.Text>
          <Animated.Text style={styles.timerLabelsText}>hours</Animated.Text>
        </View>
        <View style={styles.timerSectionWrapper}>
          <Animated.Text style={styles.timerText}>{minutes}:</Animated.Text>
          <Animated.Text style={styles.timerLabelsText}>mins</Animated.Text>
        </View>
        <View style={styles.timerSectionWrapper}>
          <Animated.Text style={styles.timerText}>{seconds}</Animated.Text>
          <Animated.Text style={styles.timerLabelsText}>secs</Animated.Text>
        </View>
      </View>
    </Animated.View>
  )
}

export default CurrentRegionWeather
