const startButton = document.getElementById("Runscript");
import { apirequest } from "../../exports.js";
const erroroutput = document.getElementById("errorfield")

async function find_museum_ids(){
    console.log("Finding valid museum item ids")
    const fetch = await apirequest("torn/museum");
    console.log(fetch)
};

async function find_point_price(){
    console.log("Fetching avg point price")
    const fetch = await apirequest("market/pointsmarket");
    //torn api automatically puts lowest point price at index 0 of json array
    console.log(fetch.pointsmarket[0].cost);
    return fetch.pointsmarket[0].cost;

};

startButton?.addEventListener("click", async () => {
    if (localStorage.getItem("apikey") !== null) {
        console.log("pointsworth running");
        /*for (let i = 0; i < length(find_museum_ids()); i++){

        };*/
        //find_museum_ids();
        find_point_price();
    } else{
        console.log("Enter valid api key");
        erroroutput.style.color = "red";
        erroroutput.textContent = ("Enter valid api key");
    };
    

}); 