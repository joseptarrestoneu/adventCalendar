window.addEventListener("load", () => {

    // Diccionario y titulos
    const dataInitial = {
        languages: ["ca","es","in"],
        titleCalendar: ["Calendari d'Advent Javascript 2023","Calendario de Adviento Javascript 2023","Javascript Advent Calendar 2023"],
        descriptionCalendar: [
            "A l’Alemanya protestant els nens encenien una espelma cada dia d’advent. Aquest serà un calendari on podreu avaluar els vostres coneixaments de Javascript, consistent en reptes que haureu de resoltre. Podreu esperar?",
            "En la Alemania protestante los niños encendían una vela todos los días de adviento. Éste será un calendario donde podreis evaluar vuestros conocimientos de Javascript, consistente en retos que debereis resolver. ¿Podreis esperar?",
            "In Protestant Germany, children lit a candle every day of Advent. This will be a calendar where you can evaluate your Javascript knowledge, consisting of challenges that you will have to solve.. Can you wait?"
        ]   ,
        dayDescription: ["dies", "días", "days"],
        buttonAccess: ["Acceder. Vamos!", "Accedir, Som'hi!", "Entry. Come on!"],
    }

    // Seleccionar idioma
    let position = 1;
    let newPosition = 1;
    let image;
    document.addEventListener("click", (event) => {
        position = event.target.id
        if (position == 0) {
            newPosition = 1;
            image = `<img src="https://flagcdn.com/16x12/es.png" alt="Español" id="${newPosition}" class="languages"></img>`
        } else if (position == 1) {
            newPosition = 2;
            image = `<img src="https://flagcdn.com/16x12/gb.png" alt="Inglés" id="${newPosition}" class="languages"></img>`
        } else if (position == 2) {
            newPosition = 0;
            image = `<img src="./img/gallery/thumbs/bandera catalana.png" alt="Català" id="${newPosition}" class="languages"></img>`
        }
        document.querySelector(".language_selector").innerHTML = image
        
        // Insertar título
        document.querySelector(".title").innerText = dataInitial.titleCalendar[newPosition]
        
        // Insertar descripcion
        document.querySelector(".title2").innerText = dataInitial.descriptionCalendar[newPosition]
    
        // Insertar texto boton
        document.querySelector(".button_access").firstElementChild.innerText = dataInitial.buttonAccess[newPosition]
    })


    // Cuenta atras
    let end = new Date('12/01/2023 6:00 PM');
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;
    function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            let acive = document.querySelector('.clock')
            acive.classList.add("desactive")
            let noActive = document.querySelector('.button')
            noActive.classList.remove("desactive")
            noActive.classList.add("active")
            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days+` ${dataInitial.dayDescription[newPosition]}`;
        if ( hours < 10 ) {
            document.getElementById('hours').innerHTML = '0'+hours+':';
        } else {
            document.getElementById('hours').innerHTML = hours+':';
        }
        if ( minutes < 10 ) {
            document.getElementById('minutes').innerHTML = '0'+minutes+':';
        } else {
            document.getElementById('minutes').innerHTML = minutes+':';
        }
        if ( seconds < 10 ) {
            document.getElementById('seconds').innerHTML = '0'+seconds;
        } else {
            document.getElementById('seconds').innerHTML = seconds;
        }
    }
    timer = setInterval(showRemaining, 1000);

});