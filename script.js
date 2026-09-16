/* =========================================
   ANGOLAN SLANG DICTIONARY
   APPLICATION FOUNDATION
========================================= */


/* =========================================
   APPLICATION STATE
========================================= */

const appState = {

    currentRoute: "home",

    menuOpen: false,

    searchQuery: "",

    initialized: false

};


/* =========================================
   DOM ELEMENTS
========================================= */

const mainContent =
    document.getElementById(
        "main-content"
    );

const menuButton =
    document.getElementById(
        "menu-button"
    );

const closeMenuButton =
    document.getElementById(
        "close-menu"
    );

const menuOverlay =
    document.getElementById(
        "menu-overlay"
    );

const sideMenu =
    document.getElementById(
        "side-menu"
    );


/* =========================================
   ROUTES
========================================= */

const routes = {

    home: renderHome,

    dictionary: renderDictionary,

    search: renderSearch,

    saved: renderSaved,

    daily: renderDaily,

    packs: renderPacks,

    game: renderGame,

    updates: renderUpdates,

    about: renderAbout,

    settings: renderSettings,

    profile: renderProfile

};


/* =========================================
   NAVIGATION
========================================= */

function navigateTo(route) {

    if (!routes[route]) {

        route = "home";

    }

    appState.currentRoute = route;

    closeMenu();

    renderPage();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function renderPage() {

    const renderer =
        routes[
            appState.currentRoute
        ];

    if (!renderer) {

        appState.currentRoute = "home";

        routes.home();

        updateNavigation();

        return;

    }

    renderer();

    updateNavigation();

    initializePageFeatures();

}


/* =========================================
   NAVIGATION STATE
========================================= */

function updateNavigation() {

    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );

    navItems.forEach(
        (item) => {

            const route =
                item.dataset.route;

            item.classList.toggle(
                "active",
                route ===
                appState.currentRoute
            );

        }
    );

}


/* =========================================
   HOME PAGE
========================================= */

function renderHome() {

    mainContent.innerHTML = `

        <section class="page home-page">

            <div class="hero">

                <p class="eyebrow">
                    ANGOLAN SLANG DICTIONARY
                </p>

                <h2>
                    Discover the
                    <span>language</span>
                    of Angola.
                </h2>

                <p class="hero-description">
                    Explore Angolan slang, expressions,
                    meanings and natural examples —
                    all in one place.
                </p>

                <button
                    class="primary-button"
                    data-route="dictionary"
                    type="button"
                >
                    Explore the dictionary
                    <span>→</span>
                </button>

            </div>


            <div class="home-search">

                <div class="search-box">

                    <span>⌕</span>

                    <input
                        id="home-search-input"
                        type="search"
                        placeholder="Search a word or expression..."
                        autocomplete="off"
                    >

                </div>

            </div>


            <section class="content-section daily-section">

                <div class="section-heading">

                    <h2>
                        Today's 3
                    </h2>

                    <button
                        class="text-button"
                        data-route="daily"
                        type="button"
                    >
                        See all →
                    </button>

                </div>


                <div class="daily-grid">

                    ${createDailyCard(
                        1,
                        "Mambo",
                        "Thing, matter or situation."
                    )}

                    ${createDailyCard(
                        2,
                        "Kota",
                        "An older or respected person."
                    )}

                    ${createDailyCard(
                        3,
                        "Maka",
                        "A problem, issue or trouble."
                    )}

                </div>

            </section>


            <section class="content-section">

                <div class="section-heading">

                    <div>

                        <p class="eyebrow">
                            PLAY
                        </p>

                        <h2>
                            Maka Challenge
                        </h2>

                    </div>

                    <button
                        class="text-button"
                        data-route="game"
                        type="button"
                    >
                        Play →
                    </button>

                </div>


                <div class="app-card">

                    <h3>
                        How well do you know
                        Angolan slang?
                    </h3>

                    <p>
                        Five quick questions.
                        Listen, guess and discover
                        new expressions.
                    </p>

                    <button
                        class="primary-button"
                        data-route="game"
                        type="button"
                    >
                        Start challenge
                    </button>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   DAILY CARD
========================================= */

function createDailyCard(
    number,
    word,
    meaning
) {

    return `

        <article class="daily-card">

            <span class="daily-number">
                0${number}
            </span>

            <h3>
                ${word}
            </h3>

            <p>
                ${meaning}
            </p>

            <button
                type="button"
                data-word="${word}"
            >
                Discover →
            </button>

        </article>

    `;

}


/* =========================================
   DICTIONARY PAGE
========================================= */

function renderDictionary() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                DICTIONARY
            </p>

            <h1 class="page-title">
                Explore the words.
            </h1>

            <p class="page-description">
                Search and discover Angolan words,
                expressions and phrases.
            </p>


            <div class="home-search">

                <div class="search-box">

                    <span>⌕</span>

                    <input
                        id="dictionary-search-input"
                        type="search"
                        placeholder="Search words or expressions..."
                        autocomplete="off"
                    >

                </div>

            </div>


            <section class="content-section">

                <div class="section-heading">

                    <h2>
                        Categories
                    </h2>

                </div>


                <div class="card-grid">

                    ${createSimpleCard(
                        "Everyday",
                        "Words and expressions from everyday conversation."
                    )}

                    ${createSimpleCard(
                        "People",
                        "Words used to describe people and relationships."
                    )}

                    ${createSimpleCard(
                        "Expressions",
                        "Interesting Angolan expressions and phrases."
                    )}

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   SEARCH PAGE
========================================= */

function renderSearch() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                SEARCH
            </p>

            <h1 class="page-title">
                Find a word.
            </h1>

            <div class="home-search">

                <div class="search-box">

                    <span>⌕</span>

                    <input
                        id="search-page-input"
                        type="search"
                        placeholder="Search the dictionary..."
                        autocomplete="off"
                    >

                </div>

            </div>


            <div
                id="search-results"
                class="content-section"
            >

                <div class="app-card">

                    <h3>
                        Start searching
                    </h3>

                    <p>
                        Search for an Angolan word
                        or expression.
                    </p>

                </div>

            </div>

        </section>

    `;

}


/* =========================================
   SAVED PAGE
========================================= */

function renderSaved() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                YOUR WORDS
            </p>

            <h1 class="page-title">
                Saved.
            </h1>

            <p class="page-description">
                Words and expressions you've saved
                for later.
            </p>


            <section class="content-section">

                <div class="app-card">

                    <h3>
                        Your saved words
                    </h3>

                    <p>
                        Your saved dictionary entries
                        will appear here.
                    </p>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   DAILY PAGE
========================================= */

function renderDaily() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                DAILY DISCOVERY
            </p>

            <h1 class="page-title">
                Your Daily 3.
            </h1>

            <p class="page-description">
                Three Angolan words or expressions
                to discover today.
            </p>


            <section class="content-section">

                <div class="daily-slider">

                    <div class="daily-slider-track">

                        <div class="daily-slide">

                            ${createDailyCard(
                                1,
                                "Mambo",
                                "Thing, matter or situation."
                            )}

                        </div>


                        <div class="daily-slide">

                            ${createDailyCard(
                                2,
                                "Kota",
                                "An older or respected person."
                            )}

                        </div>


                        <div class="daily-slide">

                            ${createDailyCard(
                                3,
                                "Maka",
                                "A problem, issue or trouble."
                            )}

                        </div>

                    </div>

                </div>


                <div class="slider-dots">

                    <button
                        class="slider-dot active"
                        type="button"
                        aria-label="Daily word 1"
                    ></button>

                    <button
                        class="slider-dot"
                        type="button"
                        aria-label="Daily word 2"
                    ></button>

                    <button
                        class="slider-dot"
                        type="button"
                        aria-label="Daily word 3"
                    ></button>

                </div>

            </section>


            <section class="content-section">

                <div class="app-card">

                    <h3>
                        Today's challenge
                    </h3>

                    <p>
                        Test what you've just discovered
                        in the Maka Challenge.
                    </p>

                    <button
                        class="primary-button"
                        data-route="game"
                        type="button"
                    >
                        Play challenge
                    </button>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   PACKS PAGE
========================================= */

function renderPacks() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                COLLECTIONS
            </p>

            <h1 class="page-title">
                Explore Packs.
            </h1>

            <p class="page-description">
                Discover words organised around
                different parts of Angolan life and culture.
            </p>


            <section class="content-section">

                <div class="card-grid">

                    ${createSimpleCard(
                        "Starter",
                        "50 words available for everyone.",
                        "FREE"
                    )}

                    ${createSimpleCard(
                        "Everyday Angola",
                        "Words and expressions from everyday conversation.",
                        "PREMIUM"
                    )}

                    ${createSimpleCard(
                        "Street Talk",
                        "Informal expressions and everyday street language.",
                        "PREMIUM"
                    )}

                    ${createSimpleCard(
                        "Expressions",
                        "Interesting expressions and phrases.",
                        "PREMIUM"
                    )}

                    ${createSimpleCard(
                        "Love & Relationships",
                        "Words and expressions used around relationships.",
                        "PREMIUM"
                    )}

                    ${createSimpleCard(
                        "Work & Business",
                        "Expressions you may encounter professionally.",
                        "PREMIUM"
                    )}

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   GAME PAGE
========================================= */

function renderGame() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                PLAY
            </p>

            <h1 class="page-title">
                Maka Challenge.
            </h1>

            <p class="page-description">
                Five quick questions. Listen,
                guess and discover.
            </p>


            <section class="content-section">

                <div class="app-card">

                    <h3>
                        Ready?
                    </h3>

                    <p>
                        The challenge will test your
                        knowledge of Angolan slang through
                        meaning, context and audio.
                    </p>

                    <button
                        class="primary-button"
                        id="start-game-button"
                        type="button"
                    >
                        Start challenge
                    </button>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   UPDATES PAGE
========================================= */

function renderUpdates() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                WHAT'S NEW
            </p>

            <h1 class="page-title">
                Updates.
            </h1>

            <p class="page-description">
                New words, packs and improvements
                added to the dictionary.
            </p>


            <section class="content-section">

                <div class="app-card">

                    <h3>
                        No updates yet
                    </h3>

                    <p>
                        New content will appear here
                        as the dictionary grows.
                    </p>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   ABOUT PAGE
========================================= */

function renderAbout() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                ABOUT
            </p>

            <h1 class="page-title">
                About the Dictionary.
            </h1>

            <p class="page-description">
                A growing collection of Angolan slang,
                expressions and everyday language.
            </p>


            <section class="content-section">

                <div class="app-card">

                    <h3>
                        Discover Angola through language.
                    </h3>

                    <p>
                        Explore meanings, natural examples,
                        authentic audio and expressions used
                        in everyday Angolan life.
                    </p>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   SETTINGS PAGE
========================================= */

function renderSettings() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                APP
            </p>

            <h1 class="page-title">
                Settings.
            </h1>

            <section class="content-section">

                <div class="app-card">

                    <h3>
                        Settings
                    </h3>

                    <p>
                        App preferences and account settings
                        will appear here.
                    </p>

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   PROFILE PAGE
========================================= */

function renderProfile() {

    mainContent.innerHTML = `

        <section class="page">

            <p class="eyebrow">
                YOUR ACCOUNT
            </p>

            <h1 class="page-title">
                My Profile.
            </h1>

            <section class="content-section">

                <div 
