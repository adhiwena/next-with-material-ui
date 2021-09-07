import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    MatairSys
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
