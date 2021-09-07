import { CircularProgress, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: theme.spacing(1)
    },
}));


const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Loading
