// projects:
// code projects, leadership small events, certifications

//? Sección "Proyectos": proyectos técnicos destacados + logros/reconocimientos.
//? id="proyectos" — todavía no tiene link propio en el menú (ver
//? src/components/header.js), se llega bajando o por URL directa.
import { renderCvItem } from "./cvItem.js";

//& mismo patrón que career.js/leadership.js para los proyectos con viñetas
const PROYECTOS = [
    { prefijo: "project_roguelite", bullets: 4 },
    { prefijo: "project_kansai", bullets: 2 },
];

//& la medalla no es un proyecto con viñetas sino un logro puntual: una tarjeta
//& con su propio "badge" y un párrafo en vez de una lista. Por eso no usa
//& renderCvItem (pensado para tarjetas con viñetas) y vive aparte, solo acá.
function renderLogro() {
    return `
        <article class="cv-item cv-item--logro">
            <span class="cv-item__badge" data-i18n="projects_logro_badge"></span>
            <div class="cv-item__cabecera">
                <div class="cv-item__rol-org">
                    <h3 class="cv-item__rol" data-i18n="projects_logro_rol"></h3>
                    <p class="cv-item__org" data-i18n="projects_logro_org"></p>
                </div>
                <div class="cv-item__fechas">
                    <span class="cv-item__fecha" data-i18n="projects_logro_fecha"></span>
                </div>
            </div>
            <p class="cv-item__descripcion" data-i18n="projects_logro_texto"></p>
        </article>
    `;
}

export function renderProjects() {
    return `
        <section class="seccion seccion--projects" id="proyectos">
            <h2 class="seccion__titulo" data-i18n="projects_titulo"></h2>
            <div class="cv-lista">
                ${PROYECTOS.map((p) => renderCvItem(p.prefijo, p.bullets)).join("")}
                ${renderLogro()}
            </div>
        </section>
    `;
}
