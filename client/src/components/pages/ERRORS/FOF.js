import React from 'react'
import "./Error.css"
import { BiErrorCircle } from 'react-icons/bi'
import { useHistory, Link } from "react-router-dom"

const FOF = () => {
    const history = useHistory();
    return (
        <div className="FOF-page">
            <div className="FOF-container">
                <h1>404</h1>
                <div className="error-svg-container">
                    <BiErrorCircle />
                </div>
                <h3>Page not found </h3>
                <button onClick={() => { history.goBack() }}>Go Back</button>
            </div>
        </div>
    )
}

export default FOF
