import axios from 'axios';


const countryInfo = document.getElementById('country-info');
const search = document.getElementById('search-btn');
const form = document.getElementById('country-form');

async function fetchCountry(event) {
    event.preventDefault();

    try {
        let countryName = document.getElementById('countryName-input').value;
        const response = await axios.get("https://restcountries.com/v2/name/" + countryName);
        const {name, flags: {png}, subregion, population, capital, currencies, languages} = response.data[0];
        console.log(currencies);
        let secondCurrency = '';
        if (Object.keys(currencies).length > 1) {
            secondCurrency = " and " + currencies[1].name;
        }


        countryInfo.innerHTML =
            `<h2><img src="${png}" class="flag-img" alt="vlag van ${name}">${name}</h2>
             <p>${name} is situated in ${subregion}. 
             It has a population of ${population.toLocaleString('nl-NL')} people. <br>
             The capital is ${capital} and you can pay with ${currencies[0].name}'s${secondCurrency}.<br>
             They speak ${languages[0].name}</p>
             `;
        form.reset();

    } catch (e) {
        console.error(e);
        countryInfo.innerHTML = `<p>Je hebt een verkeerde naam ingevoerd. <br>Probeer het nog eens met een andere spelling. Of met bijvoorbeeld: Nederland.</p>`;
    }
}


form.addEventListener('submit', fetchCountry);


// maak een connectie met 1 land
// connect js naar html
// verwoord 1 land goed
// zorgt dat zoek zoekknop verbonden is met de api
// zorg dat in een variabele countryName de waarde van het zoekveld getoond wordt.
// hoe regel je meerdere currencies? if?
// geen resultaat? foutmelding



