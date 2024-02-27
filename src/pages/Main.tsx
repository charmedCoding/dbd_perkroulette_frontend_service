import React, {useState} from "react"
import {dataCleanser} from "../utils/dataCleanser"
import survivor_perks from '../utils/survivor_perks.json'
import {usePerks} from '../features/perks/PerkApi'
import {getRandomElements} from '../utils/Randomizer'
import {Button} from "@mui/material"
import Tooltip from '@mui/material/Tooltip';



const MainPage: React.FunctionComponent = () => {
const [fourPerks, setFourPerks] = useState([])
const [perkInfo, setPerkInfo] = useState([])
const [name, setName] = useState([])
const [description, setDescription] = useState([])
const [character, setCharacter] = useState([])

    const perkQuery = usePerks()
    const perkList = perkQuery.data

    const setPerk = (item: any) => {
        setName(item.name);
        setDescription(item.description)
        setCharacter(item.character)
    }

    const givePerkDescription = (item:any) => {
setPerkInfo(item.description)
    }

    const newPerksOnClick= () => {
 setPerkInfo([]);
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
   
    
        <div className = "main"> 
        <h1> Dead by Daylight Perkroulette</h1>
            <div className = "perkroulette">
                <div className = "fourperks">
                {fourPerks.map((perk:any) => (
                    <div className = "perks"key={perk.id}>
                    <p >{perk.name} </p>
                    <>
                    <Tooltip title={description} arrow>
                       
                    <Button className = "perk-button" onClick = {() => setPerk(perk)}> 
                    <img src = {perk.img_url}/>
                    </Button>
                    
                    </Tooltip>
                    <p >{perk.character} </p>
                    </>
                   </div>
              
                ))} 
                </div>
              
            </div>
            <Button className= "generator-button" onClick={newPerksOnClick}> Randomize Perks </Button>
        </div>
       
        </>
    )
}

export default MainPage