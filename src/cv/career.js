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
//& el punto y la línea son puro dibujo (aria-hidden): el lector de pantalla no tiene nada que leer ahí
function renderTimelineItem(exp) {
    return `
        <div class="timeline__item" role="listitem">
            <div class="timeline__nodo" aria-hidden="true">
                <span class="timeline__linea"></span>
                <span class="timeline__punto"></span>
            </div>
            ${renderCvItem(exp.prefijo, exp.bullets)}
        </div>
    `;
}

//& .timeline-wrapper tiene scroll horizontal propio: role="region" + aria-label le dan nombre
//& y tabindex="0" deja moverlo con las flechas del teclado (sin esto, solo con mouse/touch)
export function renderCareer() {
    return `
        <section class="seccion seccion--career" id="profesional" aria-labelledby="career-titulo">
            <h2 class="seccion__titulo" id="career-titulo" data-i18n="career_titulo"></h2>
            <div class="timeline-wrapper" role="region" tabindex="0" data-i18n-aria="career_timeline_aria">
                <div class="timeline" role="list">
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
