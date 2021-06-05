import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
        main: red[500],
    },
    info: {
        main: grey[800],
        alt: {
          fontSize: '14px',
          color: grey[600]
        },
    },
    heading: {
      primary: {
        fontSize: '14px !important'
      }
    }
  },
});

export default theme;