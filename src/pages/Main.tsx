import React, {useState} from "react"
import {dataCleanser} from "../utils/dataCleanser"
import survivor_perks from '../utils/survivor_perks.json'
import {usePerks} from '../features/perks/PerkApi'
import {getRandomElements} from '../utils/Randomizer'
import {Button} from "@mui/material"



const MainPage: React.FunctionComponent = () => {
const [fourPerks, setFourPerks] = useState([])
    const perkQuery = usePerks()
    const perkList = perkQuery.data


    const newPerksOnClick= () => {
        if(perkList){
        setFourPerks(getRandomElements(perkList,4))
    }
}
     dataCleanser(survivor_perks)

     if (perkQuery.isLoading){
        return<>Is Loading</>
     }
     if (perkQuery.isError){
        return<>Error!</>
     }

     if (perkQuery === undefined) return <>No perks available</>
  
  

    return(
    <>
   
        <h1> Dead by Daylight Perkroulette</h1>
        <div>
            {/* <img src = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" ></img>
            <img src = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/24/IconPerks_aceInTheHole.png" alt="Description"/> */}
           
            <div>
                
                {fourPerks.map((perk:any) => (
                    <div className = "perks">
                    <p key={perk.id}>{perk.name} </p>
                    <img src = {perk.img_url}/>
                   </div>
                
                ))}
            </div>
            <Button onClick={newPerksOnClick}> Randomize Perks </Button>
        </div>
       
        </>
    )
}

export default MainPage