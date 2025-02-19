import {sortData, filterData, calculateAvgScore} from './data.js';
import data from './data/ghibli/ghibli.js';

const keyframesContainer = document.getElementById("keyframesContainer");
const btnFilms = document.getElementById("btnFilms");
const btnFilmsAZ = document.getElementById("btnFilmsAZ");
const btnFilmsZA = document.getElementById("btnFilmsZA");
const btnCharacters = document.getElementById("btnCharacters");
const btnCharactersAZ = document.getElementById("btnCharactersAZ");
const btnCharactersZA = document.getElementById("btnCharactersZA");
const btnAbout = document.getElementById("btnAbout");
const btnSearchMenu = document.getElementById("btnSearchMenu");
const btnModalSearch = document.getElementById("btnModalSearch");
const closeModal = document.getElementsByClassName("closeModal")[0];
const cardsContainer = document.getElementById("boxCards");
const modalArea = document.getElementById("modalArea");
const searchResultContainer = document.getElementById("searchResultContainer");
const logo = document.getElementById("logo-container");

const clean = () => {
    cardsContainer.innerHTML = "";
    keyframesContainer.style.animation = "none";
    logo.innerHTML = "";
}

const cleanSearch = () => {
    searchResultContainer.innerHTML = "";
}

const getFilms = data.films

function getPeople() {
    let people = [];
    for (let film of getFilms
    ) {
        for (let char of film.people) {
            char['title'] = film['title']
            people.push(char)
        }
    }
    return people
}

const printCardsFilms = (listaFilmes) => {
    clean()
    listaFilmes.forEach(film => {
        cardsContainer.innerHTML += `
        <div class="filmCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="filmPoster" src= ${film.poster}>
                </div>
                <div class="backCard">
                    <h3 class="film-title"> ${film.title}
                    <div class="film-score"> ${film.rt_score}</div> 
                    </h3> 
                    <br>
                    <div class="film-infos">
                        <p> <b>Diretor:</b> ${film.director} </p>
                        <p> <b>Produtor:</b> ${film.producer} </p>
                        <p> <b>Ano de Lançamento:</b> ${film.release_date} </p>
                        <p><b> Sinopse</b>: ${film.description} </p>      
                    </div>          
                </div>
            </div>
        </div>`
    })
}

const printCardsCharacters = (listaPersonagens) => {
    clean()
    listaPersonagens.map(people => {
        cardsContainer.innerHTML += `
        <div class="characterCard">
            <div class="flipper">
                <div class="frontCard"> 
                    <img class="characterPoster" src="${people.img}">
                </div>
                <div class="backCard">
                    <h3 class="film-title"> ${people.name}</h3> <br>
                    <div class="film-infos">
                        <p> <b>Gender:</b> ${people.gender} </p>
                        <p> <b>Age:</b> ${people.age} </p>
                        <p> <b>Specie:</b> ${people.specie} </p>
                        <p> <b>Film:</b> ${people.title}  </p>
                    </div>
                </div>
            </div>
        </div>`
    })
}

function printAvgScore(){
    const avgScore = calculateAvgScore(getFilms)
    cardsContainer.innerHTML += `
        <div class="aboutCardAvg">
            <div class="flipper">
                <div class="frontCard"> 
                    <h3 class="avg-front">Find out the average score given to Studio Ghibli movies</h3>
                </div>
                <div class="backCard">
                    <h3 class="avg-score-back"> ${avgScore}</h3> <br>
                </div>
            </div>
        </div>`
}

function printCardsAbout(){
    cardsContainer.innerHTML += `
    <div class="aboutCard">
        <div class="flipper">
            <div class="frontCard"> 
                <h3 class="card-about-title"></h3>
                <img class="img-card-about" src="./images/ghibli-logo.png">
            </div>
            <div class="backCard">
                <div class="card-about"> <p> <b>Studio Ghibli, Inc.</b>, known simply as Ghibli, is a Japanese animation film studio headquartered 
                in Koganei, Tokyo. They were founded by Isao Takahata, Hayao Miyazaki, Toshio Suzuki, and Yasuyoshi Tokuma. </p>

                <p>The company began operations in June 1985 as a subsidiary of Tokuma Shoten Co., Ltd. for the purpose of producing 
                animated films directed by Isao Takahata and Hayao Miyazaki. Initially based in Kichijōji, they moved to Kajino-cho, 
                Koganei in August 1992. In June 1997, the company merged with Tokuma Shoten Co., Ltd. and became Tokuma Shoten Co., 
                Ltd./Studio Ghibli Company (later Studio Ghibli Business Headquarters). In April 2005, Studio Ghibli Co., Ltd. 
                became independent from Tokuma Shoten.  </p>
                
                <p> The company's logo features the character Totoro from Hayao Miyazaki's film My Neighbor Totoro. </p>
                
                <p>Several anime features created by Ghibli have won the Animage Anime Grand Prix Award including Castle in the Sky in 1986, 
                My Neighbor Totoro in 1988, and Kiki's Delivery Service in 1989. In 2002, Spirited Away won an Oscar for Best Animated 
                Feature, the first anime film to win an Academy Award. </p>
                </div>
            </div>
        </div>
    </div>`
}


btnFilms.addEventListener("click", () => {
    clean()
    cleanSearch()
    printCardsFilms(getFilms)
})

btnFilmsAZ.addEventListener("click", () => {
    clean()
    cleanSearch()
    const filmsOrder = sortData(data.films, ["title"], "asc")
    printCardsFilms(filmsOrder)
})

btnFilmsZA.addEventListener("click", () => {
    clean()
    cleanSearch()
    const filmsOrder = sortData(data.films, ["title"], "desc")
    printCardsFilms(filmsOrder)
})

btnCharacters.addEventListener("click", () => {
    clean()
    cleanSearch()
    const menuCharacters = getPeople()
    printCardsCharacters(menuCharacters)
})

btnCharactersAZ.addEventListener("click", () => {
    clean()
    cleanSearch()
    const CharacterOrder = sortData(getPeople(), ["name"], "asc")
    printCardsCharacters(CharacterOrder)
})

btnCharactersZA.addEventListener("click", () => {
    clean()
    cleanSearch()
    const CharacterOrder = sortData(getPeople(), ["name"], "desc")
    printCardsCharacters(CharacterOrder)
})

btnAbout.addEventListener("click", () => {
    clean()
    cleanSearch()
    printCardsAbout()
    printAvgScore()
})


btnModalSearch.addEventListener("click", () => {
    const stringSearch = document.getElementById("modal-textarea").value.toLowerCase();
    const SearchResult = filterData(getFilms, stringSearch)
    searchResultContainer.innerHTML = `<h3 class="searchResult"> Search results for '${stringSearch}': </h3>`
    printCardsFilms(SearchResult)
})


btnSearchMenu.onclick = function () {
    clean()
    modalArea.style.display = "block";
}

closeModal.onclick = function () {
    modalArea.style.display = "none";
}

btnModalSearch.onclick = function () {
    modalArea.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalArea) {
        modalArea.style.display = "none";
    }
}
