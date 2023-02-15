const menu       = document.querySelector(".menu");
const icon       = document.querySelector(".nav-toggle");
const firstLine  = document.querySelector(".nav-toggle .first");
const secondLine = document.querySelector(".nav-toggle .second");
const enlaces    = document.querySelectorAll(".menu ul a");

// Activamos la raya en los enlaces cuando se les hace click
enlaces.forEach(item =>{
    item.addEventListener("click", ()=>{
        menu.classList.add("active");
        firstLine.classList.remove("active");
        secondLine.classList.remove("active");
    });
});


// Activamos el menu cuando hacemos click en nav-toggle
icon.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    firstLine.classList.toggle("active");
    secondLine.classList.toggle("active");
    icon.classList.toggle("active");
});