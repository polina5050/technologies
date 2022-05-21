// Navigation
$(function() {
    // Menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(".window__menu").toggleClass("show");
    })
});
// Counter
let count_buildings = document.getElementById('count_building');
let build = document.createElement("span");
build.textContent = Buildings.length;
count_buildings.appendChild(build);

let count_proects = document.getElementById('count_proects');
let proect = document.createElement("span");
proect.textContent = Proects.length;
count_proects.appendChild(proect);

let count_assemblies_works = document.getElementById('count_assembly_work');
let assembly_work = document.createElement("span");
assembly_work.textContent = Installation.length;
count_assemblies_works.appendChild(assembly_work);


// Slider
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}