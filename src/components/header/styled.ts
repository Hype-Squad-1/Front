import styled from 'styled-components'

export const Header = styled.header`

display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
padding: 2rem 0;
margin: 0 auto;
div h2 {
font-size: 3rem;
}
`;

export const Img = styled.div` 
/* background-color: black;  */
background-image: url(../../../public/hype.png);
background-repeat: no-repeat;
background-size: contain;
border-radius: 80%;
width: 10rem;
height: 10rem;  
`;

export const Nav = styled.nav`


ul {
    display: flex;
    align-items: center; 
    gap: 1rem;
    
    p {
    font-size: 3rem;
    border-right: solid 1px;
    padding: 0 3rem;
} 
}


`;