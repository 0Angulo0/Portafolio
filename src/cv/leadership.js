// leadership:
// every role in leadership i'd had

//? Sección "Liderazgo": los roles de liderazgo que has tenido. id="liderazgo"
//? es el ancla del link "Liderazgo" del menú.
//? PLACEHOLDER: reemplaza leadership_titulo / leadership_texto en
//? src/transaltion.js con tu info real.
export function renderLeadership() {
    return `
        <section class="seccion seccion--leadership" id="liderazgo">
            <h2 class="seccion__titulo" data-i18n="leadership_titulo"></h2>
            <p class="seccion__texto" data-i18n="leadership_texto"></p>
        </section>
    `;
}
