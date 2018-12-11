const styles = theme => ({
    success: {
      backgroundColor: theme.palette.success[600],
    },
    error: {
      backgroundColor: theme.palette.error[500],
    },
    info: {
      backgroundColor: theme.palette.primary,
    },
    warning: {
      backgroundColor: theme.palette.secondary,
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    }
});

export default styles;