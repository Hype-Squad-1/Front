import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

:root{
    --header-backgroundColor: #252525;
    --primary-backgroundColor: #D9D9D9;
    --secundary-backgroundColor:#000000;
    --primary-color: #FFFFFF;
    --buttonProject-color:#000000;
    --details-color: #24CC85;
    --about-color:#000000;
    --fontFamily-Sora: 'Sora', sans-serif;
    --fontFamily-Roboto: 'Roboto', sans-serif;
    --fontFamily-Montserrat: 'Montserrat', sans-serif;
    --fontSize: 3.5rem;
    --fontSize-header: 3rem;
    --fontSizeMidia1024-header: 2.5rem;
    --fontSizeMidia768-header: 1.5rem;
}

* {
 /* border: 2px solid green; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;

}

body {}

html { }
`

export default globalStyle;