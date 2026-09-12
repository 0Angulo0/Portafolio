//* translation of all the text es/en

//? Diccionario con TODO el texto del sitio, separado por idioma (es/en).
//? Cada key (ej. "home_titulo_1") corresponde a un atributo data-i18n="key" en el HTML;
//? así el HTML no tiene texto escrito, solo "ganchos" que este archivo llena.
const translations = {
    es: {
        //& --- textos del menú/header, se usan en index.html y about.html ---
        nav_home: "Inicio",
        nav_about: "Sobre mi",
        nav_lider: "Liderazgo",
        nav_career: "Profesional",
        nav_contact: "Contacto",

        //& --- textos de la página de inicio (index.html) ---
        //& el nombre va en dos keys separadas (no un solo string con \n) para poder
        //& estilar "Angulo" distinto (cursiva + resaltado) sin tocar "Daniela"
        home_titulo_1: "Daniela",
        home_titulo_2: "Angulo",
        home_texto: "Liderar tecnologías que cierren brechas sociales, integrando ética y accesibilidad " +
                    "en cada solución.",
        home_redes_subtitulo: "Conoce más detalles ↓",
        home_redes_instagram: "Instagram",
        home_redes_github: "Github",

        //& --- sección "Sobre mi" (src/cv/aboutme.js) ---
        about_titulo: "Sobre mi",
        about_texto_1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        about_texto_2: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores ipsum delis forum birol parela maxime infena. Excepteur sint occaecat cupidatat non.",

        //& --- sección "Profesional" (src/cv/career.js) --- PLACEHOLDER, reemplazar con tus puestos reales
        career_titulo: "Lorem Ipsum — Profesional",
        career_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        //& --- sección "Liderazgo" (src/cv/leadership.js) --- PLACEHOLDER, reemplazar con tus roles reales
        leadership_titulo: "Lorem Ipsum — Liderazgo",
        leadership_texto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        //& --- sección "Proyectos" (src/cv/projects.js) --- PLACEHOLDER, reemplazar con tus proyectos reales
        projects_titulo: "Lorem Ipsum — Proyectos",
        projects_texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        //& --- footer (src/components/footer.js) ---
        footer_texto: "Desarrollado por Daniela Angulo",

        //& --- textos alternativos (atributo alt de imágenes) ---
        imagen_alt: "Imagen de Ana García trabajando",
    },
    en: {
        nav_home: "Home",
        nav_about: "About me",
        nav_lider: "Leadership",
        nav_career: "Career",
        nav_contact: "Contact",

        home_titulo_1: "Daniela",
        home_titulo_2: "Angulo",
        home_texto: "Leading technologies that close social gaps, integrating ethics and accessibility " +
                    "into every solution.",
        home_redes_subtitulo: "Follow me:",
        home_redes_instagram: "Instagram",
        home_redes_github: "Github",

        about_titulo: "About me",
        about_texto_1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        about_texto_2: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores ipsum delis forum birol parela maxime infena. Excepteur sint occaecat cupidatat non.",

        career_titulo: "Lorem Ipsum — Career",
        career_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        leadership_titulo: "Lorem Ipsum — Leadership",
        leadership_texto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        projects_titulo: "Lorem Ipsum — Projects",
        projects_texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

        footer_texto: "Developed by Daniela Angulo",

        imagen_alt: "Picture of Ana García working",
    },
};

const DEFAULT_LANG = "es"; // idioma que se usa si no hay nada guardado en localStorage o la key no existe
const STORAGE_KEY = "lang"; // nombre bajo el cual se guarda el idioma elegido en localStorage

//? Aplica el idioma "lang" a toda la página: recorre el DOM y reemplaza
//? el texto/atributos de cada elemento marcado con data-i18n / data-i18n-alt.
//? Se llama una vez al cargar la página y cada vez que se hace click en ES/EN.
function applyTranslations(lang) {
    //& si "lang" no existe en el diccionario (valor raro), cae de vuelta al idioma por defecto
    const dict = translations[lang] || translations[DEFAULT_LANG];

    //& busca todo elemento con data-i18n="key" y le pone el texto (textContent) de esa key
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    //& igual que arriba pero para el atributo "alt" de imágenes (data-i18n-alt="key")
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const key = el.getAttribute("data-i18n-alt");
        if (dict[key] !== undefined) {
            el.setAttribute("alt", dict[key]);
        }
    });

    document.documentElement.lang = lang === "en" ? "en" : "es-mx"; // // actualiza el atributo lang del <html> para accesibilidad/SEO

    //& marca visualmente (clase "is-active") cuál botón de idioma corresponde al idioma actual
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.langSwitch === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang); // // guarda la elección para que persista al navegar entre páginas
}

//? Punto de entrada: se ejecuta cuando el HTML terminó de cargar.
//? 1) aplica el idioma guardado (o el default) apenas carga la página
//? 2) conecta los botones ES/EN para que al hacer click cambien el idioma
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyTranslations(savedLang);

    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
        btn.addEventListener("click", () => applyTranslations(btn.dataset.langSwitch));
    });
});
