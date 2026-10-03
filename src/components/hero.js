// presentacion:
// mi nombre, fotos, slogan

//? Arma el hero (primera sección que se ve): nombre grande centrado + tagline,
//? con 4 fotos con su historia. id="hero" es el ancla a la que apunta "Inicio"
//? en el menú (ver src/components/header.js).
//?
//? Las fotos se ven distinto según la pantalla (ver components.css):
//? - laptop/escritorio con mouse: collage a los lados del nombre; la historia
//?   aparece con el efecto flip al pasar el cursor (o al llegar con Tab).
//? - celular/tablet: carrusel deslizable debajo del nombre, con la historia
//?   siempre visible debajo de cada foto (en touch no existe el hover).

//& arma una foto con su historia. <figure> + <figcaption> es lo que liga la
//& descripción con su foto para el lector de pantalla (antes eran un <img> y un
//& <span> sueltos). tabindex="0" deja llegar a la foto con Tab para ver la
//& historia sin mouse. "pista" es el letrero de "pasa el cursor..." (aria-hidden:
//& es una instrucción visual, el lector de pantalla ya lee el figcaption directo).
function renderFoto(numero, archivo, key) {
    return `
        <figure class="presentacion__galeria__item presentacion__galeria__item--${numero}" tabindex="0">
            <img class="presentacion__galeria__foto" src="assets/${archivo}" alt="" data-i18n-alt="${key}_alt">
            <span class="presentacion__galeria__pista" aria-hidden="true" data-i18n="hero_foto_pista"></span>
            <figcaption class="presentacion__galeria__caption" data-i18n="${key}"></figcaption>
        </figure>
    `;
}

export function renderHero() {
    return `
        <section class="presentacion" id="hero" aria-labelledby="hero-titulo">
            <!-- //& el nombre va primero en el HTML (orden de lectura correcto para el lector de pantalla);
                 en escritorio el CSS (order) acomoda las fotos a sus lados -->
            <div class="presentacion__contenido">
                <!-- //& data-i18n="key" queda vacío a propósito: src/transaltion.js le mete el texto según el idioma activo -->
                <h1 class="presentacion__contenido__titulo" id="hero-titulo">
                    <span data-i18n="home_titulo_1"></span>
                    <span class="Titulo-destaque" data-i18n="home_titulo_2"></span>
                </h1>
                <p class="presentacion__contenido__texto" data-i18n="home_texto"></p>
            </div>
            <!-- //& solo se ve en celular/tablet, arriba del carrusel -->
            <p class="presentacion__fotos__pista" aria-hidden="true" data-i18n="hero_carrusel_pista"></p>
            <!-- //? Las 4 fotos en un solo contenedor: en celular ES el carrusel (con scroll propio,
                 por eso role="region" + tabindex para poder moverlo con teclado); en escritorio
                 desaparece como caja (display:contents) y sus 2 grupos quedan a los lados del nombre -->
            <div class="presentacion__fotos" role="region" tabindex="0" data-i18n-aria="hero_galeria_aria">
                <div class="presentacion__galeria presentacion__galeria--izquierda">
                    ${renderFoto(1, "img2.jpeg", "hero_foto_2")} <!-- construcción del robot, arriba-izquierda -->
                    ${renderFoto(2, "img1.jpeg", "hero_foto_1")} <!-- entrevista CONECTA, abajo-izquierda -->
                </div>
                <div class="presentacion__galeria presentacion__galeria--derecha">
                    ${renderFoto(3, "img3.jpeg", "hero_foto_3")} <!-- panel ONU Mujeres, arriba-derecha -->
                    ${renderFoto(4, "img4.jpeg", "hero_foto_4")} <!-- Latinas en Tech, abajo-derecha -->
                </div>
            </div>
        </section>
    `;
}
