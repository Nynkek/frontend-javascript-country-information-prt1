import axios from 'axios';

let countryName = document.getElementById('country-name');

async function fetchCountry() {
    try {
        // het request maken
        const response = await axios.get("https://restcountries.com/v2/all");

        let resultLiArray = response.data.map((country) => {
            let countryClassColor = colorCountry(country);
            return `
            <li>
                <img src="${country.flags.png}" class="flag-img">
                <span class="${countryClassColor}">${country.name} </span>
                <br>
                Has a population of ${country.population.toLocaleString()} people.
            </li>`
        })
        const resultaatHTML = resultLiArray.join('');
        console.log(resultaatHTML);

        function colorCountry(country) {
            switch (country.region) {
                case 'Africa':
                    return "blauw";
                    break;
                case 'America':
                    return "groen";
                    break;
                case 'Asia':
                    return "rood";
                    break;
                case 'Europe':
                    return "geel";
                    break;
                case 'Oceania':
                    return "paars"
                    break;
                default:
                    return "overige";
            }
        }

        countryName.innerHTML = resultaatHTML;

    } catch (e) {
        // de errors
        console.error(e);
    }
}

fetchCountry();


