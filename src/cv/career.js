// career:
// every role i'd got in a job

//? Sección "Profesional": experiencia laboral, en línea de tiempo horizontal
//? (más antiguo a la izquierda, más reciente a la derecha). id="profesional"
//? es el ancla del link "Profesional" del menú.
import { renderCvItem } from "./cvItem.js";

//& cada entrada = un punto de la línea + su tarjeta. "prefijo" apunta a sus
//& keys en src/transaltion.js (ej. career_outlier_rol, career_outlier_bullet_1...);
//& "bullets" es cuántas viñetas tiene esa tarjeta.
//& OJO: este arreglo va en orden CRONOLÓGICO (el más viejo primero) porque el
//& orden acá ES el orden de izquierda a derecha en la línea de tiempo.
const EXPERIENCIAS = [
    { prefijo: "career_kidzania", bullets: 2 },
    { prefijo: "career_angulo", bullets: 2 },
    { prefijo: "career_bonoeco", bullets: 3 },
    { prefijo: "career_outlier", bullets: 3 },
];

//& envuelve la tarjeta (renderCvItem) con el punto y el segmento de línea que
//& la conectan al resto de la línea de tiempo (ver .timeline__nodo en career.css)
function renderTimelineItem(exp) {
    return `
        <div class="timeline__item">
            <div class="timeline__nodo">
                <span class="timeline__linea"></span>
                <span class="timeline__punto"></span>
            </div>
            ${renderCvItem(exp.prefijo, exp.bullets)}
        </div>
    `;
}

export function renderCareer() {
    return `
        <section class="seccion seccion--career" id="profesional">
            <h2 class="seccion__titulo" data-i18n="career_titulo"></h2>
            <div class="timeline-wrapper">
                <div class="timeline">
                    ${EXPERIENCIAS.map(renderTimelineItem).join("")}
                </div>
            </div>
        </section>
    `;
}

//? Al cargar la página, la línea de tiempo debe arrancar mostrando lo más
//? reciente (el extremo derecho): hay que empujar el scroll horizontal hasta
//? el final para que el usuario tenga que arrastrar hacia la izquierda para
//? ver los puestos más viejos. Se llama desde main.js, después de insertar el HTML.
export function initCareerTimeline() {
    const wrapper = document.querySelector(".timeline-wrapper");
    if (!wrapper) return;
    wrapper.scrollLeft = wrapper.scrollWidth; // & el máximo scroll horizontal posible = el extremo derecho
}
