
import { React, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { RotateLoader } from "react-spinners"
const Carousel = () => {
    const history = useHistory();
    const [newsData, setNewsData] = useState([]);
    const [current, setCurrent] = useState(0);
    const length = newsData.length;

    useEffect(() => {
        if (window.innerWidth > 900) {
            const changeSlide = setInterval(() => nextSlide(), 5000)
            return () => clearInterval(changeSlide);
        }
    }, [current])

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);

    }

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);

    }



    useEffect(() => {
        fetchData()
    }, [])


    async function fetchData() {
        try {
            const response = await fetch("/news/skjdfbskjbfksjfbds32wjebrkwi3");
            const data = await response.json();

            setNewsData(data.data)
        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }

    }



    if (newsData.length === 0) {
        return <div className="loading-screen"><RotateLoader color="white" loading /></div>
    }
    return (
        <>

            {newsData.map((each, index) => {
                return (


                    <div className={index === current ? "slide-active" : "slide"}
                        key={each.id} >
                        <FaRegArrowAltCircleLeft className="leftSlider" onClick={prevSlide} />
                        <FaRegArrowAltCircleRight className="rightSlider" onClick={nextSlide} />
                        {index === current && (
                            <>
                                <img src={each.image} alt={each.slug} />
                                <div className="image-content">
                                    <h3 className="image-title">{each.title}</h3>
                                    <p className="image-description"> {each.description}</p>
                                    <a className="more-link" href={each.url} target="_blank" > Read More.....</a>
                                </div>
                            </>
                        )}

                    </div>

                )
            })}
        </>
    )
}

export default Carousel
