import React from 'react'
import { View, Appearance, Animated } from 'react-native'
import { useStyles } from './styles'
import SunIcon from '../../icons/SunIcon'
import MoonIcon from '../../icons/MoonIcon'

const ThemeSwitch = () => {
  const styles = useStyles()

  return (
    <Animated.View style={styles.wrapper}>
      <View
        style={styles.iconWrapper}
        onTouchStart={() => {
          Appearance.setColorScheme('light')
        }}
      >
        <SunIcon color={styles.icon.color} />
      </View>
      <View
        style={styles.iconWrapper}
        onTouchEnd={() => {
          Appearance.setColorScheme('dark')
        }}
      >
        <MoonIcon color={styles.icon.color} />
      </View>
    </Animated.View>
  )
}

export default ThemeSwitch
