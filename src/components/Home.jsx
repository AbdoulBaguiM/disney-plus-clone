import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Recommends from "./Recommends"
import Trends from "./Trends"
import Viewers from "./Viewers"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"
import { setMovies } from "../features/movie/movieSlice"
import { selectUserName } from "../features/user/userSlice"

const Home = (props) => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    let recommends = []
    let originals = []
    let newDisney = []
    let trends = []

    useEffect(() => {
        async function fetchMovies() {
            const querySnapshot = await getDocs(collection(db, "movies"))
            querySnapshot.forEach((doc) => {
                console.log(doc.data().type)
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [
                            ...recommends,
                            { id: doc.id, ...doc.data() },
                        ]
                        break

                    case "new":
                        newDisney = [
                            ...newDisney,
                            { id: doc.id, ...doc.data() },
                        ]
                        break

                    case "original":
                        originals = [
                            ...originals,
                            { id: doc.id, ...doc.data() },
                        ]
                        break

                    case "trending":
                        trends = [...trends, { id: doc.id, ...doc.data() }]
                        break

                    default:
                    // do nothing
                }
            })

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisney,
                    original: originals,
                    trending: trends,
                })
            )
        }
        fetchMovies()
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trends />
        </Container>
    )
}

export default Home

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
        background: url("/images/home-background.png") center center / cover
            no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`
