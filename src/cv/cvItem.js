//? Helper compartido por career.js y leadership.js: arma una "tarjeta" de
//? experiencia (puesto + organización + fechas + viñetas). No es una sección
//? por sí sola —por eso vive suelto acá y no exporta un render* de sección—,
//? es la pieza que se repite dentro de la lista de cada una.
//?
//? "prefijo" arma las keys de traducción de esta tarjeta en src/transaltion.js:
//? con prefijo="career_outlier" busca career_outlier_rol, _org, _fecha, _lugar
//? y career_outlier_bullet_1, _bullet_2, ... hasta "numBullets".
export function renderCvItem(prefijo, numBullets) {
    const bullets = Array.from({ length: numBullets }, (_, i) => `
        <li data-i18n="${prefijo}_bullet_${i + 1}"></li>
    `).join("");

    return `
        <article class="cv-item">
            <div class="cv-item__cabecera">
                <div class="cv-item__rol-org">
                    <h3 class="cv-item__rol" data-i18n="${prefijo}_rol"></h3>
                    <p class="cv-item__org" data-i18n="${prefijo}_org"></p>
                </div>
                <div class="cv-item__fechas">
                    <span class="cv-item__fecha" data-i18n="${prefijo}_fecha"></span>
                    <span class="cv-item__lugar" data-i18n="${prefijo}_lugar"></span>
                </div>
            </div>
            <ul class="cv-item__bullets">${bullets}</ul>
        </article>
    `;
}
