// tady je místo pro náš program

// Domací úkoly

// 1 vlastnostni a metody
const title = "Harry Potter"
title.length
title.toUpperCase()
title.slice(0, 5)
title.slice(title.length - 5, title.length)

// 2 E-maily
const email = prompt("Zadej e-mail:")
const atIndex = email.indexOf("@")
const parsedEmail = {
    jmeno: email.slice(0, atIndex),
    domena: email.slice(atIndex + 1),
}

document.body.innerHTML = "<p>Uživatelkské jméno: " + parsedEmail.jmeno +  "</p>"
document.body.innerHTML += "<p>Doména: " + parsedEmail.domena + "</p>"

// Poznámky z hodiny
/*

// Objekty
const adresa = {
    ulice: "Pod Kaštany",
    cislo: 31,
    mesto: "Horní Dlouhodosy",
    psc: "123 11"
}


let vstupUzivatel = prompt("Zadej správné číslo domu:")
adresa.cislo = Number(vstupUzivatel)


const user1 = {
    fullName: "Lubomír Větvička",
    login: "lubos",
    adresa: {
        ulice: "Pod Kaštany",
        cislo: 31,
        mesto: "Horní Dlouhodosy",
        psc: "123 11"
    }
}*/

/*
// Jednoduché destruktutování
const product = {
    name: "Mlýnek na kávu",
    price: 520,
    currency: "Kč"
}

const {name, price, currency} = product
*/

/*
// Úkol v hodině - realitka
const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

document.body.innerHTML += "<p>Dispozice: " + apartment.disposition + "</p>"
document.body.innerHTML += "<p>Čistý nájem: " + apartment.price.rent + "</p>"
document.body.innerHTML += "<p>Výměra bytu: " + apartment.area.floorage + apartment.area.units + "</p>"
*/

/*
// bod d - potřebuje doladit - destrukturování proměnných
const adresa = {
    city: 'Prague',
	district: 'Old Town'

const { city, district } = adresa
*/

/*
apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status +"</p>"

// Úkol v hodině - knihovna
const knihovna = {
    kniha1: {
        nazev: "Malý princ",
        autor: "Antoine de Saint-Ecupéry",
        pocetStran: 128,
        original: {
            nazevOriginal: "Le Petit Prince",
            rokVydani: 1943
        }
    },
    kniha2: {
        nazev: "Stařec a moře",
        autor: "Ernest Hemingway",
        pocetStran: 112,
        original: {
            nazevOriginal: "The Old Man and the Sea",
            rokVydani: 1952
        }
    }


}
*/