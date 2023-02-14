const sliderMove = document.querySelector(".sliderMove");
const bars       = document.querySelectorAll(".bars div");
const videos     = document.querySelectorAll(".sliderMove video");
let number = 1;

function move() {
    sliderMove.style.transform = `translateX(-${number*25}%)`;
}

bars.forEach((br, index)=>{
    br.addEventListener("click",()=>{
        number = index;
        move();
    });
});

function recursiva() {
    /******* Obtenemos el tiempo de duración del video *******/
    // videos[0].addEventListener("loadeddata",function(ev){
    //     let  time = Math.floor(videos[0].duration);
    //     time = parseInt(`${time}000`);
        
    //     //Reproducimos el video
    //     // videos[0].play(); 
        
    //     // Cambiamos de video luego de que el video anterio finalize
    //     setTimeout(()=>{
    //         number++;
    //         move();
    //         recursiva();
    //     }, time);
    // },true);   
}

recursiva();