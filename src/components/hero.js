// presentacion:
// mi nombre, fotos, slogan

//? Arma el hero (primera sección que se ve): nombre grande centrado + tagline,
//? con clusters de fotos placeholder a los lados. id="hero" es el ancla a la que
//? apunta "Inicio" en el menú (ver src/components/header.js).
export function renderHero() {
    return `
        <section class="presentacion" id="hero">
            <!-- //? Cluster de fotos a la izquierda (moodboard). Todo con Imagem.png de placeholder hasta que pongas tus fotos -->
            <div class="presentacion__galeria presentacion__galeria--izquierda">
                <img class="presentacion__galeria__foto presentacion__galeria__foto--1" src="../assets/Imagem.png" alt="">
                <img class="presentacion__galeria__foto presentacion__galeria__foto--2" src="../assets/Imagem.png" alt="">
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
                <img class="presentacion__galeria__foto presentacion__galeria__foto--3" src="../assets/Imagem.png" alt="">
                <img class="presentacion__galeria__foto presentacion__galeria__foto--4" src="../assets/Imagem.png" alt="">
            </div>
        </section>
    `;
}
