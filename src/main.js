//? Punto de entrada de la página: importa cada sección (componentes estables +
//? bloques de CV) y las mete en el DOM en el orden pedido. src/transaltion.js
//? corre después de este script (ver index.html) y traduce todo lo que se
//? acaba de insertar aquí.
import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderFooter } from "./components/footer.js";
import { renderAboutMe } from "./cv/aboutme.js";
import { renderCareer, initCareerTimeline } from "./cv/career.js";
import { renderLeadership } from "./cv/leadership.js";
import { renderProjects } from "./cv/projects.js";
import { initScrollSpy } from "./scrollspy.js";

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

//? El header es "fixed" (ver styles/style.css), así que sale del flujo normal;
//? esta función mide su alto real y lo guarda en --header-height para que el
//? body y el scroll-margin-top de cada sección sepan cuánto espacio dejarle.
//? Se vuelve a medir en cada resize porque las píldoras del menú pueden envolver
//? a una segunda línea en pantallas angostas y cambiar el alto del header.
function ajustarAltoDelHeader() {
    const header = document.querySelector(".header");
    if (!header) return;
    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
}

ajustarAltoDelHeader();
window.addEventListener("resize", ajustarAltoDelHeader);

initScrollSpy(); // // prende la píldora activa según la sección visible mientras se hace scroll
initCareerTimeline(); // // arranca la línea de tiempo de "Profesional" mostrando lo más reciente (extremo derecho)
