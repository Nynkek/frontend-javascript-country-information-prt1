import axios from 'axios';


const countryInfo = document.getElementById('country-info');
// const countryName = document.getElementById('countryName-input');
const search = document.getElementById('search-btn');
const form = document.getElementById('country-form');

async function fetchCountry(countryName) {
    try {
        // het request maken
        const response = await axios.get("https://restcountries.com/v2/name/" + countryName);
        console.log(response.data[0]);
        const {name, flags: {png}, subregion, population, capital, currencies, languages} = response.data[0];
        countryInfo.innerHTML = `<h2><img src="${png}" class="flag-img" alt="vlag van ${name}">${name}</h2><p>${name} is situated in ${subregion}. It has a population of ${population.toLocaleString('nl-NL')} people. <br>
        The capital is ${capital} and you can pay with ${currencies[0].name}'s.<br>
       They speak ${languages[0].name}</p>`;
    } catch (e) {
        // de errors
        console.error(e);
    }
}

// fetchCountry();

function searchCountry(event) {
    event.preventDefault()
    let countryName = document.getElementById('countryName-input').value;
    console.log(countryName + " naam")
    fetchCountry(countryName);
}

form.addEventListener('submit', searchCountry);
// search.addEventListener('click', searchCountry);

// countryName.addEventListener('keyup', function (event) {
//     if (event.code == 13) {
//         event.preventDefault();
//     }
// });


// maak een connectie met 1 land
// connect js naar html
// verwoord 1 land goed
// zorgt dat zoek zoekknop verbonden is met de api
// zorg dat in een variabele countryName de waarde van het zoekveld getoond wordt.
// hoe regel je meerdere currencies? if?
// geen resultaat? foutmelding



