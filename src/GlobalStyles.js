import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;

}
html{
    line-height:1.15;
}
:root{
--clr-orange:#fffc00;
--clr-white:#ffff;
--clr-blackfortest:#000;
--ff-primary:Roboto;
--ff-secondary:'Nunito', sans-serif;;
--fs-primary:1.3rem;
--fs-para:0.8rem;
--fs-heading:3rem;



// for all the buttons
--fs-button:1rem;
--br-button:20px;
--pd-button:0.1em 0.5em 0.1em 0.5em;


}

body{
    margin:0;

    font-family:  'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size:10px;
}
h1,h2,h3,p{padding:0; margin:0;}

`;
export default GlobalStyle;
