// menu de opciones

//? Arma el <header>: menú de navegación en píldoras + selector de idioma ES/EN.
//? Componente "estable": no se espera que esto cambie seguido, a diferencia de src/cv/*.
//? Los href="#id" apuntan a los id= de cada <section> (ver src/cv/*.js y src/components/hero.js);
//? el salto suave entre secciones lo hace el CSS (scroll-behavior: smooth en styles/style.css),
//? no hace falta JS extra para eso.
export function renderHeader() {
    return `
        <header class="header">
            <!-- //& data-i18n-aria: el nombre que anuncia el lector de pantalla ("Navegación principal"), traducido -->
            <nav class="header__menu" data-i18n-aria="nav_aria">
                <div class="header__menu__links">
                    <a class="header__menu__link" href="#hero" data-i18n="nav_home">Inicio</a>
                    <a class="header__menu__link" href="#sobre-mi" data-i18n="nav_about">Sobre mi</a>
                    <a class="header__menu__link" href="#profesional" data-i18n="nav_career">Profesional</a>
                    <a class="header__menu__link" href="#liderazgo" data-i18n="nav_lider">Liderazgo</a>
                    <a class="header__menu__link" href="#footer" data-i18n="nav_contact">Contacto</a>
                </div>
                <!-- //& los botones dicen "ES"/"EN" visualmente, pero el lector de pantalla los leería letra por
                     letra: aria-label les da el nombre completo del idioma (en su propio idioma, por eso lang="..."),
                     y aria-pressed (que actualiza src/transaltion.js) avisa cuál está activo -->
                <div class="header__menu__langs" role="group" data-i18n-aria="idioma_aria">
                    <button type="button" class="header__menu__lang" data-lang-switch="es" lang="es" aria-label="Español" aria-pressed="false">ES</button>
                    <button type="button" class="header__menu__lang" data-lang-switch="en" lang="en" aria-label="English" aria-pressed="false">EN</button>
                </div>
            </nav>
        </header>
    `;
}
