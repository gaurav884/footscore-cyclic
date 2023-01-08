import React, { useEffect, useState } from 'react'
import LeagueLinks from "./LeagueLinks"

import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"


const Leagues = () => {

    return (
        <>
            <Navbar />

            <LeagueLinks />

            <Footer />
        </>
    )
}

export default Leagues;
