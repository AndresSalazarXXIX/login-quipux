// animacion formulario
let width = screen.width;
let form = document.querySelector(".formulario");
if(width < 768){
    form.classList.add("formulario-mobile");
}

ScrollReveal().reveal('.formulario',{
duration:2000,
origin:'top',
distance:'200px'
});

ScrollReveal().reveal('.formulario-mobile',{
    duration:2000,
    origin:'bottom',
    distance:'200px'
});