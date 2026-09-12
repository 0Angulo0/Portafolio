// conatcto, mi nombre, ...

//? Arma el <footer>. id="footer" es el ancla a la que apunta "Contacto" en el
//? menú (ver src/components/header.js) hasta que exista una sección de contacto propia.
export function renderFooter() {
    return `
        <footer id="footer">
            <p data-i18n="footer_texto">Desarrollado por Daniela Angulo</p>
        </footer>
    `;
}
