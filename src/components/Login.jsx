import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Section>
                    <Logo src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>Sign Up Now {">"} </SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an
                        additional fee with a Disney+ subscription. As of
                        03/26/23, the price of Disney+ and The Disney Bundle
                        will increase by $1.
                    </Description>
                    <Flyer src="/images/cta-logo-two.png" alt="" />
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
        </Container>
    )
}

export default Login

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BackgroundImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
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
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
        letter-spacing: 3px;
        transform: scale(1.05);
        transition-duration: 250ms;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1px;
`
const Flyer = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

const USP = styled.div`
    height: auto;
    padding: 100px;
    background-color: black;
`

const Container2 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
`

const Element = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 80px);
    grid-gap: 10px;

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
