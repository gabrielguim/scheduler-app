const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    sideMargin: {
        display: 'flex',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    signin: {
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: 0,
        }
    }
});

export default styles;