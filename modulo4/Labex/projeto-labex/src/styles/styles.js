import styled from "styled-components"
import {createTheme} from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#BF7245',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#D98C4A',
      main: '#323540',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#F2E852',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

export const CardTrip = styled.div`
margin: 15px;
border-radius: 15px;
background-color: #323540;
color: whitesmoke;
display: flex;
flex-direction: column;
justify-items: center;
justify-content: center;
padding: 5px;
`
export const BodyContainer = styled.div`
background-image:url(https://cdn.pixabay.com/photo/2016/03/26/22/44/sky-1281662_960_720.jpg);
height: 100vh;
background-position: center center;
background-size: cover;
text-align: center;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-around;
margin: auto;
`

export const BodyContainer2 = styled.div`
background-image:url(https://cdn.pixabay.com/photo/2016/03/26/22/44/sky-1281662_960_720.jpg);
height: 100%;
width: 100%;
background-position: center center;
background-size: cover;
margin: auto;
`