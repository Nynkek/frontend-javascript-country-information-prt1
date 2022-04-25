import axios from 'axios';

const countryInfo = document.getElementById('country-info');
const form = document.getElementById('country-form');

async function fetchCountry(event) {
    event.preventDefault();

    try {
        let countryName = document.getElementById('countryName-input').value;
        const response = await axios.get("https://restcountries.com/v2/name/" + countryName);
        const {name, flags: {png}, subregion, population, capital, currencies, languages} = response.data[0];

        let secondCurrency = '';
        if (Object.keys(currencies).length > 1) {
            secondCurrency = " and " + currencies[1].name + " (" + currencies[1].symbol + ")";
        }

        let allLanguagesArray = [];
        for (let i = 0; i < Object.keys(languages).length; i++) {
            allLanguagesArray.push(languages[i].name);
        }

        let allLanguages;
        if (allLanguagesArray.length > 1) {
            let lastLanguageInList = allLanguagesArray.pop();
            allLanguages = allLanguagesArray.join(', ') + " and " + lastLanguageInList;
        } else {
            allLanguages = allLanguagesArray;
        }

        countryInfo.innerHTML =
            `<h2><img src="${png}" class="flag-img" alt="vlag van ${name}">${name}</h2>
             <p>${name} is situated in ${subregion}. 
             It has a population of ${population.toLocaleString('nl-NL')} people. <br>
             The capital is <strong>${capital}</strong> and you can pay with ${currencies[0].name}'s (${currencies[0].symbol})${secondCurrency}.<br>
             They speak ${allLanguages}.</p>
             `;
        form.reset();

    } catch (e) {
        console.error(e);
        countryInfo.innerHTML = `<p>Je hebt een verkeerde naam ingevoerd. 
        <br>Probeer het nog eens met een andere spelling. Of met bijvoorbeeld: Nederland, Cyprus, Djibouti of Panama.</p>`;
    }
}


form.addEventListener('submit', fetchCountry);



