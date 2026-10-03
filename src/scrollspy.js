//? "Scroll-spy": mientras haces scroll, va prendiendo (clase "is-active") la píldora
//? del menú que corresponde a la sección que se está viendo en ese momento —
//? no solo cuando le das click. Usa IntersectionObserver en vez de escuchar el
//? evento "scroll" a mano, que es más caro de calcular en cada frame.
export function initScrollSpy() {
    const links = document.querySelectorAll(".header__menu__link[href^='#']");
    if (!links.length) return; // & nada que observar si el menú no cargó

    //& mapa "id de sección" -> su <a> en el menú, para no buscarlo cada vez que cambia la sección visible
    const linkPorId = new Map();
    links.forEach((link) => {
        const id = link.getAttribute("href").slice(1); // // "#hero" -> "hero"
        linkPorId.set(id, link);
    });

    const secciones = [...linkPorId.keys()]
        .map((id) => document.getElementById(id))
        .filter(Boolean); // & por si algún href del menú todavía no tiene su sección (ej. futuras páginas)

    function marcarActivo(id) {
        links.forEach((link) => {
            link.classList.remove("is-active");
            link.removeAttribute("aria-current");
        });
        const activo = linkPorId.get(id);
        if (!activo) return;
        activo.classList.add("is-active");
        //& aria-current="location": el lector de pantalla anuncia "ubicación actual" en este
        //& link; la clase "is-active" sola es solo visual y no le dice nada
        activo.setAttribute("aria-current", "location");

        //& en celular la píldora del menú tiene scroll horizontal (no caben los 5 links):
        //& se recorre sola para que el link activo quede centrado y a la vista
        const pildora = activo.parentElement;
        if (pildora.scrollWidth > pildora.clientWidth) {
            pildora.scrollTo({
                left: activo.offsetLeft - pildora.clientWidth / 2 + activo.offsetWidth / 2,
                behavior: "smooth",
            });
        }
    }

    //& franja angosta pegada justo debajo del header fijo: cuando el TOP de una sección
    //& entra en esa franja, se considera "la sección actual" (evita que se activen dos a la vez)
    const headerAlto = document.querySelector(".header")?.offsetHeight || 0;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    marcarActivo(entry.target.id);
                }
            });
        },
        { rootMargin: `-${headerAlto + 1}px 0px -70% 0px` }
    );

    secciones.forEach((seccion) => observer.observe(seccion));
}
