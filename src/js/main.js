const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const suggestions = document.querySelector('.suggestions');
const searchForm = document.querySelector('.search-form');
const search = document.getElementById('search');
const cities = []

if(window.fetch) {
    fetch(endpoint)
        .then(response => {
            if(response.status === 200) {
                response.json().then(result => {
                    cities.push(...result) // évite d'écrire une boucle
                })
            } else {
                console.error(`Oops ! ${response.status}`)
            }
        })
        .catch(error => {
            console.log(`Ouch ! ${error}`)
        })
} else {
 //
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
})
search.addEventListener('keyup', (e) => {
    displayMatches(e.currentTarget.value) // TODO vide
})

function findMatches(wordToMatch) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi') // pattern : le mot qu'on recherche
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function displayMatches(wordToMatch) {
    suggestions.innerHTML = findMatches(wordToMatch).map(item => {
        const regex = new RegExp(wordToMatch, 'gi')
        return `<li>
                    <span class="name">
                        ${item.city.replace(regex,`<span class="hl">${wordToMatch}</span>`)},
                        ${item.state.replace(regex, `<span class="hl">${wordToMatch}</span>`)}
                    </span>
                    <span class="population">${numberWithSpace(item.population)}</span>
                </li>`
    }).join('')
}

