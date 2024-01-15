import React from "react"
import {dataCleanser} from "../utils/dataCleanser"
import survivor_perks from '../utils/survivor_perks.json'

const MainPage: React.FunctionComponent = () => {

    dataCleanser(survivor_perks)

    return(
    <>
        <h1> Dead by Daylight Perkroulette</h1>
        <div>
            <img src = "https://dennisreep.nl/dbd/images/SurvivorPerks/64px-IconPerks_windowsOfOpportunity.webp" ></img>
        </div>
        </>
    )
}

export default MainPage