import { useState } from 'react';
import useSWR from 'swr';

import { Paper, makeStyles, IconButton, Toolbar, InputAdornment, Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import EmployeeAPI from '../../lib/api/employee';
import PageHeader from '../../components/PageHeader';
import Loading from '../../components/Loading';
import fetcher from '../../lib/utils/fetcher';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    textPrimary: {
        color: theme.palette.text.primary,
    },
    btnAdd: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'end',
    },
    table: {
        display: 'flex',
        height: '70vh',
        width: '100%'
    },
    tableHeader: {
        flexGrow: 1
    }
}));


const ActionButton = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton
                color="inherit"
                className={classes.textPrimary}
                size="small"
                aria-label="edit"
                onClick={editHandler}
            >
                <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
                color="inherit"
                size="small"
                aria-label="delete"
            // onClick={handleDeleteClick}
            >
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
}

const editHandler = (event) => {
    console.log('editHandler:', event);
}

const columns = [
    {
        field: 'fullName',
        headerName: 'Full Name',
        type: 'string',
        flex: 0.2,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        flex: 0.2,
    },
    {
        field: 'mobile',
        headerName: 'Mobile Number',
        type: 'string',
        flex: 0.2,
    },
    // {
    //     field: 'departmentText',
    //     headerName: 'Department',
    //     type: 'string',
    //     flex: 0.2,
    // },
    {
        field: 'actions',
        headerName: 'Actions',
        renderCell: ActionButton,
        sortable: false,
        width: 100,
        headerAlign: 'center',
        filterable: false,
        align: 'center',
        disableColumnMenu: true,
        disableReorder: true,
    }
]

const Employee = ({ employee }) => {
    const classes = useStyles();
    const [pageSize, setPageSize] = useState(25);
    const [sortModel, setSortModel] = useState([
        {
            field: 'fullName',
            sort: 'desc',
        },
    ]);
    
    const addHandler = (event) => {
        if (!employee) return;
        console.log('addHandler:', event);
    }

    return (
        <>
            <PageHeader title="Employee" subTitle="Employee Page" />
            <div className={classes.btnAdd}>
                <Button variant="contained" color="primary" onClick={addHandler} disabled={employee ? false : true}>
                    Add Employee
                </Button>
            </div>
            <Paper className={classes.table}>
                <div className={classes.tableHeader}>
                    {
                        employee ?
                            <DataGrid
                                rows={employee}
                                sortModel={sortModel}
                                columns={columns}
                                pageSize={pageSize}
                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                rowsPerPageOptions={[10, 25, 50]}
                                disableSelectionOnClick={true}
                            /> :
                            <Loading />

                    }
                </div>
            </Paper>
        </>
    )
}

export const getStaticProps = async () => {
    const { data } = await EmployeeAPI.get();
    return {
        props: {
            employee: data,
        },
        revalidate: 1,
    }
}


export default Employee

