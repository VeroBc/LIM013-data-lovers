export const pullData = (url) => { 
    let promise = fetch(url)                          // Call the fetch function passing the url of the API as a parameter
                    .then(data => data.json())        // Transform the data into json
                    .catch(function() {               // This is where you run code if the server returns any errors
                    console.error("Something wrong");
                    });        
    return promise;
};