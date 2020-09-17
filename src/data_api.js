
export const allEpisodesData = async () => {
    let arrayResultadoFinal = [];
    let url  = "https://rickandmortyapi.com/api/episode";

    do {
        let dataPackage = await fetch(url);
        let data = await dataPackage.json();
        arrayResultadoFinal = [ ...arrayResultadoFinal, ...data.results ] 
        url = data.info.next

    } while (url)
    return arrayResultadoFinal;
}

export const allLocationsData = async () => {
    let arrayResultadoFinal = [];
    let url  = "https://rickandmortyapi.com/api/location";

    do {
        let dataPackage = await fetch(url);
        let data = await dataPackage.json();
        arrayResultadoFinal = [ ...arrayResultadoFinal, ...data.results ] 
        url = data.info.next

    } while (url)
    return arrayResultadoFinal;
}