import styled  from "styled-components"


const HeaderStyled = styled.header`
width: 100%;
height: 60px;
background-color: blue;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Header = () => {
    return(
    <HeaderStyled>
        <h1>LABEX</h1>
        <button>Sou Administrador</button>
     </HeaderStyled>
     )
}

export default Header;