//about me:
// info about me, code languages, skills, info important, like the hook

//? Sección "Sobre mi": tabla de skills (duras y suaves) a la izquierda +
//? historia/hook personal a la derecha. id="sobre-mi" es el ancla del link
//? "Sobre mi" del menú.

//& Lista de skills duras que arma la tabla de la izquierda. Es un array plano
//& de JS a propósito: para agregar/quitar una skill solo tocas esta lista,
//& sin tocar el HTML de renderAboutMe() ni el CSS. No pasan por transaltion.js
//& porque son nombres de tecnologías/lenguajes, no cambian entre es/en.
const SKILLS = [
    "Python",
    "C / C++",
    "JavaScript / Node.js",
    "SQL / Bases de datos",
    "Git / GitHub / Linux / VS Code",
    "HTML / CSS / Bootstrap",
    "Estructuras de Datos & POO",
    "Machine Learning / IA Generativa",
    "Chart.js & KPI Dashboards",
];

//& Skills blandas, como keys de transaltion.js (sí se traducen, son frases).
const SOFT_SKILLS = [
    "skill_soft_1",
    "skill_soft_2",
    "skill_soft_3",
    "skill_soft_4",
    "skill_soft_5",
    "skill_soft_6",
    "skill_soft_7",
    "skill_soft_8",
    "skill_soft_9",
    "skill_soft_10",
    "skill_soft_11",
    "skill_soft_12",
];

//& arma una fila de la tabla; el número (01, 02, ...) sale solo del índice
function renderFilaSkill(skill, index) {
    const numero = String(index + 1).padStart(2, "0"); // 0 -> "01", 8 -> "09"
    return `
        <li class="aboutme__tabla__fila">
            <span class="aboutme__tabla__num">${numero}</span>
            <span class="aboutme__tabla__skill">${skill}</span>
            <span class="aboutme__tabla__dominio" data-i18n="aboutme_tabla_dominio"></span>
        </li>
    `;
}

//& arma un "pill" de skill blanda
function renderSoftSkill(key) {
    return `<span class="aboutme__softskills__pill" data-i18n="${key}"></span>`;
}

export function renderAboutMe() {
    return `
        <section class="seccion seccion--aboutme" id="sobre-mi">
            <!-- //? Columna izquierda: tabla de skills duras + tarjeta de skills blandas -->
            <div class="aboutme__columna-izquierda">
                <div class="aboutme__tabla">
                    <div class="aboutme__tabla__cabecera">
                        <span data-i18n="aboutme_tabla_titulo"></span>
                        <span data-i18n="aboutme_tabla_hover"></span>
                    </div>
                    <ul class="aboutme__tabla__lista">
                        ${SKILLS.map(renderFilaSkill).join("")}
                    </ul>
                </div>
                <div class="aboutme__softskills">
                    <h4 class="aboutme__softskills__titulo" data-i18n="aboutme_softskills_titulo"></h4>
                    <div class="aboutme__softskills__lista">
                        ${SOFT_SKILLS.map(renderSoftSkill).join("")}
                    </div>
                </div>
            </div>
            <!-- //? Columna derecha: título + hook personal + nota destacada -->
            <div class="aboutme__contenido">
                <!-- //& título partido en 3 keys para poder resaltar solo la palabra del medio (mismo truco que el nombre del hero) -->
                <h2 class="seccion__titulo">
                    <span data-i18n="about_titulo_pre"></span>
                    <span class="Titulo-destaque" data-i18n="about_titulo_destacado"></span><span data-i18n="about_titulo_post"></span>
                </h2>
                <p class="seccion__texto" data-i18n="about_texto_1"></p>
                <div class="aboutme__nota">
                    <h2 class="aboutme__nota__titulo" data-i18n="about_titulo_nota"></h2>
                    <p class="aboutme__nota__texto" data-i18n="about_texto_2"></p>
                    <strong class="aboutme__nota__texto" data-i18n="about_texto_negritas"></strong>
                </div>
            </div>
        </section>
    `;
}
