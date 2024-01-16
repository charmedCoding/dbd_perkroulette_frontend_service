import React from "react"
import {dataCleanser} from "../utils/dataCleanser"
import survivor_perks from '../utils/survivor_perks.json'
import {usePerks} from '../features/perks/PerkApi'
import {randomizePerks} from '../utils/Randomizer'


const MainPage: React.FunctionComponent = () => {

    const perkQuery = usePerks()
    const perkList = perkQuery.data

    

    
     dataCleanser(survivor_perks)

     if (perkQuery.isLoading){
        return<>Is Loading</>
     }
     if (perkQuery.isError){
        return<>Error!</>
     }

     if (perkQuery === undefined) return <>No perks available</>
     randomizePerks(perkQuery)
   
    return(
    <>
   
        <h1> Dead by Daylight Perkroulette</h1>
        <div>
            <img src = "https://dennisreep.nl/dbd/images/SurvivorPerks/64px-IconPerks_windowsOfOpportunity.webp" ></img>
            {/* <img src = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/24/IconPerks_aceInTheHole.png/revision/latest/scale-to-width-down/100?cb=20161208214510" alt="Description"/> */}
            <div>
                {perkList.map((perk:any) => (
                    <p key={perk.id}>{perk.name}</p>
                ))}
            </div>
        </div>
       
        </>
    )
}

export default MainPage