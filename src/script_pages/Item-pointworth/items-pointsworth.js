const startButton = document.getElementById("Runscript");
import { apirequest } from "../../index.js";

startButton.addEventListener("click", async () => {
    const apiKey = localStorage.getItem("apikey");
    console.log("pointsworth running")
    const test = await apirequest("market/pointsmarket");
    console.log(test);
    //torn api automatically returns a json object with lowest priced point being index 0
    console.log(test["pointsmarket"][0].cost);
}); 