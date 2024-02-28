import React, {useState} from "react"
import {dataCleanser} from "../utils/dataCleanser"
import survivor_perks from '../utils/survivor_perks.json'
import {usePerks} from '../features/perks/PerkApi'
import {getRandomElements} from '../utils/Randomizer'
import {Button} from "@mui/material"
import Tooltip from '@mui/material/Tooltip';

const MainPage: React.FunctionComponent = () => {
    // const meg_url = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/12/SurvivorMeg.png";
    // const locker_url = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/de/Dbd-survivor-closet.png"
    // const hatch_url = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fc/IconHelpLoading_hatch.png"
    const survivor_url = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/IconHelpLoading_survivor.png"
    // const totem_url = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e9/IconHelpLoading_totem.png"
    // const perk_base_url = "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/74/IconHelp_perks.png"
    const perkStart: any = {name: "", description: "", character:"", img_url: survivor_url}
const [fourPerks, setFourPerks] = useState([perkStart, perkStart, perkStart,perkStart])
// const [perkInfo, setPerkInfo] = useState([])
// const [name, setName] = useState([])
const [description, setDescription] = useState([])
// const [character, setCharacter] = useState([])



    const perkQuery = usePerks()
    const perkList = perkQuery.data

    // const setPerk = (item: any) => {
    //     setName(item.name);
    //     setDescription(item.description)
    //     setCharacter(item.character)
    // }

//     const givePerkDescription = (item:any) => {
// setPerkInfo(item.description)
//     }

    const newPerksOnClick= () => {
//  setPerkInfo([]);
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

            <div className = "perkroulette">
            <h1> Dead by Daylight Perkroulette</h1>
                <div className = "fourperks">
                {fourPerks.map((perk:any) => (
                    <div className = "perks"key={perk.id}>
                    <p >{perk.name} </p>
                    <>
                    <Tooltip title={perk.description} arrow>
                    <Button className = "perk-button" > 
                    <img src={perk.img_url} className="center-image" />
                    </Button>
                    </Tooltip>
                    <p >{perk.character} </p>
                    </>
                   </div>
              
                ))} 
                </div>
                <Button variant="contained" className= "generator-button" style={{backgroundColor: 'orange', color: 'white'}} onClick={newPerksOnClick}> Randomize Perks </Button>
            </div>
      
    )
}

export default MainPage