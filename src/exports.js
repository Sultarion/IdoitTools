export async function apirequest(middleurl, comment = 'Personal_script_test') {
    const url = `https://api.torn.com/v2/${middleurl}?comment=IT:${comment}`;
    console.log("Running Imported function api request Urlreq:");
    console.log(url);
    try {
        const response = await fetch(url, {headers: {
            "Authorization": `ApiKey ${localStorage.getItem("apikey")}`,
            "Accept": "application/json"    
        }})

        if (!response.ok){
            console.error("api request error", response.status);
            return null;
        };
        console.log(response)
        return await response.json();
    } catch(error){
        console.error('request error',error);
        return null;
    };
};

