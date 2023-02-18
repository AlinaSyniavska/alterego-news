import {createTheme} from "@mui/material";

const muiServices = {
    createCustomTheme: () => {
        return createTheme({
            typography: {
                fontFamily: [
                    'Montserrat',
                    'sans-serif'
                ].join(',')
            },
            palette: {
                primary: {
                    light: '#868686',
                    main: '#363636',
                    contrastText: '#fff',
                },
                secondary: {
                    main: '#6495ED',
                }
            }

        });
    },

}

export {
    muiServices
}

