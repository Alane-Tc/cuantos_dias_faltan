document.addEventListener("DOMContentLoaded", function () {
    let bnt_new_year = document.querySelector("#new_year_bnt");
    let bnt_christmas = document.querySelector("#christmas_bnt");
    let bnt_day_dead = document.querySelector("#day_of_dead_bnt");
    let bnt_halloween = document.querySelector("#halloween_bnt");
    let bnt_independence = document.querySelector("#independence_bnt");
    let bnt_father_day = document.querySelector("#father_day_bnt");
    let bnt_mother_day = document.querySelector("#mother_day_bnt");
    let bnt_valenin_day = document.querySelector("#valentin_day_bnt");
    let bnt_age_person_bnt = document.querySelector("#age_person_bnt");

    let init_result = document.querySelector("#init_result");
    let new_year_result = document.querySelector("#new_year_result");
    let chrismas_result = document.querySelector("#christmas_result");
    let day_of_dead_result = document.querySelector("#day_of_dead_result");
    let halloween_result = document.querySelector("#halloween_result");
    let independence_result = document.querySelector("#independence_result");
    let father_day_result = document.querySelector("#father_day_result");
    let mother_day_result = document.querySelector("#mother_day_result");
    let valentin_day_result = document.querySelector("#valentin_day_result");
    let age_person_result = document.querySelector("#age_person_result");


    const show_Div_Result = (element) => {
        element.style.display = 'block';
    }

    const hide_Div_Result = (element) => {
        element.style.display = 'none';
    }

    const background_Img = (url) => {
        let background = document.querySelector("#fondo")
        background.style.backgroundImage = `url(${url})`;
    }

    const background_color = () => {
        let background = document.querySelector("#fondo")
        background.style.background = "#f5f3f4"
    }

    bnt_new_year.addEventListener('click', function () {
        background_Img("../../src/assets/img/AñoNuevo.jpg")
        show_Div_Result(new_year_result);
        hide_Div_Result(init_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_christmas.addEventListener('click', function () {
        background_Img("../../src/assets/img/Navidad.jpg")
        show_Div_Result(chrismas_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })


    bnt_day_dead.addEventListener('click', function () {
        background_Img("../../src/assets/img/Diademuertos.jpg")
        show_Div_Result(day_of_dead_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_halloween.addEventListener('click', function () {
        background_Img("../../src/assets/img/Halloween.jpg")
        show_Div_Result(halloween_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_independence.addEventListener('click', function () {
        background_Img("../../src/assets/img/independencia.png")
        show_Div_Result(independence_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_father_day.addEventListener('click', function () {
        background_Img("../../src/assets/img/diadelpadre.jpg")
        show_Div_Result(father_day_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_mother_day.addEventListener('click', function () {
        background_Img("../../src/assets/img/diaMadres.jpg")
        show_Div_Result(mother_day_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(valentin_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_valenin_day.addEventListener('click', function () {
        background_Img("../../src/assets/img/SanValentin.jpg")
        show_Div_Result(valentin_day_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(age_person_result);
    })

    bnt_age_person_bnt.addEventListener('click', function () {
        background_color();
        show_Div_Result(age_person_result);
        hide_Div_Result(init_result);
        hide_Div_Result(new_year_result);
        hide_Div_Result(chrismas_result);
        hide_Div_Result(day_of_dead_result);
        hide_Div_Result(halloween_result);
        hide_Div_Result(independence_result);
        hide_Div_Result(father_day_result);
        hide_Div_Result(mother_day_result);
        hide_Div_Result(valentin_day_result);
    })

});