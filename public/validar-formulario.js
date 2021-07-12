/** ESTAS SON MIS DECLARACIONES **/ 
const slidePag = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");

const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");

const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");

const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;
//  ESTO ES DE PRUEBA //
const nombre = document.getElementById("nombre")

//

firtNextBtn.addEventListener("click", function(){
    // CON ESTO POSICIONO MI PÁGINA AL FORMULARIO SIGUIENTE :) YA QUE CREARA UNA NUEVA CLASE LLAMADA
    // ".active" DE DONDE PARTIRÁ OTRO DISEÑO CON CSS D:
    slidePag.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(){
    slidePag.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function(){
    slidePag.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function(){
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function(){ // ESTO ME SIRVE QUE AL LLEGAR A LA PARTE FINAL DEL FORMULARIO Y PRESIONAR
    // "ENVIAR" ME APARECERA UNA ALERTA CON EL SIGUIENTE TEXTO:
        alert("!Tu registro ha sido exitoso!");
        location.reload();
    }, 800);
});


prevBtnSec.addEventListener("click", function(){
    // CON ESTO POSICIONO MI PÁGINA AL FORMULARIO ANTERIOR :) YA QUE REMOVERA MI CLASE ".active"//
    slidePag.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function(){
     // CON ESTO POSICIONO MI PÁGINA AL FORMULARIO SIGUIENTE :) //
    slidePag.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function(){
    // CON ESTO POSICIONO MI PÁGINA AL FORMULARIO SIGUIENTE :) //
    slidePag.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});