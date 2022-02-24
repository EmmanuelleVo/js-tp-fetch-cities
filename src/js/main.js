const searchBar = {
    endpoint: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    suggestions: document.querySelector('.suggestions'),
    searchForm: document.querySelector('.search-form'),
    search: document.getElementById('search'),
    cities: [],

    fetchApi() {
        if (window.fetch) {
            fetch(this.endpoint)
                .then(response => {
                    if (response.status === 200) {
                        response.json().then(result => {
                            this.cities.push(...result) // évite d'écrire une boucle
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
    },

    addEventListener() {
        this.searchForm.addEventListener('submit', (e) => {
            e.preventDefault()
        })
        this.search.addEventListener('keyup', (e) => {

            if (e.currentTarget.value === '') {
                return this.suggestions.innerHTML = `<li>Filtrer pour une ville</li>
                    <li>Ou un état</li>`
            } else {
                this.displayMatches(e.currentTarget.value)
            }


        })
    },

    findMatches(wordToMatch) {
        return this.cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi') // pattern : le mot qu'on recherche
            return place.city.match(regex) || place.state.match(regex)
        })
    },

    numberWithSpace(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },

    displayMatches(wordToMatch) {
        this.suggestions.innerHTML = this.findMatches(wordToMatch).map(item => {
            const regex = new RegExp(wordToMatch, 'gi')
            return `<li>
                        <span class="name">
                            ${item.city.replace(regex, `<span class="hl">${wordToMatch}</span>`)},
                            ${item.state.replace(regex, `<span class="hl">${wordToMatch}</span>`)}
                        </span>
                        <span class="population">${this.numberWithSpace(item.population)}</span>
                    </li>`
        }).join('')
    },

    init() {
        this.fetchApi();
        this.addEventListener();
    }
}
searchBar.init();



