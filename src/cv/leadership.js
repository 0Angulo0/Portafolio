// leadership:
// every role in leadership i'd had

//? Sección "Liderazgo": roles de liderazgo, basada en tu CV. id="liderazgo"
//? es el ancla del link "Liderazgo" del menú.
import { renderCvItem } from "./cvItem.js";

//& mismo patrón que career.js: cada entrada = una tarjeta, "prefijo" apunta a
//& sus keys en src/transaltion.js. Para agregar un rol nuevo: una key más acá
//& + sus traducciones, sin tocar el HTML de renderLeadership().
const ROLES = [
    { prefijo: "leadership_sati", bullets: 2 },
    { prefijo: "leadership_glp", bullets: 2 },
    { prefijo: "leadership_u21", bullets: 2 },
    { prefijo: "leadership_escuderia", bullets: 1 },
    { prefijo: "leadership_sati_board", bullets: 2 },
    { prefijo: "leadership_panel", bullets: 2 },
    { prefijo: "leadership_logistica", bullets: 2 },
    { prefijo: "leadership_aero", bullets: 2 },
    { prefijo: "leadership_robotics", bullets: 3 },
    { prefijo: "leadership_consejo", bullets: 2 },
    { prefijo: "leadership_fetec", bullets: 3 },
];

export function renderLeadership() {
    return `
        <section class="seccion seccion--leadership" id="liderazgo">
            <h2 class="seccion__titulo" data-i18n="leadership_titulo"></h2>
            <div class="cv-lista">
                ${ROLES.map((rol) => renderCvItem(rol.prefijo, rol.bullets)).join("")}
            </div>
        </section>
    `;
}
