import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types';
import Meta from './common/Meta';

const useStyles = makeStyles(theme => ({
    pageHeader: {
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageTitle: {
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))

const PageHeader = (props) => {
    const classes = useStyles();
    const { title, subTitle } = props;
    return (
        <>
            <Meta title={title} />
            <div className={classes.pageHeader}>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default PageHeader
