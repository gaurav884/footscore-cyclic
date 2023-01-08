import React,{useEffect} from 'react'
import FilterForm from './FilterForm'
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"


const Stats = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[])
    return (
        <>
            <Navbar />
            <FilterForm />
            <Footer />
        </>
    )
}

export default Stats
