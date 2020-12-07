// O QUE ESTA COMENTADO É PARA DEIXAR O SLIDER TAMANHO FIXO!!

let totalItem = document.querySelectorAll(".item").length;
let currentSlide = 0;

//let sliderTamanho = document.querySelector(".slider").clientWidth;

document.querySelector(".slider-width").style.width= `calc(100vw * ${totalItem})`;
//document.querySelector(".slider-width").style.width= `${sliderTamanho * totalItem}px`;
document.querySelector(".controles").style.height = `${document.querySelector(".slider").clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalItem - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalItem - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderWidht = document.querySelector(".item").clientWidth;
    let newMargin = (currentSlide * sliderWidht);
    document.querySelector(".slider-width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);