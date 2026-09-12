//about me:
// info about me, code languages, skills, info important, like the hook

//? Sección "Sobre mi": el resumen/hook general de toda la página (metas, cosas
//? generales sobre ti). id="sobre-mi" es el ancla del link "Sobre mi" del menú.
//? PLACEHOLDER: reemplaza about_titulo / about_texto_1 / about_texto_2 en
//? src/transaltion.js con tu info real cuando la tengas.
export function renderAboutMe() {
    return `
        <section class="seccion seccion--aboutme" id="sobre-mi">
            <h2 class="seccion__titulo" data-i18n="about_titulo"></h2>
            <p class="seccion__texto" data-i18n="about_texto_1"></p>
            <p class="seccion__texto" data-i18n="about_texto_2"></p>
        </section>
    `;
}
