import styled from "styled-components"

const Header = (props) => {
    return (
        <Navigation>
            <Logo>
                <img src="/images/logo.svg" alt="Logo" />
            </Logo>
        </Navigation>
    )
}

export default Header

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #040714;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 36px;
`
const Logo = styled.a`
    width: 80px;
`
