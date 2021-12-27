document.addEventListener("DOMContentLoaded", function () {

    let bnt_new_year = document.querySelector("#new_year_bnt");
    let bnt_christmas = document.querySelector("#christmas_bnt");
    let bnt_day_dead = document.querySelector("#day_of_dead_bnt");
    let bnt_halloween = document.querySelector("#halloween_bnt");
    let bnt_independence = document.querySelector("#independence_bnt");
    let bnt_father_day = document.querySelector("#father_day_bnt");
    let bnt_mother_day = document.querySelector("#mother_day_bnt");
    let bnt_valenin_day = document.querySelector("#valentin_day_bnt");

    let btn_Calculate = document.querySelector("#btn_calculate");
    let btnDate = document.querySelector("#btn-calculate-date")

    let dateToday = (element) => {
        let today = document.querySelector("#today")
        today.innerHTML = `<b>${date.getDate()}/${element}${month + 1}/${date.getFullYear()}</b>`
    }

    let date = new Date()
    month = date.getMonth()
    if (month >= 10) {
        dateToday("")
    } else {
        dateToday("")
    }

    let span = () => { document.querySelector("#load").style.display = "none"; }

    const calculate_Age = () => {
        let age_input = parseInt(document.querySelector("#input_year").value);
        let span_result = document.querySelector("#span_result");
        if (isNaN(age_input)) {
            swal("Oops!", "Algo salió mal", "error");
        } else if (age_input <= 0) {
            swal("Oye!", "No puedes digitar años negativos", "error");
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
        showdate.innerHTML = `<h3 id="holidays_h3">Faltan: ${Math.round(diferent_date / milisegundosdias)} días para ${nameday}</h3>`
    }

    const time_init = () => {
        let clock_init = document.querySelector("#clock");
        const clock = new Date()
        hours = clock.getHours()
        minutes = clock.getMinutes()
        seconds = clock.getSeconds()
        let ampm;
        if (hours >= 12) {
            hours = hours - 12
            ampm = 'PM'
        } else {
            ampm = 'AM'
        }
        if (hours < 10) {
            hours = "0" + hours
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        clock_init.innerHTML = `
        <div class="row align-items-center">
            <div class="col">
                <h1 class="box-clock" id="hours">${hours}:</h1>
            </div>

            <div class="col">
                <h1 class="box-clock" id="minutes">${minutes}:</h1>
            </div>

            <div class="col">
                <h1 class="box-clock" id="seconds">${seconds}</h1>
            </div>

            <div class="col">
                <h1 class="box-clock" id="ampm">${ampm}</h1>
            </div>
        </div>`
        span();
    }

    const calculateDate = () => {
        let date1 = document.querySelector("#date1").value;
        let date2 = document.querySelector("#date2").value;
        let test = document.querySelector("#test")
        const newDate1 = new Date(date1)
        const newDate2 = new Date(date2)
        let milisegundosdias = 24 * 60 * 60 * 1000
        const diferent_date = Math.abs(newDate1.getTime() - newDate2.getTime())
        if (date1 == date2) {
            swal("Cuidado!", "Son las mismas fechas", "warning");
        } else {
            test.innerHTML = `<input type="text" class="form-control text-center form-control-lg" value="${Math.round(diferent_date / milisegundosdias)} días" disabled readonly>`
        }
    }

    setInterval(time_init, 1000)

    bnt_new_year.addEventListener("click", function () {
        holidays("#show_date_year", "12/31/2021", "Año Nuevo")
    })

    bnt_christmas.addEventListener("click", function () {
        holidays("#show_date_chrismas", "12/25/2022", "Navidad")
    })

    bnt_day_dead.addEventListener("click", function () {
        holidays("#show_date_day_of_dead", "11/01/2022", "Día de muertos")
    })

    bnt_halloween.addEventListener("click", function () {
        holidays("#show_date_halloween", "10/31/2022", "Halloween")
    })

    bnt_independence.addEventListener("click", function () {
        holidays("#show_date_independence", "09/16/2022", " la Independencia de México")
    })

    bnt_father_day.addEventListener("click", function () {
        holidays("#show_date_father_day", "06/20/2022", " el día del padre")
    })

    bnt_mother_day.addEventListener("click", function () {
        holidays("#show_date_mother_day", "10/10/2022", " el día del madres")
    })

    bnt_valenin_day.addEventListener("click", function () {
        holidays("#show_date_valentin_day", "02/14/2022", " San Valentín")
    })

    btn_Calculate.addEventListener("click", calculate_Age)

    btnDate.addEventListener("click", function () {
        calculateDate()
    })
})