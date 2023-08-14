import { StyleSheet, useColorScheme, Animated } from 'react-native'
import { useCallback, useMemo, useEffect, useRef } from 'react'

export const Fonts = {
  black: 'Montserrat-Black',
  bold: 'Montserrat-Bold',
  regular: 'Montserrat-Regular',
} as const
export type FontsType = typeof Fonts

export const FontSize = {
  h1: 36,
  h2: 32,
  h3: 28,
  h4: 24,
  h5: 20,
  h6: 18,
  regular: 16,
  secondary: 12,
} as const
export type FontSizeType = typeof FontSize

export const LightPalette = {
  primary: '#172554',
  secondary: '#f0f9ff',
  text: '#000000',
  primaryText: '#172554',
  subText: '#525252',
  background: '#ffffff',
} as const
export type LightPaletteType = typeof LightPalette

export const DarkPalette = {
  primary: '#f0f9ff',
  secondary: '#172554',
  text: '#ffffff',
  primaryText: '#f0f9ff',
  subText: '#e5e5e5',
  background: '#000000',
} as const
export type DarkPaletteType = typeof DarkPalette

export const Palette = {
  blue: '#5374e8',
  lightBlue: '#5ca0eb',
  black: '#000000',
} as const
export type PaletteType = typeof Palette

type ThemePallete = Record<keyof LightPaletteType, Animated.AnimatedInterpolation<string | number>>

export type ThemeProps = {
  isDark: boolean
  themePallete: ThemePallete
  themePalletePlain: LightPaletteType | DarkPaletteType
  palette: PaletteType
  fonts: FontsType
  fontSize: FontSizeType
  spacing: (scale: number) => number
}

const withColorSwitchAnimation = (value: Animated.Value, lightColor: string, darkColor: string) => {
  return value.interpolate({
    inputRange: [0, 1],
    outputRange: [lightColor, darkColor],
  })
}

const useThemedStyles = <
  T extends
    | Animated.WithAnimatedValue<StyleSheet.NamedStyles<T>>
    | Animated.WithAnimatedValue<StyleSheet.NamedStyles<any>>,
>(
  cb: (themeProps: ThemeProps) => T
) => {
  const colorScheme = useColorScheme()
  const animationValue = useRef(new Animated.Value(0)).current
  const textAnimationValue = useRef(new Animated.Value(0)).current

  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme])
  const spacing = useCallback((scale: number) => scale * 4, [])

  const themePallete = useMemo<ThemePallete>(() => {
    return {
      background: withColorSwitchAnimation(animationValue, LightPalette.background, DarkPalette.background),
      primary: withColorSwitchAnimation(animationValue, LightPalette.primary, DarkPalette.primary),
      secondary: withColorSwitchAnimation(animationValue, LightPalette.secondary, DarkPalette.secondary),

      subText: withColorSwitchAnimation(textAnimationValue, LightPalette.subText, DarkPalette.subText),
      text: withColorSwitchAnimation(textAnimationValue, LightPalette.text, DarkPalette.text),
      primaryText: withColorSwitchAnimation(textAnimationValue, LightPalette.primaryText, DarkPalette.primaryText),
    }
  }, [])

  useEffect(() => {
    Animated.timing(animationValue, { toValue: isDark ? 1 : 0, duration: 200, useNativeDriver: true }).start()
    Animated.timing(textAnimationValue, { toValue: isDark ? 1 : 0, duration: 200, useNativeDriver: false }).start()
  }, [isDark])

  return cb({
    isDark,
    themePallete: themePallete,
    themePalletePlain: isDark ? DarkPalette : LightPalette,
    palette: Palette,
    spacing,
    fonts: Fonts,
    fontSize: FontSize,
  })
}

export default useThemedStyles
