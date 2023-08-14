import { useWindowDimensions } from 'react-native'

import useThemedStyles from '../../utils/useThemedStyles'

export const useStyles = () => {
  const { width } = useWindowDimensions()
  return useThemedStyles(({ themePallete, spacing, fonts, palette }) => ({
    wrapper: {
      backgroundColor: themePallete.background,
      flex: 1,
      paddingHorizontal: spacing(2),
      paddingVertical: spacing(4),
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontFamily: fonts.bold,
      fontSize: 32,
      paddingTop: spacing(2),
      color: themePallete.text,
    },
    view: {
      flex: 1,
      width,
    },
    text: {
      color: themePallete.text,
    },
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    btn: {
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: spacing(2),
    },
    nextBtn: {
      backgroundColor: palette.blue,
    },
    skipBtn: {
      borderColor: themePallete.text,
      borderWidth: 1,
    },
    btnTitle: {
      fontFamily: fonts.bold,
      textTransform: 'uppercase',
    },
    skipBtnTitle: {
      color: themePallete.background,
    },
    nextBtnTitle: {
      color: themePallete.background,
    },
  }))
}
