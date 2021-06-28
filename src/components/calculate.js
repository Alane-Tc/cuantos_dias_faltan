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
    let btn_Calculate = document.querySelector("#btn_calculate");

    let today = document.querySelector("#today")
    let date = new Date()
    today.innerHTML = `<b>${date.getDate()}/0${date.getMonth()}/${date.getFullYear()}</b>`

    const calculate_Age = () => {
        let age_input = parseInt(document.querySelector("#input_year").value);
        let span_result = document.querySelector("#span_result");
        if (isNaN(age_input)) {
            span_result.innerHTML = `<h6>Algo salió mal</h6>`
        } else if (age_input <= 0) {
            span_result.innerHTML = `<h6>No puedes digitar años negativos</h6>`
        } else {
            const year = new Date()
            span_result.innerHTML = `<h3>Tienes: ${year.getFullYear() - age_input} años</h3>`
        }
    }

    const holidays = (divshow, date, nameday) => {
        let showdate = document.querySelector(divshow);
        const fecha1 = new Date(date)
        const fecha2 = new Date()
        let milisegundosdias = 24 * 60 * 60 * 1000
        const diferent_date = Math.abs(fecha2.getTime() - fecha1.getTime())
        showdate.innerHTML = `<h3>Faltan: ${Math.round(diferent_date / milisegundosdias)} para ${nameday}</h3>`
    }

    const time_init = () => {
        let clock_init = document.querySelector("#clock");
        const clock = new Date()
        clock_init.innerHTML = `<h3>${clock.getHours()}: ${clock.getMinutes()}: ${clock.getSeconds()}</h3>`
    }

    let intervalo = setInterval(time_init, 1000)

    console.log(intervalo)

    bnt_new_year.addEventListener("click", function () {
        holidays("#show_date_year", "12/31/2021", "Año Nuevo")
    })

    bnt_christmas.addEventListener("click", function () {
        holidays("#show_date_chrismas", "12/25/2021", "Navidad")
    })

    bnt_day_dead.addEventListener("click", function () {
        holidays("#show_date_day_of_dead", "11/01/2021", "Día de muertos")
    })

    btn_Calculate.addEventListener("click", calculate_Age)


})