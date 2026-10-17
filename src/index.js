//low kirkentually have no idea what to put in here
const apikeyfield = document.getElementById("Apikey");
const apikeybutton = document.getElementById("Apikeybutton");
const apireturn = document.getElementById("Apikeyresult");

apikeybutton.addEventListener("click",() => {
    let apikey = apikeyfield.value;
    if (apikey === "" || !(apikey.length == 16)){
        apikey = "";
        apireturn.textContent = "Invalid API Key, please enter a valid key";
    } else {
        console.log("Api key entered");
        apireturn.textContent = "Entered hopefully valid API Key"
    };

});