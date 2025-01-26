import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(65, 194, 24)', // Lime green
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#000000', // Black
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White for cards and containers
    },
    text: {
      primary: '#000000', // Black text
      secondary: 'rgba(0, 0, 0, 0.6)', // Gray text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'rgb(65, 194, 24)',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'rgb(65, 194, 24)',
    },
    body1: {
      fontSize: '1rem',
      color: '#000000',
    },
    button: {
      textTransform: 'none', // Disable uppercase styling for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded buttons
          padding: '10px 20px',
          fontSize: '1rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(65, 194, 24)', // Lime green AppBar
        },
      },
    },
  },
});

export default theme;
