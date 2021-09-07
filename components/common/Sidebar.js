import React from 'react';
import useSWR from 'swr';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import DataTreeView from '../DataTreeView';
import fetcher from '../../lib/utils/fetcher';
import Loading from '../Loading';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
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
    link: {
        color: 'inherit',
        '&:hover': {
            textDecoration: 'none',
        },
    }
}));

const Sidebar = () => {
    const classes = useStyles();
    const { data } = useSWR('/menu', fetcher);
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper, }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                {
                    data ?
                        (<DataTreeView treeItems={data} />) :
                        (
                            <div>
                                <Loading />
                            </div>
                        )
                }
            </div>
        </Drawer>
    )
}

export default Sidebar
