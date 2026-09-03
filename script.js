/* =========================================
   ANGOLAN SLANG DICTIONARY
   MAIN APPLICATION
========================================= */


/* =========================================
   APP STATE
========================================= */

const appState = {

    currentPage: "home",

    savedWords: JSON.parse(
        localStorage.getItem("savedWords")
    ) || [],

};


/* =========================================
   SAMPLE DICTIONARY DATA

   Temporary data only.
   The real dictionary will be added later.
========================================= */

const dictionaryWords = [

    {
        id: 1,
        word: "Kota",
        meaning: "A respectful term used to refer to an older person.",
        example: "O kota chegou cedo hoje.",
        alternatives: ["Cota"]
    },

    {
        id: 2,
        word: "Bazar",
        meaning: "To leave or go away.",
        example: "Já está tarde, vou bazar.",
        alternatives: []
    },

    {
        id: 3,
        word: "Mambo",
        meaning: "A thing, matter, situation, or issue.",
        example: "Qual é o mambo?",
        alternatives: []
    },

    {
        id: 4,
        word: "Kamba",
        meaning: "Friend or companion.",
        example: "Aquele é o meu kamba.",
        alternatives: []
    },

    {
        id: 5,
        word: "Puto",
        meaning: "A young person or child.",
        example: "O puto já chegou da escola.",
        alternatives: []
    },

    {
        id: 6,
        word: "Bwe",
        meaning: "A lot or very much.",
        example: "Hoje trabalhei bwe.",
        alternatives: []
    }

];


/* =========================================
   DAILY WORDS

   Temporary selection.
========================================= */

const dailyWords = [
    dictionaryWords[0],
    dictionaryWords[1],
    dictionaryWords[2]
];


/* =========================================
   PAGE ROUTER
========================================= */

function navigateTo(page) {

    appState.currentPage = page;

    updateNavigation();

    renderPage();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   UPDATE NAVIGATION
========================================= */

function updateNavigation() {

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {

        item.classList.remove("active");

        if (
            item.dataset.page ===
            appState.currentPage
        ) {

            item.classList.add("active");

        }

    });

}


/* =========================================
   RENDER PAGE
========================================= */

function renderPage() {

    const mainContent =
        document.getElementById("main-content");

    switch (appState.currentPage) {

        case "home":

            mainContent.innerHTML = renderHome();

            break;


        case "dictionary":

            mainContent.innerHTML =
                renderDictionary();

            break;


        case "search":

            mainContent.innerHTML =
                renderSearch();

            break;


        case "saved":

            mainContent.innerHTML =
                renderSaved();

            break;


        default:

            mainContent.innerHTML = renderHome();

    }

}


/* =========================================
   HOME PAGE
========================================= */

function renderHome() {

    return `

        <section class="home-page">

            <div class="hero">

                <p class="eyebrow">
                    DISCOVER ANGOLAN EXPRESSIONS
                </p>

                <h2>
                    The words.
                    <br>
                    The culture.
                    <br>
                    <span>The meaning.</span>
                </h2>

                <p class="hero-description">
                    Explore and discover the words,
                    expressions and slang that make
                    Angolan Portuguese unique.
                </p>

                <button
                    class="primary-button"
                    onclick="navigateTo('dictionary')"
                >
                    Explore Dictionary
                    <span>→</span>
                </button>

            </div>


            <section class="home-search">

                <div class="search-box">

                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search for a word..."
                        onclick="navigateTo('search')"
                    >

                </div>

            </section>


            <section class="daily-section">

                <div class="section-heading">

                    <div>

                        <p class="eyebrow">
                            DISCOVER TODAY
                        </p>

                        <h2>
                            3 Words of the Day
                        </h2>

                    </div>

                    <button
                        class="text-button"
                        onclick="navigateTo('daily')"
                    >
                        View all →
                    </button>

                </div>


                <div class="daily-grid">

                    ${dailyWords.map((item, index) => `

                        <article
                            class="daily-card
                            ${index === 1 ? "featured" : ""}"
                        >

                            <span class="daily-number">
                                0${index + 1}
                            </span>

                            <h3>
                                ${item.word}
                            </h3>

                            <p>
                                Do you know what it means?
                            </p>

                            <button
                                onclick="openWord(${item.id})"
                            >
                                Discover →
                            </button>

                        </article>

                    `).join("")}

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   PLACEHOLDER PAGES
========================================= */

function renderDictionary() {

    return `

        <section class="page">

            <p class="eyebrow">
                EXPLORE
            </p>

            <h2>
                Dictionary
            </h2>

            <p>
                The complete dictionary will
                appear here.
            </p>

        </section>

    `;

}


function renderSearch() {

    return `

        <section class="page">

            <p class="eyebrow">
                FIND A WORD
            </p>

            <h2>
                Search
            </h2>

            <p>
                Search functionality will
                appear here.
            </p>

        </section>

    `;

}


function renderSaved() {

    return `

        <section class="page">

            <p class="eyebrow">
                YOUR COLLECTION
            </p>

            <h2>
                Saved Words
            </h2>

            <p>
                Your favourite words will
                appear here.
            </p>

        </section>

    `;

}


/* =========================================
   OPEN WORD

   Temporary function.
========================================= */

function openWord(id) {

    const word =
        dictionaryWords.find(
            (item) => item.id === id
        );

    if (!word) return;

    alert(
        word.word +
        "\\n\\n" +
        word.meaning +
        "\\n\\nExample: " +
        word.example
    );

}


/* =========================================
   EVENT LISTENERS
========================================= */

document
    .querySelectorAll(".nav-item")
    .forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                navigateTo(
                    item.dataset.page
                );

            }
        );

    });


/* =========================================
   INITIALIZE APP
========================================= */

renderPage();
