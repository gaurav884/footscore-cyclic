import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RotateLoader } from "react-spinners"
import Pagination from "./Pagination"



const Card = (props) => {
    const [allVideos, setAllVideos] = useState();
    const [pageVideos, setPageVideos] = useState();
    const [productPerPage, setProductsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState();


    const indexOfFirstItem = currentPage * productPerPage;
    const indexofLastItem = indexOfFirstItem + productPerPage;

    useEffect(() => {
        if (allVideos) {
            allVideos.sort((a, b) => {
                return a.competition.id - b.competition.id;
            })
            setTotalProducts(props.videoData.length)
            setCurrentPage(1)
        }


    }, [allVideos])

    useEffect(() => {
        if (props.videoData) {
            setAllVideos(props.videoData)
        }

    }, [props.videoData])

    useEffect(() => {
        if (allVideos) {
            const newdata = allVideos.filter((each, index) => {
                return (index >= indexOfFirstItem && index < indexofLastItem)

            })
            setPageVideos(newdata)
        }
    }, [currentPage, allVideos])


    if (props.videoData.length === 0) {
        return <div className="loading-screen"><RotateLoader color="white" loading /></div>
    }

    return (
        <>

            {pageVideos && pageVideos.map(each => {
                const date = each.date.slice(0, 10);

                return (

                    <div key={each.title} className="vid-container">

                        <div className="image-container">
                            <Link
                                to="#"
                                className="image-container-link"
                                onClick={() => {
                                    props.ModalOn(each.videos[0].embed)
                                }}
                            >
                                <img className="thumbnail" src={each.thumbnail} alt={each.title} />
                            </Link>
                        </div>

                        <Link
                            to="#"
                            className="content-container-link"
                            onClick={() => {
                                props.ModalOn(each.videos[0].embed)
                            }}>
                            <div className="content-container">
                                <h3 className="match"> {each.title} </h3>
                                <p className="league"> {each.competition.name} </p>
                                <p className="time"> {date} </p>
                            </div>
                        </Link>
                    </div>

                );
            })}

            <Pagination
                productPerPage={productPerPage}
                currentPage={currentPage}
                totalProducts={totalProducts}
                paginate={(page) => {
                    setCurrentPage(page)
                    window.scrollTo(0, 0)
                }}
            />

        </>
    )
}

export default Card
