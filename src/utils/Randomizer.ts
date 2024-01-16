
export function randomizePerks(data:any){
    const idList:any = []
    while(idList.length < 5){
    const randID =  Math.floor(Math.random() * data.length-1);
    console.log(randID)
    // if (!idList.includes(randID) ){
    //     idList.push(randID)
    // }
    // console.log(idList)
}

}