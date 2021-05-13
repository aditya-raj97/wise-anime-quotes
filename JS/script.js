const API = 'https://animechan.vercel.app/api/random';

async function fetcher(URL){

    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    assigner(data);

}

const assigner = (data) => {

    let quoteName = document.getElementById("quote");
    let quoteData = data.quote;

    let animeName = document.getElementById("anime");
    let animeData = data.anime;

    let characterName = document.getElementById("character");
    let charData = data.character;

    animeName.innerText = `Anime Name: ${animeData}`;
    quoteName.innerText = quoteData;
    characterName.innerText = `Character name: ${charData}`;

}

document.getElementById("clicker").addEventListener("click", () =>{
    fetcher(API);
})
