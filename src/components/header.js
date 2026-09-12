// menu de opciones

//? Arma el <header>: menú de navegación en píldoras + selector de idioma ES/EN.
//? Componente "estable": no se espera que esto cambie seguido, a diferencia de src/cv/*.
//? Los href="#id" apuntan a los id= de cada <section> (ver src/cv/*.js y src/components/hero.js);
//? el salto suave entre secciones lo hace el CSS (scroll-behavior: smooth en styles/style.css),
//? no hace falta JS extra para eso.
export function renderHeader() {
    return `
        <header class="header">
            <nav class="header__menu">
                <div class="header__menu__links">
                    <a class="header__menu__link" href="#hero" data-i18n="nav_home">Inicio</a>
                    <a class="header__menu__link" href="#sobre-mi" data-i18n="nav_about">Sobre mi</a>
                    <a class="header__menu__link" href="#liderazgo" data-i18n="nav_lider">Liderazgo</a>
                    <a class="header__menu__link" href="#profesional" data-i18n="nav_career">Profesional</a>
                    <a class="header__menu__link" href="#footer" data-i18n="nav_contact">Contacto</a>
                </div>
                <!-- //& estos botones no tienen texto traducible, solo cambian el idioma al hacer click (ver src/transaltion.js) -->
                <div class="header__menu__langs">
                    <button class="header__menu__lang" data-lang-switch="es">ES</button>
                    <button class="header__menu__lang" data-lang-switch="en">EN</button>
                </div>
            </nav>
        </header>
    `;
}
