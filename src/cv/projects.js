// projects:
// code projects, leadership small events, certifications

//? Sección "Proyectos": proyectos destacados (profesionales, de liderazgo,
//? certificaciones o premios). id="proyectos" — todavía no tiene link propio
//? en el menú (ver src/components/header.js), se llega bajando o por URL directa.
//? PLACEHOLDER: reemplaza projects_titulo / projects_texto en
//? src/transaltion.js con tu info real.
export function renderProjects() {
    return `
        <section class="seccion seccion--projects" id="proyectos">
            <h2 class="seccion__titulo" data-i18n="projects_titulo"></h2>
            <p class="seccion__texto" data-i18n="projects_texto"></p>
        </section>
    `;
}
