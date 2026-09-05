/* ========================================= ANGOLAN SLANG DICTIONARY MAIN APPLICATION ========================================= */
/* ========================================= APP STATE ========================================= */
/* =========================================
   SUPABASE CONFIGURATION
========================================= */

const SUPABASE_URL =
    "https://kesrtifdzptnhpwmwlzu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_DnY0DdakuwqW5WsE344j3A_49gpXc0y";


const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
const appState = {
    currentPage: "home",

    previousPage: "home",

    words: [],

    savedWords: JSON.parse(
        localStorage.getItem(
            "angolanSlangSavedWords"
        )
    ) || [],
};
/* ========================================= DICTIONARY DATA
TEMPORARY DATA STRUCTURE
Later this can be replaced with:
Supabase ↓ loadWords() ↓ App ========================================= */
const demoWords = [
{
    id: 1,
    word: "Kota",
    category: "People",
    region: "Angola",
    meaning:
        "An older person, often used as a respectful or friendly way to refer to someone older.",

    example:
        "O kota chegou cedo hoje.",

    translation:
        "The older guy arrived early today.",

    culturalExplanation:
        "In Angola, kota is commonly used to refer to an older person. Depending on the context, it can express respect, familiarity or friendship.",

    alternatives: [
        "Mais velho",
        "Mano"
    ],

    audio: null,

    isPremium: false
},

{
    id: 2,
    word: "Bazar",
    category: "Slang",
    region: "Luanda",
    meaning:
        "To talk a lot, chat or spend time talking.",

    example:
        "Esses manos ficam o dia todo a bazar.",

    translation:
        "Those guys spend the whole day chatting.",

    culturalExplanation:
        "Bazar is a commonly used informal expression in Angolan Portuguese. Its meaning can change slightly depending on context.",

    alternatives: [
        "Conversar",
        "Falar"
    ],

    audio: null,

    isPremium: false
},

{
    id: 3,
    word: "Mambo",
    category: "Expressions",
    region: "Angola",
    meaning:
        "A thing, situation or matter. The exact meaning often depends on the context.",

    example:
        "Qual é o mambo?",

    translation:
        "What's going on?",

    culturalExplanation:
        "Mambo is a very flexible word in Angolan everyday speech and can refer to many different things depending on the situation.",

    alternatives: [
        "Coisa",
        "Assunto",
        "Situação"
    ],

    audio: null,

    isPremium: false
},

{
    id: 4,
    word: "Candengue",
    category: "People",
    region: "Angola",
    meaning:
        "A child or young person.",

    example:
        "Os candengues estão a brincar.",

    translation:
        "The children are playing.",

    culturalExplanation:
        "Candengue is widely used in Angola to refer to a child or young person.",

    alternatives: [
        "Criança",
        "Miúdo"
    ],

    audio: null,

    isPremium: false
},

{
    id: 5,
    word: "Maka",
    category: "Expressions",
    region: "Angola",
    meaning:
        "A problem, issue, argument or complicated situation.",

    example:
        "Não quero maka com ninguém.",

    translation:
        "I don't want any problems with anyone.",

    culturalExplanation:
        "Maka is one of the most recognisable expressions in Angolan Portuguese and is commonly used when talking about problems or disputes.",

    alternatives: [
        "Problema",
        "Confusão"
    ],

    audio: null,

    isPremium: false
},

{
    id: 6,
    word: "Bazuka",
    category: "Slang",
    region: "Luanda",
    meaning:
        "A demonstration dictionary entry reserved for premium content.",

    example:
        "Example sentence coming soon.",

    translation:
        "Translation coming soon.",

    culturalExplanation:
        "This entry demonstrates how premium content can later appear inside the dictionary.",

    alternatives: [],

    audio: null,

    isPremium: true
}
];
/* ========================================= DAILY WORDS ========================================= */
const dailyWords = [
demoWords[0],

demoWords[1],

demoWords[2]
];
/* ========================================= NAVIGATION ========================================= */
function navigateTo(page) {
appState.previousPage =
    appState.currentPage;

appState.currentPage = page;

closeMenu();

updateNavigation();

renderPage();

window.scrollTo({

    top: 0,

    behavior: "smooth"

});
}
/* ========================================= UPDATE NAVIGATION ========================================= */
function updateNavigation() {
const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


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
/* ========================================= PAGE ROUTER ========================================= */
function renderPage() {
const mainContent =
    document.getElementById(
        "main-content"
    );


switch (
    appState.currentPage
) {

    case "home":

        mainContent.innerHTML =
            renderHome();

        break;


    case "dictionary":

        mainContent.innerHTML =
            renderDictionary();

        break;


    case "search":

        mainContent.innerHTML =
            renderSearchPage();

        break;


    case "saved":

        mainContent.innerHTML =
            renderSavedPage();

        break;


    case "daily":

        mainContent.innerHTML =
            renderDailyPage();

        break;


    case "updates":

        mainContent.innerHTML =
            renderUpdates();

        break;


    case "about":

        mainContent.innerHTML =
            renderAbout();

        break;


    case "settings":

        mainContent.innerHTML =
            renderComingSoon(
                "Settings",
                "Personalisation and application settings will appear here."
            );

        break;


    default:

        mainContent.innerHTML =
            renderHome();

}
}
/* ========================================= HOME PAGE ========================================= */
function renderHome() {
return `

    <section class="home-page">

        <section class="hero">

            <p class="eyebrow">
                ANGOLA IN WORDS
            </p>


            <h2>

                The words.

                <br>

                The culture.

                <br>

                <span>
                    The meaning.
                </span>

            </h2>


            <p class="hero-description">

                Discover the expressions,
                slang and everyday language
                that bring Angolan culture
                to life.

            </p>


            <button
                class="primary-button"
                type="button"
                onclick="navigateTo('dictionary')"
            >

                Explore Dictionary

                <span>
                    →
                </span>

            </button>

        </section>


        <section class="home-search">

            <div
                class="search-box"
                onclick="navigateTo('search')"
            >

                <span>
                    ⌕
                </span>


                <input
                    type="text"
                    placeholder="Search for a word..."
                    readonly
                    aria-label="Search dictionary"
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
                    type="button"
                    onclick="navigateTo('daily')"
                >
                    View all →
                </button>

            </div>


            <div class="daily-slider">

                <div class="daily-slider-track">

                    ${dailyWords.map(
                        (item, index) => `

                        <article class="daily-slide">

                            <div class="daily-card">

                                <span class="daily-number">

                                    ${String(index + 1).padStart(2, "0")} / 03

                                </span>

                                <h3>

                                    ${item.word}

                                </h3>

                                <p>

                                    Discover today's word.

                                </p>

                                <button
                                    type="button"
                                    onclick="openWord(${item.id})"
                                >

                                    Discover →

                                </button>

                            </div>

                        </article>

                    `
                    ).join("")}

                </div>

            </div>


            <div class="slider-dots">

                ${dailyWords.map(
                    (_, index) => `

                    <button
                        class="slider-dot ${index === 0 ? "active" : ""}"
                        type="button"
                        aria-label="Go to word ${index + 1}"
                    ></button>

                `
                ).join("")}

            </div>

        </section>

    </section>

`;
}
/* ========================================= DICTIONARY PAGE ========================================= */
function renderDictionary() {
const sortedWords =
    [...demoWords].sort(
        (a, b) =>
            a.word.localeCompare(
                b.word
            )
    );


const categories =
    [
        "All",
        ...new Set(
            demoWords.map(
                item => item.category
            )
        )
    ];


return `

    <section class="dictionary-page">

        <div class="dictionary-header">

            <p class="eyebrow">
                EXPLORE THE LANGUAGE
            </p>


            <h1>
                Dictionary
            </h1>


            <p class="dictionary-description">

                Discover Angolan slang,
                expressions and everyday words.

            </p>

        </div>


        <div class="dictionary-search">

            <div class="search-box">

                <span>
                    ⌕
                </span>


                <input
                    id="dictionary-search-input"
                    type="search"
                    placeholder="Search the dictionary..."
                    autocomplete="off"
                    aria-label="Search dictionary"
                >

            </div>

        </div>


        <div
            class="category-filters"
            id="category-filters"
        >

            ${categories.map(
                category => `

                <button
                    class="category-filter ${category === "All" ? "active" : ""}"
                    type="button"
                    data-category="${category}"
                >

                    ${category}

                </button>

            `
            ).join("")}

        </div>


        <div class="dictionary-results-header">

            <p id="dictionary-count">

                ${sortedWords.length} words

            </p>


            <span>
                A–Z
            </span>

        </div>


        <div
            class="dictionary-list"
            id="dictionary-list"
        >

            ${renderDictionaryWords(
                sortedWords
            )}

        </div>

    </section>

`;
}
/* ========================================= DICTIONARY WORD LIST ========================================= */
function renderDictionaryWords(words) {
if (words.length === 0) {

    return `

        <div class="empty-state">

            <div class="empty-state-icon">
                ⌕
            </div>

            <h3>
                No words found
            </h3>

            <p>
                Try searching for another
                word or expression.
            </p>

        </div>

    `;

}


return words.map(
    (item, index) => {

        const previousLetter =
            index > 0
                ? words[index - 1]
                    .word
                    .charAt(0)
                    .toUpperCase()
                : null;


        const currentLetter =
            item.word
                .charAt(0)
                .toUpperCase();


        const showLetter =
            currentLetter !==
            previousLetter;


        return `

            ${showLetter ? `

                <div class="dictionary-letter">

                    ${currentLetter}

                </div>

            ` : ""}


            <button
                class="dictionary-word-card"
                type="button"
                onclick="openWord(${item.id})"
            >

                <div class="dictionary-word-main">

                    <div>

                        <div class="dictionary-word-title">

                            <h3>

                                ${item.word}

                            </h3>


                            ${item.isPremium ? `

                                <span class="premium-lock">
                                    🔒
                                </span>

                            ` : ""}

                        </div>


                        <p>

                            ${item.meaning}

                        </p>

                    </div>

                </div>


                <div class="dictionary-word-meta">

                    <span>
                        ${item.category}
                    </span>


                    <span class="dictionary-arrow">
                        →
                    </span>

                </div>

            </button>

        `;

    }
).join("");
}
/* ========================================= DICTIONARY FILTERING ========================================= */
function setupDictionaryFilters() {
const searchInput =
    document.getElementById(
        "dictionary-search-input"
    );


const filterButtons =
    document.querySelectorAll(
        ".category-filter"
    );


let activeCategory = "All";


function updateResults() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    let filteredWords =
        demoWords.filter(
            item => {

                const matchesCategory =
                    activeCategory === "All" ||
                    item.category ===
                    activeCategory;


                const searchableText =
                    `
                        ${item.word}
                        ${item.meaning}
                        ${item.example}
                        ${item.category}
                    `.toLowerCase();


                const matchesSearch =
                    searchableText.includes(
                        query
                    );


                return (
                    matchesCategory &&
                    matchesSearch
                );

            }
        );


    filteredWords =
        [...filteredWords].sort(
            (a, b) =>
                a.word.localeCompare(
                    b.word
                )
        );


    document.getElementById(
        "dictionary-list"
    ).innerHTML =
        renderDictionaryWords(
            filteredWords
        );


    document.getElementById(
        "dictionary-count"
    ).textContent =
        `${filteredWords.length} ${
            filteredWords.length === 1
                ? "word"
                : "words"
        }`;

}


searchInput.addEventListener(
    "input",
    updateResults
);


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                activeCategory =
                    button.dataset.category;


                filterButtons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                updateResults();

            }
        );

    }
);
}
/* ========================================= SEARCH PAGE ========================================= */
function renderSearchPage() {
return `

    <section class="search-page">

        <p class="eyebrow">
            FIND A WORD
        </p>


        <h1>
            Search
        </h1>


        <div class="search-page-box">

            <div class="search-box">

                <span>
                    ⌕
                </span>


                <input
                    id="global-search-input"
                    type="search"
                    placeholder="Search words or meanings..."
                    autocomplete="off"
                    autofocus
                >

            </div>

        </div>


        <div
            class="search-results"
            id="search-results"
        >

            <div class="search-empty-message">

                Start typing to search
                the dictionary.

            </div>

        </div>

    </section>

`;
}
/* ========================================= GLOBAL SEARCH ========================================= */
function setupGlobalSearch() {
const searchInput =
    document.getElementById(
        "global-search-input"
    );


const results =
    document.getElementById(
        "search-results"
    );


if (!searchInput || !results) {

    return;

}


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!query) {

            results.innerHTML = `

                <div class="search-empty-message">

                    Start typing to search
                    the dictionary.

                </div>

            `;

            return;

        }


        const filteredWords =
            demoWords.filter(
                item => {

                    const searchableText =
                        `
                            ${item.word}
                            ${item.meaning}
                            ${item.example}
                            ${item.category}
                            ${item.alternatives.join(" ")}
                        `.toLowerCase();


                    return searchableText.includes(
                        query
                    );

                }
            );


        results.innerHTML =
            renderSearchResults

   filteredWords
            );

    }
);
}
/* ========================================= SEARCH RESULTS ========================================= */
function renderSearchResults(words) {
if (words.length === 0) {

    return `

        <div class="empty-state">

            <div class="empty-state-icon">
                ?
            </div>

            <h3>
                We couldn't find that word
            </h3>

            <p>
                Try another spelling or
                search term.
            </p>

        </div>

    `;

}


return words.map(
    item => `

        <button
            class="dictionary-word-card"
            type="button"
            onclick="openWord(${item.id})"
        >

            <div class="dictionary-word-main">

                <div>

                    <div class="dictionary-word-title">

                        <h3>
                            ${item.word}
                        </h3>


                        ${item.isPremium ? `

                            <span class="premium-lock">
                                🔒
                            </span>

                        ` : ""}

                    </div>


                    <p>
                        ${item.meaning}
                    </p>

                </div>

            </div>


            <div class="dictionary-word-meta">

                <span>
                    ${item.category}
                </span>


                <span class="dictionary-arrow">
                    →
                </span>

            </div>

        </button>

    `
).join("");
}
/* ========================================= WORD DETAIL ========================================= */
function openWord(id) {
const word =
    demoWords.find(
        item => item.id === id
    );


if (!word) {

    return;

}


appState.previousPage =
    appState.currentPage;


const mainContent =
    document.getElementById(
        "main-content"
    );


const isSaved =
    appState.savedWords.includes(
        word.id
    );


mainContent.innerHTML = `

    <section class="word-detail-page">

        <div class="word-detail">


            <button
                class="text-button"
                type="button"
                onclick="goBack()"
            >

                ← Back

            </button>


            <header
                class="word-detail-header"
            >

                <p class="eyebrow">

                    ${word.isPremium
                        ? "PREMIUM WORD"
                        : "ANGOLAN WORD"
                    }

                </p>


                <div class="word-title-row">

                    <h1>
                        ${word.word}
                    </h1>


                    ${word.audio ? `

                        <button
                            class="word-audio-button"
                            type="button"
                            onclick="playWordAudio(
                                '${word.audio}'
                            )"
                            aria-label="Play pronunciation"
                        >
                            🔊
                        </button>

                    ` : `

                        <button
                            class="word-audio-button"
                            type="button"
                            disabled
                            aria-label="Audio not available"
                        >
                            🔊
                        </button>

                    `}

                </div>


                <div class="word-meta">

                    <span>
                        ${word.category}
                    </span>


                    <span>
                        📍 ${word.region}
                    </span>

                </div>

            </header>


            <section
                class="word-detail-section"
            >

                <p class="detail-label">
                    DEFINITION
                </p>


                <p class="word-meaning">

                    ${word.meaning}

                </p>

            </section>


            <section
                class="word-detail-section"
            >

                <p class="detail-label">
                    EXAMPLE
                </p>


                <div class="word-example">

                    <p
                        class="example-original"
                    >

                        “${word.example}”

                    </p>


                    <p
                        class="example-translation"
                    >

                        ${word.translation}

                    </p>

                </div>

            </section>


            <section
                class="word-detail-section"
            >

                <p class="detail-label">
                    CULTURAL CONTEXT
                </p>


                <p class="word-secondary">

                    ${word.culturalExplanation}

                </p>

            </section>


            ${word.alternatives.length > 0 ? `

                <section
                    class="word-detail-section"
                >

                    <p class="detail-label">
                        RELATED WORDS
                    </p>


                    <div
                        class="word-alternatives"
                    >

                        ${word.alternatives.map(
                            alternative => `

                            <span>
                                ${alternative}
                            </span>

                        `
                        ).join("")}

                    </div>

                </section>

            ` : ""}


            <button
                class="primary-button word-save-button ${isSaved ? "saved" : ""}"
                type="button"
                onclick="toggleSavedWord(
                    ${word.id}
                )"
            >

                <span>
                    ${isSaved
                        ? "♥"
                        : "♡"
                    }
                </span>

                ${isSaved
                    ? "Saved"
                    : "Save word"
                }

            </button>

        </div>

    </section>

`;


updateNavigation();


window.scrollTo({

    top: 0,

    behavior: "smooth"

});
}
/* ========================================= BACK NAVIGATION ========================================= */
function goBack() {
const previousPage =
    appState.previousPage ||
    "home";


appState.currentPage =
    previousPage;


updateNavigation();

renderPage();


window.scrollTo({

    top: 0,

    behavior: "smooth"

});
}
/* ========================================= SAVE WORD ========================================= */
function toggleSavedWord(id) {
const index =
    appState.savedWords.indexOf(
        id
    );


if (index === -1) {

    appState.savedWords.push(
        id
    );

} else {

    appState.savedWords.splice(
        index,
        1
    );

}


localStorage.setItem(
    "angolanSlangSavedWords",
    JSON.stringify(
        appState.savedWords
    )
);


openWord(id);
}
/* ========================================= SAVED WORDS PAGE ========================================= */
function renderSavedPage() {
const savedWords =
    demoWords.filter(
        item =>
            appState.savedWords.includes(
                item.id
            )
    );


return `

    <section class="saved-page">

        <p class="eyebrow">
            YOUR COLLECTION
        </p>


        <h1>
            Saved Words
        </h1>


        <p class="dictionary-description">

            Your favourite Angolan words
            and expressions.

        </p>


        <div
            class="saved-words-list"
        >

            ${savedWords.length > 0

                ? renderSearchResults(
                    savedWords
                )

                : `

                    <div
                        class="empty-state"
                    >

                        <div
                            class="empty-state-icon"
                        >
                            ♡
                        </div>


                        <h3>
                            No saved words yet
                        </h3>


                        <p>
                            Save words you want
                            to remember and they
                            will appear here.
                        </p>

                    </div>

                `
            }

        </div>

    </section>

`;
}
/* ========================================= DAILY PAGE ========================================= */
function renderDailyPage() {
return `

    <section class="home-page">

        <p class="eyebrow">
            TODAY'S DISCOVERY
        </p>


        <h2
            style="
                font-size: clamp(42px, 7vw, 64px);
                letter-spacing: -2px;
            "
        >
            3 Words of the Day
        </h2>


        <div
            class="daily-grid"
            style="
                margin-top: 30px;
            "
        >

            ${dailyWords.map(
                (item, index) => `

                <article class="daily-card">

                    <span class="daily-number">

                        0${index + 1}

                    </span>


                    <h3>

                        ${item.word}

                    </h3>


                    <p>

                        Discover today's word.

                    </p>


                    <button
                        type="button"
                        onclick="openWord(${item.id})"
                    >

                        Discover →

                    </button>

                </article>

            `
            ).join("")}

        </div>

    </section>

`;
}
/* ========================================= AUDIO ========================================= */
function playWordAudio(audioUrl) {
if (!audioUrl) {

    return;

}


const audio =
    new Audio(audioUrl);


audio.play();
}
/* ========================================= UPDATES PAGE ========================================= */
function renderUpdates() {
return `

    <section class="home-page">

        <p class="eyebrow">
            WHAT'S NEW
        </p>


        <h2
            style="
                font-size: clamp(42px, 7vw, 64px);
                letter-spacing: -2px;
            "
        >
            Updates
        </h2>


        <div
            class="hero"
            style="
                margin-top: 30px;
            "
        >

            <p class="eyebrow">

                COMING SOON

            </p>


            <h3
                style="
                    font-size: 28px;
                "
            >

                New update

            </h3>


            <p class="hero-description">

                A new dictionary update
                will be announced here.

            </p>

        </div>

    </section>

`;
}
/* ========================================= ABOUT PAGE ========================================= */
function renderAbout() {
return `

    <section class="home-page">

        <p class="eyebrow">
            THE PROJECT
        </p>


        <h2
            style="
                font-size: clamp(42px, 7vw, 64px);
                letter-spacing: -2px;
            "
        >
            About
        </h2>


        <div
            class="hero"
            style="
                margin-top: 30px;
            "
        >

            <h3
                style="
                    font-size: 30px;
                "
            >

                Angolan Slang Dictionary

            </h3>


            <p class="hero-description">

                A digital dictionary designed
                to preserve, explore and share
                Angolan slang, expressions
                and everyday language.

            </p>

        </div>

    </section>

`;
}
/* ========================================= GENERIC PLACEHOLDER PAGE ========================================= */
function renderComingSoon( title, description ) {
return `

    <section class="home-page">

        <div class="hero">

            <p class="eyebrow">
                UNDER DEVELOPMENT
            </p>


            <h2>

                ${title}

            </h2>


            <p class="hero-description">

                ${description}

            </p>

        </div>

    </section>

`;
}
/* ========================================= PAGE SETUP ========================================= */
function setupCurrentPage() {
if (
    appState.currentPage ===
    "dictionary"
) {

    setupDictionaryFilters();

}


if (
    appState.currentPage ===
    "search"
) {

    setupGlobalSearch();

}
}
/* ========================================= MENU ========================================= */
const menuButton = document.getElementById( "menu-button" );
const closeMenuButton = document.getElementById( "close-menu" );
const sideMenu = document.getElementById( "side-menu" );
const menuOverlay = document.getElementById( "menu-overlay" );
function openMenu() {
sideMenu.classList.add("open");

menuOverlay.classList.add("open");
}
function closeMenu() {
sideMenu.classList.remove("open");

menuOverlay.classList.remove("open");
}
menuButton.addEventListener( "click", openMenu );
closeMenuButton.addEventListener( "click", closeMenu );
menuOverlay.addEventListener( "click", closeMenu );
/* ========================================= BOTTOM NAVIGATION ========================================= */
document .querySelectorAll( ".nav-item" ) .forEach( item => {
item.addEventListener(
            "click",
            () => {

                navigateTo(
                    item.dataset.page
                );

            }
        );

    }
);
/* ========================================= DAILY SLIDER ========================================= */
document.addEventListener( "scroll", () => {
const slider =
        document.querySelector(
            ".daily-slider"
        );


    if (!slider) {

        return;

    }


    const slideWidth =
        slider.clientWidth;


    const currentIndex =
        Math.round(
            slider.scrollLeft /
            slideWidth
        );


    const dots =
        document.querySelectorAll(
            ".slider-dot"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        }
    );

},
true
);
/* ========================================= RENDER WRAPPER ========================================= */
const originalRenderPage = renderPage;
renderPage = function() {
originalRenderPage();

setupCurrentPage();
};
/* ========================================= INITIALIZE APPLICATION ========================================= */
renderPage();
Now add this at the very bottom of your existing style.css. Do not remove your current CSS.
Writing
/* ========================================= PHASE 2 — DICTIONARY ========================================= */
.dictionary-page, .search-page, .saved-page {
max-width: 760px;

margin: 0 auto;

padding:
    25px
    0
    120px;
}
/* ========================================= DICTIONARY HEADER ========================================= */
.dictionary-header h1, .search-page h1, .saved-page h1 {
margin-top: 8px;

font-size:
    clamp(48px, 8vw, 72px);

line-height: 1;

letter-spacing: -3px;
}
.dictionary-description {
max-width: 540px;

margin-top: 18px;

color: var(--text-secondary);

font-size: 16px;

line-height: 1.7;
}
/* ========================================= DICTIONARY SEARCH ========================================= */
.dictionary-search {
margin-top: 32px;
}
/* ========================================= CATEGORY FILTERS ========================================= */
.category-filters {
display: flex;

gap: 10px;

margin-top: 22px;

padding-bottom: 8px;

overflow-x: auto;

scrollbar-width: none;
}
.category-filters::-webkit-scrollbar {
display: none;
}
.category-filter {
flex-shrink: 0;

padding:
    10px
    16px;

background: var(--surface);

color: var(--text-secondary);

border:
    1px solid
    var(--border);

border-radius: 999px;

font-size: 13px;

font-weight: 700;

transition:
    background 0.2s ease,
    color 0.2s ease,
    border 0.2s ease;
}
.category-filter.active {
background: var(--red);

color: white;

border-color: var(--red);
}
/* ========================================= DICTIONARY RESULTS ========================================= */
.dictionary-results-header {
margin:
    35px
    0
    15px;

display: flex;

align-items: center;

justify-content: space-between;

color: var(--text-secondary);

font-size: 13px;
}
.dictionary-results-header span {
color: var(--red);

font-weight: 800;
}
/* ========================================= ALPHABET LETTER ========================================= */
.dictionary-letter {
margin:
    30px
    0
    12px;

color: var(--red);

font-size: 13px;

font-weight: 900;

letter-spacing: 2px;
}
/* ========================================= WORD CARD ========================================= */
.dictionary-word-card {
width: 100%;

margin-bottom: 10px;

padding:
    20px
    20px;

display: flex;

align-items: center;

justify-content: space-between;

gap: 18px;

background: var(--surface);

border:
    1px solid
    var(--border);

border-radius: var(--radius-md);

text-align: left;

box-shadow: var(--shadow-sm);

transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border 0.2s ease;
}
.dictionary-word-card:hover {
transform: translateY(-2px);

border-color: var(--gold);

box-shadow: var(--shadow-md);
}
.dictionary-word-main {
min-width: 0;

flex: 1;
}
.dictionary-word-title {
display: flex;

align-items: center;

gap: 9px;
}
.dictionary-word-title h3 {
font-size: 21px;

letter-spacing: -0.5px;

color: var(--text-primary);
}
.dictionary-word-main p {
display: -webkit-box;

margin-top: 6px;

overflow: hidden;

color: var(--text-secondary);

font-size: 14px;

line-height: 1.5;

-webkit-line-clamp: 2;

-webkit-box-orient: vertical;
}
.dictionary-word-meta {
display: flex;

align-items: center;

gap: 15px;

flex-shrink: 0;
}
.dictionary-word-meta > span:first-child {
display: none;

padding:
    6px
    10px;

background: var(--surface-soft);

border-radius: 999px;

color: var(--text-secondary);

font-size: 11px;

font-weight: 700;
}
.dictionary-arrow {
color: var(--red);

font-size: 21px;

font-weight: 800;
}
.premium-lock {
font-size: 13px;
}
/* ========================================= EMPTY STATE ========================================= */
.empty-state {
margin-top: 35px;

padding:
    50
