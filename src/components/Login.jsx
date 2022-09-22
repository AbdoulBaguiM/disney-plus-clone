import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Section>
                    <Logo src="/images/cta-logo-one.svg" alt="" />
                    <Description>
                        32.99 MAD per month or 328.99 MAD per year
                    </Description>
                    <SignUp>Sign Up Now {">"} </SignUp>
                    {/* <Flyer src="/images/cta-logo-two.png" alt="" /> */}
                </Section>
                <BackgroundImage />
            </Content>
            <USP>
                <Container2>
                    <Element>
                        <img
                            src="/images/usp_entertainment.png"
                            alt="Entertainment"
                        />
                        <span>The greatest stories ever told</span>
                        <UspDescription>
                            Disney+ is the streaming home of Disney, Pixar,
                            Marvel, Star Wars, National Geographic, plus general
                            entertainment from Star.
                        </UspDescription>
                    </Element>
                    <Element>
                        <img
                            src="/images/usp_fav_device.png"
                            alt="Favorite device"
                        />
                        <span>Experience Disney+ in Arabic</span>
                        <UspDescription>
                            Thousands of hours of TV serties, movies, and
                            originals, from all the wonderful worlds of Disney+.
                        </UspDescription>
                    </Element>
                    <Element>
                        <img
                            src="/images/usp_parental_control.png"
                            alt="Parental control"
                        />
                        <span>Easy-to-use parental controls</span>
                        <UspDescription>
                            Keep your family safe with our intuitive parental
                            controls.
                        </UspDescription>
                    </Element>
                </Container2>
            </USP>
            <Watch>
                <Watchway>
                    <h3>Watch the way you want</h3>
                    <span>The world's greatest stories, all in one place.</span>
                    <img src="/images/watch.png" alt="The way you want" />
                </Watchway>
                <Watchway>
                    <h3>Exclusive originals</h3>
                    <span>
                        TV series, movies and documentaries you can't see
                        anywhere else, from the world's greatest storytellers.
                    </span>
                    <img src="/images/exclusive.png" alt="Exclusive" />
                </Watchway>
                <Watchway>
                    <h3>Compatible devices</h3>
                    <Devices>
                        <Device>
                            <img src="/images/tv.png" alt="TV" />
                            <h4>TV</h4>
                            <span>
                                <ul>
                                    <li>Amazon Fire TV</li>
                                    <li>Android TV</li>
                                    <li>AppleTV</li>
                                    <li>Chromecast</li>
                                    <li>LG TV</li>
                                    <li>Samsung</li>
                                </ul>
                            </span>
                        </Device>
                        <Device>
                            <img src="/images/computer.png" alt="Computer" />
                            <h4>Computer</h4>
                            <span>
                                <ul>
                                    <li>Chrome OS</li>
                                    <li>MacOS</li>
                                    <li>Windows PC</li>
                                </ul>
                            </span>
                        </Device>
                        <Device>
                            <img src="/images/mobile.png" alt="Mobile" />
                            <h4>Mobile and Tablets</h4>
                            <span>
                                <ul>
                                    <li>Android phones and Tablets</li>
                                    <li>iPhone and iPad</li>
                                </ul>
                            </span>
                        </Device>
                    </Devices>
                </Watchway>
            </Watch>
        </Container>
    )
}

export default Login

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: auto;
    font-family: "InterRegular";
`

const Content = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    -webkit-box-shadow: inset 0 -200px 97px 0 #101218;
    -moz-box-shadow: inset 0 -200px 97px 0 #101218;
    box-shadow: inset 0 -200px 97px 0 #101218;
`

const BackgroundImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.png");
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const Section = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Logo = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background: linear-gradient(93.87deg, #095ae6, #062794);
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    margin: 0 0 24px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 28px;
`
/* const Flyer = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
` */

const USP = styled.div`
    height: auto;
    padding: 100px;
    background-color: #0f1014;
    border-top: 5px solid #0d2551;
    border-bottom: 5px solid #0d2551;
`

const Container2 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(91px, 1fr));
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(91px, 1fr));
        row-gap: 150px;
    }
`

const Element = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 80px);
    grid-gap: 12px;

    span {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.2px;
        line-height: 28px;
    }

    img {
        height: 3.75rem;
        margin: 0 auto;
    }
`

const UspDescription = styled.span`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 28px;
    color: #8f98b2;
`
const Watch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0f1014;
`

const Watchway = styled.div`
    width: auto;
    h3 {
        font-size: 32px;
        font-weight: 600;
        letter-spacing: -0.4px;
        line-height: 42px;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 80px;
    }

    span {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 28px;
        color: #8f98b2;
    }

    img {
        height: auto;
        max-width: 80%;
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 30px;
    }
`

const Devices = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(91px, 1fr));
    column-gap: 80px;
    margin-top: 80px;

    @media (max-width: 721px) {
        grid-template-columns: repeat(1, minmax(91px, 1fr));
        row-gap: 100px;
    }
`

const Device = styled.div`
    align-content: flex-start;
    display: grid;

    @media (min-width: 721px) {
        gap: 0;
    }

    h4 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.6px;
        line-height: 32px;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        line-height: 32px;
        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            li {
                margin: 0 auto;
            }
        }
    }

    img {
        margin: 0 auto;
    }
`
