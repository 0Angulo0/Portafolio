// presentacion:
// mi nombre, fotos, slogan

//? Arma el hero (primera sección que se ve): nombre grande centrado + tagline,
//? con clusters de fotos placeholder a los lados. id="hero" es el ancla a la que
//? apunta "Inicio" en el menú (ver src/components/header.js).
export function renderHero() {
    return `
        <section class="presentacion" id="hero">
            <!--//? Cluster de fotos a la izquierda (moodboard). Cada foto va en un "item" sin
                 rotar que sirve de marco para la descripción que aparece al hacer hover
                 (la rotación "polaroid" queda solo en la <img>, no en el contenedor). -->
            <div class="presentacion__galeria presentacion__galeria--izquierda">
                <!-- //& item--1 (arriba) ahora muestra la foto de construcción del robot (antes iba en item--2) -->
                <div class="presentacion__galeria__item presentacion__galeria__item--1">
                    <img class="presentacion__galeria__foto presentacion__galeria__foto--1" src="assets/img2.jpeg" alt="">
                    <span class="presentacion__galeria__caption" data-i18n="hero_foto_2"></span>
                </div>
                <!-- //& item--2 (abajo) ahora muestra la foto de la entrevista (antes iba en item--1) -->
                <div class="presentacion__galeria__item presentacion__galeria__item--2">
                    <img class="presentacion__galeria__foto presentacion__galeria__foto--2" src="assets/img1.jpeg" alt="">
                    <span class="presentacion__galeria__caption" data-i18n="hero_foto_1"></span>
                </div>
            </div>
            <div class="presentacion__contenido">
                <!-- //& data-i18n="key" queda vacío a propósito: src/transaltion.js le mete el texto según el idioma activo -->
                <h1 class="presentacion__contenido__titulo">
                    <span data-i18n="home_titulo_1"></span>
                    <span class="Titulo-destaque" data-i18n="home_titulo_2"></span>
                </h1>
                <p class="presentacion__contenido__texto" data-i18n="home_texto"></p>
            </div>
            <!-- //? Cluster de fotos a la derecha, simétrico al de la izquierda -->
            <div class="presentacion__galeria presentacion__galeria--derecha">
                <div class="presentacion__galeria__item presentacion__galeria__item--3">
                    <img class="presentacion__galeria__foto presentacion__galeria__foto--3" src="assets/img3.jpeg" alt="">
                    <span class="presentacion__galeria__caption" data-i18n="hero_foto_3"></span>
                </div>
                <div class="presentacion__galeria__item presentacion__galeria__item--4">
                    <img class="presentacion__galeria__foto presentacion__galeria__foto--4" src="assets/img4.jpeg" alt="">
                    <span class="presentacion__galeria__caption" data-i18n="hero_foto_4"></span>
                </div>
            </div>
        </section>
    `;
}
