import { React, useState, useEffect } from 'react'
import Card from "./Card.js"
import Modal from "./Modal.js"
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"
import { useHistory } from "react-router-dom"

const Highlights = () => {
    const history = useHistory();
    const [videoData, setVideoData] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [ModalVideoLink, setModalVideoLink] = useState("")


    useEffect(() => {
        window.scrollTo(0, 0)
        fetchItems()
    }, [])


    const fetchItems = async () => {

        try {
            const data = await fetch("/highlights/jkdsfbdsfgbhe945ytioenbgi834")
            const items = await data.json();
    
            setVideoData(items)
           
            
        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }

    }



    return (
        <>
            <Navbar />

            <Modal
                isModal={isModal}
                ModalVideoLink={ModalVideoLink}
                ModalOff={() => {
                    setIsModal(false)
                }}

            />
            <Card
                key={videoData.title}
                videoData={videoData}
                ModalOn={(url) => {
                    var urlRegex = /(https?:\/\/[^ ]*)/;
                    url = url.match(urlRegex)[1];
                    setIsModal(true)
                    setModalVideoLink(url)

                }}
            />
            <Footer />
        </>
    )
}

export default Highlights
