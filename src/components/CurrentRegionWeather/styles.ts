import useThemedStyles from '../../utils/useThemedStyles'

export const useStyles = () => {
  return useThemedStyles(theme => ({
    container: {
      backgroundColor: theme.themePallete.secondary,
      borderRadius: theme.spacing(6),
      marginTop: theme.spacing(12),
      paddingVertical: theme.spacing(10),
      paddingHorizontal: theme.spacing(7),
    },
    infoWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cityTitle: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.h5,
      color: theme.themePallete.subText,
      marginBottom: theme.spacing(3),
    },
    tempTitle: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.h3,
      color: theme.themePallete.primaryText,
    },
    icon: {
      position: 'absolute',
      right: -theme.spacing(7),
      top: -theme.spacing(10),
    },
    timerWrapper: {
      backgroundColor: 'white',
      paddingVertical: theme.spacing(3),
      marginTop: theme.spacing(10),
      borderRadius: theme.spacing(4),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    timerSectionWrapper: {
      alignItems: 'center',
      width: 60,
    },
    timerText: {
      fontFamily: theme.fonts.bold,
      color: theme.palette.black,
      fontSize: theme.fontSize.h3,
      letterSpacing: theme.spacing(0.5),
    },
    timerLabelsText: {
      textAlign: 'center',
      fontFamily: theme.fonts.regular,
    },
  }))
}
