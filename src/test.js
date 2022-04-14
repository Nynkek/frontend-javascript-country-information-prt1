const data = [
    '1',
    '2',
    '3'
];
const response = {"data": data};

// Functie om kleur klasse van country op te halen op basis van country.region
function getCountryColor(country) {
    switch (country.region) {
        case 'Africa':
            return "blauw";
            break;
    }
}

// Zoek element op met id "countryStuff"
const countryName = document.getElementById("countryStuff");

// Voorbeeld for-loop om door response te lussen
for (let i = 0; i < response.data.length; i++) {
    // country op de index van response data
    const country = response.data[i];

    // Haal kleur van country op
    let countryColorClass = getCountryColor(country);
    // Voeg resultaat toe aan innerHTML
    countryName.innerHTML += `<li>${country.name}</li>`
}



// Voorbeeld map in plaats van for-loop, resulteert in lijst met <li>-tags
let resultLiArray = response.data.map((country) => {
    // Haal kleur van country op
    let countryColorClass = getCountryColor(country);

    // Return li-element zodat die in de array wordt gezet
    return `<li>
                <img src="${country.flags.png}" class="flag-img">
                <span class="${countryColorClass}">${country.name} </span>
                <br>
                Has a population of ${country.population} people.
            </li>`;
})

let voorbeeldResultaat = [
    '<li>1</li>',
    '<li>2</li>',
    '<li>3</li>'
];

// Maak één lange string van de array met li-elementen
const resultaatHTML = resultLiArray.join('');

let joinedResultaatVoorbeeld = '<li>1</li><li>2</li><li>3</li>';
// Zet de lange string in de innerHTML van countryName
countryName.innerHTML = resultaatHTML;