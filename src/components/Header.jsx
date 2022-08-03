import styled from "styled-components"

const Header = (props) => {
    return (
        <Navigation>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+ Logo" />
            </Logo>
            <Menu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="Home" />
                    <span>HOME</span>
                </a>
            </Menu>
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
    padding: 0 36px;
    letter-spacing: 5px;
    z-index: 3;
`
const Logo = styled.a`
    width: 80px;
    max-height: 70px;
`

const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    flex-flow: row nowrap;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            width: 20px;
            height: 20px;
            min-width: 20px;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.5px;
            line-height: 1;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                opacity: 0;
                position: absolute;
                left: 0;
                right: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
    }

    &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1;
        }
    }

    /* @media (max-width: 768px) {
        display: none;
    } */
`
