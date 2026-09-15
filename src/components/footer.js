// conatcto, mi nombre, ...

//? Arma el <footer>. id="footer" es el ancla a la que apunta "Contacto" en el
//? menú (ver src/components/header.js) hasta que exista una sección de contacto propia.
//& correo/usuarios van directo acá (no por transaltion.js) porque son datos de
//& contacto, no texto que cambie entre idiomas.
const EMAIL = "angulosolisdaniela15@gmail.com";
const GITHUB_URL = "https://github.com/0Angulo0";
const LINKEDIN_URL = "https://www.linkedin.com/in/daniela-angul0";

export function renderFooter() {
    return `
        <footer id="footer">
            <div class="footer__contacto">
                <a class="footer__contacto__link" href="mailto:${EMAIL}">
                    <!-- //& ícono de sobre en SVG (no hay uno en assets/) usando currentColor para heredar el color del link -->
                    <svg class="footer__contacto__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m2 6 10 7L22 6"></path>
                    </svg>
                    <span>${EMAIL}</span>
                </a>
                <a class="footer__contacto__link" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">
                    <img class="footer__contacto__icono" src="assets/github.png" alt="">
                    <span>Github</span>
                </a>
                <a class="footer__contacto__link" href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">
                    <img class="footer__contacto__icono" src="assets/linkedin.png" alt="">
                    <span>LinkedIn</span>
                </a>
            </div>
            <p data-i18n="footer_texto">Desarrollado por Daniela Angulo</p>
        </footer>
    `;
}
