import useThemedStyles from '../../utils/useThemedStyles'

export const useStyles = () => {
  return useThemedStyles(theme => ({
    wrapper: {
      width: 100,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.themePallete.secondary,
      flexDirection: 'row',
    },
    iconWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    icon: {
      color: theme.palette.lightBlue,
    },
  }))
}
