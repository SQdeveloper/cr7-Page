const a           = document.querySelectorAll("header a");
const enlacesMenu = document.querySelectorAll(".menu a");
let sections      = document.querySelectorAll("section");

function activeA(i) {
    a.forEach(it=>{
        it.classList.remove("active");
    });
    a[i].classList.add("active");
}

//Transformamos en Array
sections = Array.from(sections);

//Función para saber si estamos dentro de una de las secciones
function show(entries) {
    for(i in entries){
        if(entries[i].isIntersecting) {
            index = sections.indexOf(entries[i].target);
            activeA(index);
            // Pintamos la raya en los enlaces segun la sección donde se encuentre
            enlacesMenu.forEach(enlace=>{
                enlace.classList.remove("active");
            });
            enlacesMenu[index].classList.add("active");
        }
    }
}

// Inicializamos el IntersecionObserver
let observer = new IntersectionObserver(show,{threshold: .2});

// Hacemos que las secciones sean observadas
for(section of sections){
    observer.observe(section);
}