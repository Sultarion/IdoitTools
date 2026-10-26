const apikeyfield = document.getElementById("Apikeyfield");
const apikeybutton = document.getElementById("Apikeybutton");
const apireturn = document.getElementById("errorfield");
import { apirequest } from "./exports.js";

apikeybutton?.addEventListener("click", async() =>{
    let apikey = apikeyfield.value;
    localStorage.setItem("apikey",apikey)
    try{
        let check_key = await apirequest('user/basic');
        apireturn.style.color = "red";
        switch (true) {
            case(check_key == null):
                console.log("Error occured with api request")
                localStorage.removeItem("apikey");
                apireturn.textContent = "Error with API request"
                break;
            case(check_key?.error?.code == 2):
                console.log("Error occured with api key check")
                localStorage.removeItem("apikey") // prob not nessicary, here just in case
                apireturn.textContent = "Invalid Api key, Please try again"
                break;
            case(check_key?.error?.code !== undefined):
                console.log("Unknown error occured");
                localStorage.removeItem("apikey");
                apireturn.textContent = `Unknown error occured, error code ${check_key.error.code}`
                break;
            default:
                apireturn.style.color = "green";
                apireturn.textContent = "Successfuly inputted (hopefully) valid api key";
        }  
        console.log("finished");

    } catch(err){
        localStorage.removeItem("apikey")
        console.error(`Error occured ${err}`);
    }

})
