// career:
// every role i'd got in a job

//? Sección "Profesional": los puestos laborales que has tenido. id="profesional"
//? es el ancla del link "Profesional" del menú.
//? PLACEHOLDER: reemplaza career_titulo / career_texto en src/transaltion.js
//? con tu experiencia real (lo suyo sería una lista/timeline por puesto,
//? pero por ahora es un solo bloque de texto de relleno).
export function renderCareer() {
    return `
        <section class="seccion seccion--career" id="profesional">
            <h2 class="seccion__titulo" data-i18n="career_titulo"></h2>
            <p class="seccion__texto" data-i18n="career_texto"></p>
        </section>
    `;
}
