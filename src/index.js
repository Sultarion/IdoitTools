//low kirkentually have no idea what to put in here
const apikeyfield = document.getElementById("Apikey");
const apikeybutton = document.getElementById("Apikeybutton");
const apireturn = document.getElementById("Apikeyresult");
let apikey = "";

if (apikeyfield) {
    apikeyfield.value = localStorage.getItem("apikey") || "";
}

//
apikeybutton?.addEventListener("click",() => {
    apikey = apikeyfield.value;
    if (apikey === "" || !(apikey.length == 16)){
        localStorage.removeItem("apikey");
        apireturn.style.color = "red";
        apireturn.textContent = "Invalid API Key, please enter a valid key";
    } else {
        console.log("Api key entered");
        localStorage.setItem("apikey", apikey);
        if (apireturn){
            apireturn.style.color = "green";
            apireturn.textContent = "Entered hopefully valid API Key"
        };


    };

});

/*
MAKE SEPRATE FILE LATER SO WE DON'T RELOAD PREVIOUS CODE EVERYTIME WE CALL API REQUEST (remove error handling in previous code too so we don't have unessicary shit)
file exports
*/

export async function apirequest(middleurl) {
    const url = `https://api.torn.com/v2/${middleurl}?comment=IT:Personal Script test`;
    console.log("Urlreq:",url);
    try {
        const response = await fetch(url, {headers: {
            "Authorization": `ApiKey ${localStorage.getItem("apikey")}`,
            "Accept": "application/json"    
        }})

        if (!response.ok){
            console.error("api request error", response.status);
            return null;
        };
        return await JSON.parse(await response.text());
    } catch(error){
        console.error('request error',error);
        return null;
    };
};

