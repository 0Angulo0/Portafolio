//? Punto de entrada de la página: importa cada sección (componentes estables +
//? bloques de CV) y las mete en el DOM en el orden pedido. src/transaltion.js
//? corre después de este script (ver index.html) y traduce todo lo que se
//? acaba de insertar aquí.
import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderFooter } from "./components/footer.js";
import { renderAboutMe } from "./cv/aboutme.js";
import { renderCareer } from "./cv/career.js";
import { renderLeadership } from "./cv/leadership.js";
import { renderProjects } from "./cv/projects.js";

//& este es EL lugar que define el orden real de la página:
//& header -> hero -> about me -> career -> leadership -> projects -> footer
const html = `
    ${renderHeader()}
    <main>
        ${renderHero()}
        ${renderAboutMe()}
        ${renderCareer()}
        ${renderLeadership()}
        ${renderProjects()}
    </main>
    ${renderFooter()}
`;

document.getElementById("app").innerHTML = html; // // #app vive en index.html, vacío a propósito
