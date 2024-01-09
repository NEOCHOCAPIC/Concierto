document.addEventListener("DOMContentLoaded", function () {
    inciarApp();
});

function inciarApp() {
    crearGaleria();
    scrollNav();
    navegacionFija();
}
function navegacionFija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');
    window.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo');
            
        } else {
            barra.classList.remove('fijo');
        }
    });
    
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1;i<=12;i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML =`
        <img loading="lazy" src="/img/thumb/${i}.jpg" alt="imagen galeria">`;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
       galeria.appendChild(imagen);
    }
}
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
        imagen.innerHTML =`
        <img loading="lazy" src="/img/grande/${id}.jpg" alt="imagen galeria">`;
        //crear overlay
        const overlay = document.createElement('div');
        overlay.appendChild(imagen);//agregar imagen al overlay
        overlay.classList.add('overlay');//agregar la clase overlay

        //cuando se da click, cerrar la imagen
        const cerrarModal = document.createElement('p');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        overlay.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }


        overlay.appendChild(cerrarModal);//agregar el boton cerrar al overlay
        //cerrar imagen
        cerrarModal.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }


        //añaadir el overlay al html
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');

}
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-princial, a');
    enlaces.forEach( enlace =>{
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}