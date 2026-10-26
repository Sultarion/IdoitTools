const startButton = document.getElementById("Runscript");
import { apirequest } from "../../exports.js";
const erroroutput = document.getElementById("errorfield")

//find museum ids dynamically so we don't have to update an id list everytime they add a new exchangeable item
// POSSIBLY CHANGE RETURN ARR TO HAVE [i][0] = ITEM NAME (STR)
async function find_museum_ids(){
    console.log("Finding valid museum item ids")
    const apidata = await apirequest("torn/museum");
    const museumids = [];
    for (let i = 0; i < apidata.museum.length;i++){
        museumids[i]=[];
        for (let k = 0; k < apidata.museum[i].items.length;k++){
            museumids[i][k]=apidata.museum[i].items[k];
        };
    };
    console.log(`Exchangeable items (id): ${museumids}`)
    console.log(museumids)
    return museumids;
};

//find avg market price for an item
//ADD RETURN 
async function find_market_prices(museumitems){
    for (let i = 0; i < museumitems.length;i++){
        for(let k = 0; k <museumitems[i].length;k++){
             console.log(museumitems[i][k])
             let lookupitemid = museumitems[i][k];
             const apidata = await apirequest(`market/${lookupitemid}/itemmarket`);
             console.log(await apidata);
             console.log(await apidata.itemmarket.item.average_price);
        }
    }
}

//find point price
async function find_point_price(){
    console.log("avg point price")
    const apidata = await apirequest("market/pointsmarket");
    //torn api automatically puts lowest point price at index 0 of json array
    console.log(`lowest point cost :${apidata.pointsmarket[0].cost}`);
    return apidata.pointsmarket[0].cost;

};

startButton?.addEventListener("click", async () => {
    if (localStorage.getItem("apikey") !== null) {
        console.log("pointsworth running");
        try{
            find_market_prices(await find_museum_ids());
            


            await find_point_price();

        } catch(err){
        }

    } else{
        console.log("Enter valid api key");
        erroroutput.style.color = "red";
        erroroutput.textContent = ("Enter valid api key");
    };
    

}); 