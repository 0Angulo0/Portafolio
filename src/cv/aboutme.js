//about me:
// info about me, code languages, skills, info important, like the hook

//? Sección "Sobre mi": historia/hook personal + dos tablas de skills (duras y
//? blandas). id="sobre-mi" es el ancla del link "Sobre mi" del menú.

//& Skills duras: string directo (no pasan por transaltion.js, son nombres de
//& tecnologías/lenguajes). Para agregar/quitar una skill solo tocas esta lista.
const SKILLS_DURAS = [
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

//& Skills blandas: sí se traducen (son frases), así que van como keys de transaltion.js
const SKILLS_BLANDAS = [
    "skill_soft_1", // Comunicación empática
    "skill_soft_2", // Resolución de conflictos
    "skill_soft_3", // Coordinación de equipos multidisciplinarios
    "skill_soft_4", // Planeación de eventos
    "skill_soft_5", // Adaptabilidad
    "skill_soft_6", // Inteligencia emocional
    "skill_soft_7", // Perspectiva de género
    "skill_soft_8", // Liderazgo estratégico
    "skill_soft_9", // Gestión de stakeholders
    "skill_soft_10", // Aprendizaje rápido
    "skill_soft_11", // Resolución de problemas bajo presión
    "skill_soft_12", // Comunicación analítica
];

//& una fila de tabla: número (01, 02...) + la skill. Recibe el texto directo (duras)
//& o una key de traducción (blandas), según cuál de los dos le pases
function renderFila({ texto = "", key = null }, index) {
    const numero = String(index + 1).padStart(2, "0"); // // 0 -> "01"
    const atributoI18n = key ? `data-i18n="${key}"` : "";
    return `
        <tr class="aboutme__tabla__fila">
            <td class="aboutme__tabla__num">${numero}</td>
            <td class="aboutme__tabla__skill" ${atributoI18n}>${texto}</td>
        </tr>
    `;
}

//& una tabla completa. Se usa <table> de verdad (no divs) y su título va en <caption>:
//& así el lector de pantalla la anuncia como "tabla, Habilidades duras, 9 filas".
//& El "#" de la cabecera se esconde del lector (aria-hidden) y en su lugar lee "Número"
function renderTabla(tituloKey, filas, modificador) {
    return `
        <table class="aboutme__tabla aboutme__tabla--${modificador}">
            <caption class="aboutme__tabla__titulo" data-i18n="${tituloKey}"></caption>
            <thead>
                <tr>
                    <th scope="col" class="aboutme__tabla__num">
                        <span aria-hidden="true">#</span>
                        <span class="sr-only" data-i18n="aboutme_tabla_num"></span>
                    </th>
                    <th scope="col" data-i18n="aboutme_tabla_habilidad"></th>
                </tr>
            </thead>
            <tbody>
                ${filas.map(renderFila).join("")}
            </tbody>
        </table>
    `;
}

export function renderAboutMe() {
    const filasDuras = SKILLS_DURAS.map((texto) => ({ texto }));
    const filasBlandas = SKILLS_BLANDAS.map((key) => ({ key }));

    return `
        <section class="seccion seccion--aboutme" id="sobre-mi" aria-labelledby="aboutme-titulo">
            <!-- //? Texto: título + hook personal + nota destacada. Va PRIMERO en el HTML para que el
                 lector de pantalla lea el <h2> de la sección antes que las tablas; en escritorio el
                 CSS (order) igual lo pone a la derecha de las tablas -->
            <div class="aboutme__contenido">
                <!-- //& título partido en 3 keys para poder resaltar solo la palabra del medio (mismo truco que el nombre del hero) -->
                <h2 class="seccion__titulo" id="aboutme-titulo">
                    <span data-i18n="about_titulo_pre"></span>
                    <span class="Titulo-destaque" data-i18n="about_titulo_destacado"></span><span data-i18n="about_titulo_post"></span>
                </h2>
                <p class="seccion__texto" data-i18n="about_texto_1"></p>
                <div class="aboutme__nota">
                    <!-- //& <h3> y no <h2>: es un subtítulo DENTRO de la sección "¿Quién soy?" -->
                    <h3 class="aboutme__nota__titulo" data-i18n="about_titulo_nota"></h3>
                    <p class="aboutme__nota__texto" data-i18n="about_texto_2"></p>
                    <strong class="aboutme__nota__texto" data-i18n="about_texto_negritas"></strong>
                </div>
            </div>
            <!-- //? Las dos tablas de skills -->
            <div class="aboutme__skills">
                ${renderTabla("aboutme_skills_duras", filasDuras, "duras")}
                ${renderTabla("aboutme_skills_blandas", filasBlandas, "blandas")}
            </div>
        </section>
    `;
}
