/* =========================================
   ANGOLAN SLANG DICTIONARY
   MAIN APPLICATION
========================================= */


/* =========================================
   APP STATE
========================================= */

const appState = {

    currentPage: "home",

    previousPage: "home",

    savedWords: JSON.parse(
        localStorage.getItem(
            "angolanSlangSavedWords"
        )
    ) || [],

};


/* =========================================
   TEMPORARY DEMO DATA

   IMPORTANT:
   This is NOT the permanent dictionary.

   These entries exist only so that we can
   build and test the application interface.

   Later:

   Supabase
       ↓
   loadWords()
       ↓
   App
========================================= */

const demoWords = [

    {
        id: 1,

        word: "Kota",

        pronunciation: "/ˈkɔ.ta/",

        partOfSpeech: "noun",

        meaning:
            "A popular Angolan sandwich made with bread and a variety of fillings.",

        english:
            "A traditional Angolan sandwich.",

        portuguese:
            "Sanduíche tradicional angolana.",

        example:
            "Vou comprar um kota antes de ir para casa.",

        exampleTranslation:
            "I'm going to buy a kota before going home.",

        alternatives: [],

        audio: null,

        image: null

    },


    {
        id: 2,

        word: "Bazar",

        pronunciation: "/baˈzar/",

        partOfSpeech: "verb",

        meaning:
            "To leave, go away or depart.",

        english:
            "To leave; to go away.",

        portuguese:
            "Ir embora; sair.",

        example:
            "Já está tarde, vamos bazar.",

        exampleTranslation:
            "It's already late, let's leave.",

        alternatives: [],

        audio: null,

        image: null

    },


    {
        id: 3,

        word: "Mambo",

        pronunciation: "/ˈmã.bo/",

        partOfSpeech: "noun",

        meaning:
            "A thing, matter, situation or subject being discussed.",

        english:
            "Thing; matter; situation.",

        portuguese:
            "Coisa; assunto; situação.",

        example:
            "Qual é o mambo?",

        exampleTranslation:
            "What's the matter?",

        alternatives: [],

        audio: null,

        image: null

    }

];


/* =========================================
   DAILY WORDS

   Temporary only.
========================================= */

const dailyWords = [

    demoWords[0],

    demoWords[1],

    demoWords[2]

];


/* =========================================
   NAVIGATION
========================================= */

function navigateTo(page) {

    appState.previousPage =
        appState.currentPage;


    appState.currentPage =
        page;


    closeMenu();


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


/* =========================================
   PAGE ROUTER
========================================= */

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
                renderComingSoon(
                    "Dictionary",
                    "The complete dictionary experience is being built."
                );

            break;


        case "search":

            mainContent.innerHTML =
                renderComingSoon(
                    "Search",
                    "Search will allow users to find words, meanings and expressions."
                );

            break;


        case "saved":

            mainContent.innerHTML =
                renderComingSoon(
                    "Saved Words",
                    "Your favourite words will appear here."
                );

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


/* =========================================
   HOME PAGE
========================================= */

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

                            <article
                                class="daily-slide"
                            >

                                <div
                                    class="daily-card"
                                >

                                    <span
                                        class="daily-number"
                                    >

                                        ${String(
                                            index + 1
                                        ).padStart(
                                            2,
                                            "0"
                                        )} / 03

                                    </span>


                                    <h3>

                                        ${item.word}

                                    </h3>


                                    <p>

                                        Discover today's word.

                                    </p>


                                    <button
                                        type="button"
                                        onclick="openDemoWord(${item.id})"
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
                            class="slider-dot ${
                                index === 0
                                    ? "active"
                                    : ""
                            }"
                            type="button"
                            aria-label="Go to word ${
                                index + 1
                            }"
                        ></button>

                    `
                    ).join("")}

                </div>

            </section>

        </section>

    `;

}


/* =========================================
   DAILY PAGE
========================================= */

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

                    <article
                        class="daily-card"
                    >

                        <span
                            class="daily-number"
                        >

                            ${String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}

                        </span>


                        <h3>

                            ${item.word}

                        </h3>


                        <p>

                            Discover today's word.

                        </p>


                        <button
                            type="button"
                            onclick="openDemoWord(${item.id})"
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


/* =========================================
   WORD DETAIL
========================================= */

function openDemoWord(id) {

    const word =
        demoWords.find(
            (item) => item.id === id
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

        <section
            class="home-page word-detail-page"
        >

            <button
                class="text-button"
                type="button"
                onclick="navigateTo(
                    '${appState.previousPage}'
                )"
            >

                ← Back

            </button>


            <div class="word-detail">

                <!-- =====================
                     WORD HEADER
                ====================== -->

                <div
                    class="word-detail-header"
                >

                    <p class="eyebrow">
                        WORD OF THE DAY
                    </p>


                    <div
                        class="word-title-row"
                    >

                        <h1>
                            ${word.word}
                        </h1>


                        <button
                            class="word-audio-button"
                            type="button"
                            aria-label="Play pronunciation"
                            ${
                                word.audio
                                    ? ""
                                    : "disabled"
                            }
                        >

                            🔊

                        </button>

                    </div>


                    <div class="word-meta">

                        <span>
                            ${word.pronunciation}
                        </span>


                        <span>
                            ${word.partOfSpeech}
                        </span>

                    </div>

                </div>


                <!-- =====================
                     MEANING
                ====================== -->

                <div
                    class="word-detail-section"
                >

                    <p class="detail-label">
                        MEANING
                    </p>


                    <p class="word-meaning">

                        ${word.meaning}

                    </p>

                </div>


                <!-- =====================
                     ENGLISH
                ====================== -->

                <div
                    class="word-detail-section"
                >

                    <p class="detail-label">
                        IN ENGLISH
                    </p>


                    <p class="word-secondary">

                        ${word.english}

                    </p>

                </div>


                <!-- =====================
                     PORTUGUESE
                ====================== -->

                <div
                    class="word-detail-section"
                >

                    <p class="detail-label">
                        EM PORTUGUÊS
                    </p>


                    <p class="word-secondary">

                        ${word.portuguese}

                    </p>

                </div>


                <!-- =====================
                     EXAMPLE
                ====================== -->

                <div class="word-example">

                    <p class="detail-label">
                        EXAMPLE
                    </p>


                    <p class="example-original">

                        “${word.example}”

                    </p>


                    <p
                        class="example-translation"
                    >

                        ${word.exampleTranslation}

                    </p>

                </div>


                <!-- =====================
                     ALTERNATIVES
                ====================== -->

                ${
                    word.alternatives.length
                        ? `

                            <div
                                class="word-detail-section"
                            >

                                <p
                                    class="detail-label"
                                >

                                    ALSO KNOWN AS

                                </p>


                                <div
                                    class="word-alternatives"
                                >

                                    ${word.alternatives
                                        .map(
                                            (
                                                alternative
                                            ) =>
                                                `<span>
                                                    ${alternative}
                                                </span>`
                                        )
                                        .join("")}

                                </div>

                            </div>

                        `
                        : ""
                }


                <!-- =====================
                     SAVE
                ====================== -->

                <button
                    class="primary-button word-save-button"
                    type="button"
                    onclick="toggleSavedWord(${word.id})"
                >

                    <span>
                        ${
                            isSaved
                                ? "♥"
                                : "♡"
                        }
                    </span>


                    ${
                        isSaved
                            ? "Saved"
                            : "Save this word"
                    }

                </button>

            </div>

        </section>

    `;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   SAVE / UNSAVE WORD
========================================= */

function toggleSavedWord(id) {

    const index =
        appState.savedWords.indexOf(id);


    if (index === -1) {

        appState.savedWords.push(id);

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


    openDemoWord(id);

}


/* =========================================
   UPDATES PAGE
========================================= */

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

                    In the future, updates such as
                    “New update coming on September 1st, 2026”
                    can be created directly from
                    the admin dashboard.

             
