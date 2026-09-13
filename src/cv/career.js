// career:
// every role i'd got in a job

//? Sección "Profesional": experiencia laboral, basada en tu CV. id="profesional"
//? es el ancla del link "Profesional" del menú.
import { renderCvItem } from "./cvItem.js";

//& cada entrada = una tarjeta. "prefijo" apunta a sus keys en src/transaltion.js
//& (ej. career_outlier_rol, career_outlier_bullet_1...); "bullets" es cuántas
//& viñetas tiene esa tarjeta. Para agregar un puesto nuevo: una key más acá +
//& sus traducciones en transaltion.js, sin tocar el HTML de renderCareer().
const EXPERIENCIAS = [
    { prefijo: "career_outlier", bullets: 3 },
    { prefijo: "career_bonoeco", bullets: 3 },
    { prefijo: "career_angulo", bullets: 2 },
    { prefijo: "career_kidzania", bullets: 2 },
];

export function renderCareer() {
    return `
        <section class="seccion seccion--career" id="profesional">
            <h2 class="seccion__titulo" data-i18n="career_titulo"></h2>
            <div class="cv-lista">
                ${EXPERIENCIAS.map((exp) => renderCvItem(exp.prefijo, exp.bullets)).join("")}
            </div>
        </section>
    `;
}
