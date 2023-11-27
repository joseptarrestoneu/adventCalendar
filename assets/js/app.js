window.addEventListener("load", () => {

    const data = [
        {
            titleDay: 1,
            dateDay: new Date('11/01/2023 7:00 AM'),
            questionDay: "Quan ens vam conèixer?",
            response: [
                {
                    response: "El 31 de desembre de 2007",
                    result: true,
                    return: "Aquí va començar tot!",
                    imgResponse: [], 
                },
                {
                    response: "Quan es va originar l'Univers, entre que ho va decidir Deu i el Big Bang",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "Ens coneixem?",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/1.svg",
        },
        {
            titleDay: 2,
            dateDay: new Date('12/02/2023 7:00 AM'),
            questionDay: "Quina és la millor xocolata que hem provat mai?",
            response: [
                {
                    response: "Nestle",
                    result: true,
                    return: "Ummmm! Quins records! Llàstima que es va pujar de preu!!! Però si busques per casa trobaràs un regalet. On has de buscar? No el trobaras on guardem la xocolata. Massa fàcil! Hauràs de buscar on fem les pizzes!!",
                    imgResponse: "",
                },
                {
                    response: "Lindl",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "Simón Coll",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/2.svg",
        },
        {
            titleDay: 3,
            dateDay: new Date('12/03/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/3.svg",
        },
        {
            titleDay: 4,
            dateDay: new Date('12/04/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/4.svg",
        },
        {
            titleDay: 5,
            dateDay: new Date('12/05/2023 7:00 AM'),
            questionDay: "",response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/5.svg",
        },
        {
            titleDay: 6,
            dateDay: new Date('12/06/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/6.svg",
        },
        {
            titleDay: 7,
            dateDay: new Date('12/07/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/7.svg",
        },
        {
            titleDay: 8,
            dateDay: new Date('12/08/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/8.svg",
        },
        {
            titleDay: 9,
            dateDay: new Date('12/09/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/9.svg",
        },
        {
            titleDay: 10,
            dateDay: new Date('12/10/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/10.svg",
        },
        {
            titleDay: 11,
            dateDay: new Date('12/11/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/11.svg",
        },
        {
            titleDay: 12,
            dateDay: new Date('12/12/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/12.svg",
        },
        {
            titleDay: 13,
            dateDay: new Date('12/13/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/13.svg",
        },
        {
            titleDay: 14,
            dateDay: new Date('12/14/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/14.svg",
        },
        {
            titleDay: 15,
            dateDay: new Date('12/15/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/15.svg",
        },
        {
            titleDay: 16,
            dateDay: new Date('12/16/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/16.svg",
        },
        {
            titleDay: 17,
            dateDay: new Date('12/17/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/17.svg",
        },
        {
            titleDay: 18,
            dateDay: new Date('12/18/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/18.svg",
        },
        {
            titleDay: 19,
            dateDay: new Date('12/19/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/19.svg",
        },
        {
            titleDay: 20,
            dateDay: new Date('12/20/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/20.svg",
        },
        {
            titleDay: 21,
            dateDay: new Date('12/21/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/21.svg",
        },
        {
            titleDay: 22,
            dateDay: new Date('12/22/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/22.svg",
        },
        {
            titleDay: 23,
            dateDay: new Date('12/23/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/23.svg",
        },
        {
            titleDay: 24,
            dateDay: new Date('12/24/2023 7:00 AM'),
            questionDay: "",
            response: [
                {
                    response: "",
                    result: true,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
                {
                    response: "",
                    result: false,
                    return: "",
                    imgResponse: [],
                },
            ],
            imgDay: "././img/gallery/fulls/24.svg",
        },
    ]

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

})