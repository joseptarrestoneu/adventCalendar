window.addEventListener("load", () => {

    const data = [
        {
            titleDay: 1,
            dateDay: new Date('11/01/2023 7:00 AM'),
            questionDay: [
                "Comencem! Un amic nostre que treballa com a escriptor ha rebut l'encàrrec d'un relat curt i li paguen per lletres escrites i ens ha demanat un algorisme que permeti controlar el nombre de lletres en un text. Per provar-ho ens ha passat un fitxer amb lletres per comprovar que l'algortim funciona. Només ell sap el nombre de lletres que ha escrit. Quantes lletres hi ha?",
                "Empezamos! Un amigo nuestro que trabaja com escritor ha recibo el encargo de un relato corto y le pagan por letras escritas y nos ha pedido un algoritmo que le permita controlar el número de letras en un texto. Para provarlo nos ha pasado un archivo con letras para comprovar que el algortimo funciona. Solo el sabe el numero de letras que ha escrito. Cuantas letras hay?",
                "Let's start! A friend of ours who works as a writer has been commissioned to write a short story and is paid for letters written and has asked us for an algorithm that allows him to control the number of letters in a text. To test it, he has sent us a file with letters to verify that the algorithm works. Only he knows the number of letters he has written. How many letters are there?",
            ],
            response: 100000,
            imgDay: "././img/gallery/fulls/1.svg",
        },
        {
            titleDay: 2,
            dateDay: new Date('12/02/2023 7:00 AM'),
            questionDay: [
                "El nostre amic ha aconseguit millorar el seu tracte amb l'editorial que publicarà el llibre i a més de pagar-lo per lletres també li pagarà per paraula. Ens ha demanat un algorisme que calculi les lletres i paraules d'un text. Hem d'introduir el nombre de lletres i el nombre de paraules separades per un guió (Exemple: 989-100)",
                "Nuestro amigo ha conseguido mejorar su trato con la editorial que publicará su libro y ademas de pagarle por letras tambien le pagará por palabra. Nos ha pedido un algoritmo que calcule las letras y las palabras de un texto. Tenemos que introducir el número de letras y el número de palabras separadas por un guion (Ejemplo: 989-100)",
                "Our friend has managed to improve his deal with the publisher that will publish his book and in addition to paying him for letters he will also pay him per word. He has asked us for an algorithm that calculates the letters and words in a text. We have to enter the number of letters and the number of words separated by a hyphen (Example: 989-100)",
            ],
            response: "492500-98500",
            imgDay: "././img/gallery/fulls/2.svg",
        },
        {
            titleDay: 3,
            dateDay: new Date('12/03/2023 7:00 AM'),
                        questionDay: [
                "Carai amb el nostre amic! Ha tornat a aconseguir millorar el seu contracte i segons el tipus de paraula que aparegui en si el text pot cobrar més. Ens ha demanat un algorisme que permeti saber el nombre de vegades que apareix una paraula. A partir del text que ens ha passat ens demana que li diguem quantes vegades apareix la paraula 'oveja'.",
                "Carai con nuestro amigo! Ha vuelto a conseguir mejorar su contrato y segun el tipo de palabra que aparezca en si su texto puede cobrar mas. Nos ha pedido un algoritmo que le permita saber el número de veces que aparece una palabra. A partir del texto que nos ha pasado nos pide que le digamos cuantas veces aparece la palabra 'oveja'.",
                "Wow with our friend! He has once again managed to improve his contract and depending on the type of word that appears in his text he can charge more. You have asked us for an algorithm that allows you to know the number of times a word appears. Based on the text he has given us, he asks us to tell him how many times the word 'oveja' appears.",
            ],
            response: 14,
            imgDay: "././img/gallery/fulls/3.svg",
        },
        {
            titleDay: 4,
            dateDay: new Date('12/04/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/4.svg",
        },
        {
            titleDay: 5,
            dateDay: new Date('12/05/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],response: "",
            imgDay: "././img/gallery/fulls/5.svg",
        },
        {
            titleDay: 6,
            dateDay: new Date('12/06/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/6.svg",
        },
        {
            titleDay: 7,
            dateDay: new Date('12/07/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/7.svg",
        },
        {
            titleDay: 8,
            dateDay: new Date('12/08/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/8.svg",
        },
        {
            titleDay: 9,
            dateDay: new Date('12/09/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/9.svg",
        },
        {
            titleDay: 10,
            dateDay: new Date('12/10/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/10.svg",
        },
        {
            titleDay: 11,
            dateDay: new Date('12/11/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/11.svg",
        },
        {
            titleDay: 12,
            dateDay: new Date('12/12/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/12.svg",
        },
        {
            titleDay: 13,
            dateDay: new Date('12/13/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/13.svg",
        },
        {
            titleDay: 14,
            dateDay: new Date('12/14/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/14.svg",
        },
        {
            titleDay: 15,
            dateDay: new Date('12/15/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/15.svg",
        },
        {
            titleDay: 16,
            dateDay: new Date('12/16/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/16.svg",
        },
        {
            titleDay: 17,
            dateDay: new Date('12/17/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/17.svg",
        },
        {
            titleDay: 18,
            dateDay: new Date('12/18/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/18.svg",
        },
        {
            titleDay: 19,
            dateDay: new Date('12/19/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/19.svg",
        },
        {
            titleDay: 20,
            dateDay: new Date('12/20/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/20.svg",
        },
        {
            titleDay: 21,
            dateDay: new Date('12/21/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/21.svg",
        },
        {
            titleDay: 22,
            dateDay: new Date('12/22/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/22.svg",
        },
        {
            titleDay: 23,
            dateDay: new Date('12/23/2023 7:00 AM'),
                        questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/23.svg",
        },
        {
            titleDay: 24,
            dateDay: new Date('12/24/2023 7:00 AM'),
            questionDay: [
                "?",
                "",
                "",
            ],
            response: "",
            imgDay: "././img/gallery/fulls/24.svg",
        },
    ]

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
        descriptionAdventCalendar: [
            "Cada dia els diferents dibuixos es tornaran de color i podreu accedir-hi, amb un repte de Javascript dins de cadascun i obtenint un regal per cada repte resolt.",
            "Cada día los diferentes dibujos se colorearan y podreis acceder a ellos con un reto de Javascript dentro de cada uno y obteniendo un regalo para reto resuelto.",
            "Every day the different drawings will be colored and you will be able to access them with a Javascript challenge inside each one and obtaining a gift for the challenge solved."
        ]
    }

    // Seleccionar idioma
    let position = 1;
    let newPosition = 1;
    let image;
    let id;
    document.addEventListener("click", (event) => {
        // Actuar solamente si hacemos click en el icono del lenguaje        
        if (event.target.classList.contains("languages")) {
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
            document.querySelector(".title_calendarAdvent").innerText = dataInitial.titleCalendar[newPosition]
            
            // Insertar descripcion
            document.querySelector(".title2").innerText = dataInitial.descriptionCalendar[newPosition]
            document.querySelector(".explicacio").innerText = dataInitial.descriptionAdventCalendar[newPosition]
        
            // Insertar texto boton
            document.querySelector(".button_access").firstElementChild.innerText = dataInitial.buttonAccess[newPosition]
        
            // Insertar texto a cada pregunta
            document.querySelector(".question").innerText = data[id-1].questionDay[newPosition]
        
        }

        // Acceder a pantalla del reto del dia seleccionado
        if (event.target.classList.contains("imageDay")) {
            if (event.target.parentNode.classList.contains("active_link")) {
                id = event.target.parentNode.getAttribute("id");
                document.querySelector(".date").classList.remove("desactive")
                document.querySelector(".date").classList.add("activeDay") 
                let date = document.querySelector(".date")
                document.querySelector(".calendarAdvent").classList.add("desactive")
                date.classList.add("activeDay")
                date.innerHTML = `
                <img src="./img/gallery/fulls/${id}.svg" alt="">
                <div class="first">
                    <div class="question">${data[id-1].questionDay[newPosition]}</div>
                </div>
                <div class="second"">
                    <input type="text">
                    <div class="button_question">Comprovar</div>
                </div>
                `
            } 
        }
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

    // Activar i desactivar els links dels 24 dies del calendari 
    let now = new Date()
    let links = document.querySelectorAll(".title_day")
    data.forEach((element, index) => {
        links[index].innerText = element.dateDay.toLocaleDateString()
        if (element.dateDay >= now ) {
            links[index].nextElementSibling.classList.add("active")
            links[index].parentElement.classList.remove("active_link")
            links[index].parentElement.classList.add("desactive_link")
        }
    })

});