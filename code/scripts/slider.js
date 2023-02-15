const sliderMove = document.querySelector(".sliderMove");
const bars       = document.querySelectorAll(".bars div");
const videos     = document.querySelectorAll(".sliderMove video");
let number = 1;

function move() {
    sliderMove.style.transform = `translateX(-${number*20}%)`;
}

bars.forEach((br, index)=>{
    br.addEventListener("click",()=>{
        number = index;
        // Modifico el flex de las barras
        bars.forEach(b=>{
            b.style.flex = 1;
            b.style.borderColor = "#b9b9b9";
        });
        br.style.flex = 2;
        br.style.borderColor = "white";
        move();
    });
});

function changeUrl() {
    if(window.innerWidth < 750) {
        videos[0].src = "./rg/videos/CR7_WebsiteHighlights-Sporting_mobile.mp4";
        videos[1].src = "./rg/videos/CR7_WebsiteHighlights-Juventus_mobile.mp4";
        videos[2].src = "./rg/videos/CR7_WebsiteHighlights-ManUtd_mobile.mp4";
        videos[3].src = "./rg/videos/CR7_WebsiteHighlights-RealMadrid_mobile.mp4";
        videos[4].src = "./rg/videos/CR7_WebsiteHighlights-Portugal_mobile.mp4";
    }
    else {
        videos[0].src = "./rg/videos/CR7_WebsiteHighlights-Juventus_desktop.mp4";
        videos[1].src = "./rg/videos/CR7_WebsiteHighlights-ManUtd_desktop.mp4";
        videos[2].src = "./rg/videos/CR7_WebsiteHighlights-Portugal_desktop.mp4";
        videos[3].src = "./rg/videos/CR7_WebsiteHighlights-RealMadrid_desktop.mp4";
        videos[4].src = "./rg/videos/CR7_WebsiteHighlights-ManUtd_desktop.mp4";
    }
}

window.addEventListener("resize", ()=>{
    changeUrl()
});

changeUrl();