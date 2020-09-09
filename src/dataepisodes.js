
import episodesData from './data/rickandmorty/rickandmortyepisodes.js';

const allEpisodes = episodesData;

console.log(allEpisodes);


const getEpisodesArray = () => {
    let episodesList = [];
    allEpisodes.forEach(c => {
        if (!episodesList.includes(c.episodes))
        episodesList.push(c.episodes) 
    })
    return episodesList;
}    

console.log(getEpisodesArray);

export const filterByEpisodes = (character) => 
    allEpisodes.filter(c => c.character == "Rick Sanchez")



const searchBarEpisodes = document.getElementById('searchBarEpisodes');

searchBarEpisodes.addEventListener('keyup', (e) =>{
    const searchStringEpisodes = e.target.value.toLowerCase();
    const filteredEpisodes = allEpisodes.filter( episode => {
        return episode.name.toLowerCase().includes(searchStringEpisodes);
    });
    drawResults(filteredEpisodes);
});

