const contVideo = document.querySelector(".video");
const video     = document.querySelector(".video video");
const play      = document.querySelector(".video img");
const span      = document.querySelectorAll(".video span");
let playVideo = false;

contVideo.addEventListener("click", ()=>{
    if(!playVideo) {
        setTimeout(()=>{ video.play() }, 100);
        video.setAttribute("controls", "true");
        playVideo = !playVideo;
    }
    play.style.display = "none";
    span.forEach((sp)=>{
        sp.style.display = "none";
    });
});