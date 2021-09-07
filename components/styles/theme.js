// fix datagrid pagination error
import { unstable_createMuiStrictModeTheme  as createTheme } from '@material-ui/core/styles';
// import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#004080',
        },
        secondary: {
            main: '#19857B',
        },
        error: {
            main: red.A400,
        },
        background: {
            // default: '#E6E6E6',
            default: '#fafafa',
        },
    },
});

export default theme;
