import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Meta from './Meta';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: '90vh',
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Meta />
            <div className={classes.root}>
                <CssBaseline />
                <Navbar />
                <Sidebar />
                <main className={classes.content}>
                    <Toolbar />
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;