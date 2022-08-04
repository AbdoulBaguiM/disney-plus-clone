import styled from "styled-components"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, provider } from "../firebase"

const Header = (props) => {
    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                // The signed-in user info.
                const user = result.user
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                // ...
            })
    }

    return (
        <Navigation>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+ Logo" />
            </Logo>
            <Menu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="Home" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="Search" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="Watchlist" />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="Originals" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="Movies" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="Series" />
                    <span>Series</span>
                </a>
            </Menu>
            <Login onClick={handleAuth}>Login</Login>
        </Navigation>
    )
}

export default Header

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
`

const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    text-transform: uppercase;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.5px;
            line-height: 1;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
            margin: 10px;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -5px;
                content: "";
                height: 2px;
                left: 0;
                opacity: 0;
                position: absolute;
                right: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Login = styled.a`
    text-transform: uppercase;
    background-color: #090b13;
    padding: 8px 16px;
    border: 1px solid white;
    border-radius: 5px;
    letter-spacing: 1.5px;
    transition: all 200ms ease 0s;

    &:hover {
        color: #000;
        background-color: #f9f9f9;
        border-color: transparent;
    }
`
