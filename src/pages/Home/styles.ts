import useThemedStyles from '../../utils/useThemedStyles'

export const useStyles = () => {
  return useThemedStyles(theme => ({
    wrapper: {
      flex: 1,
      backgroundColor: theme.themePallete.background,
      paddingHorizontal: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: theme.fonts.bold,
      fontSize: theme.fontSize.h1,
      color: theme.themePallete.text,
    },
    subtitle: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.regular,
      color: theme.themePallete.subText,
      marginTop: theme.spacing(4),
    },
    themeSwitchWrapper: {
      // width: 100,
      // height: 100,
      // backgroundColor: 'red',
    },
  }))
}
