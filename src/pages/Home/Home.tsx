import React, { useMemo } from 'react'
import { View, Animated } from 'react-native'
import { useStyles } from './styles'
import dayjs from 'dayjs'
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch'
import CurrentRegionWeather from '../../components/CurrentRegionWeather/CurrentRegionWeather'

const Home = () => {
  const styles = useStyles()

  const currentDate = useMemo(() => dayjs().format('DD MMMM, dddd'), [])

  return (
    <Animated.View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <Animated.Text style={[styles.title]}>Good</Animated.Text>
          <Animated.Text style={styles.title}>Morning</Animated.Text>
          <Animated.Text style={styles.subtitle}>{currentDate}</Animated.Text>
        </View>
        <View style={styles.themeSwitchWrapper}>
          <ThemeSwitch />
        </View>
      </View>
      <CurrentRegionWeather />
    </Animated.View>
  )
}

export default Home
