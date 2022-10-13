// persona nella classe di epicode
let utentofclass = [
    {
        "id":1,
        "name": "andrea",
        "cognome": "savignano"
    },
    {
        "id":2,
        "name": "antonino",
        "cognome": "chindemi"
    },
    {
        "id":3,
        "name": "bruno",
        "cognome": "stano"
    },
    {
        "id":4,
        "name": "cristiano",
        "cognome": "maria aliotta"
    }
]

let stringofpeople =  JSON.stringify(utentofclass)

localStorage.setItem('utent-of-class', stringofpeople)

// film visti
let film = [
    {
        "id":1,
        "film_name": "lo hobbit"
    },
    {
        "id":2,
        "film_name": "Avengers"
    },
    {
        "id":3,
        "film_name": "batman"
    },
    {
        "id":4,
        "film_name": "rocky"
    }
]

let stringofilm =  JSON.stringify(film)

localStorage.setItem('film_visti', stringofilm)

// creazione del tempo

let oracorrente = new Date ()

let stringofdate = JSON.stringify(oracorrente)

sessionStorage.setItem('ora_corrente', stringofdate)


