//1.feladat
function darabolas(number){
    const szam = []
    for (let i = 0; i < number.length + 1; i++) {
        szam.push(number[i] + " ")
    }
    return szam
}
console.log(darabolas(420))

//2.feladat
function parint(string){
    let szavak = "";
    if (parseInt(szavak) == "" || parseInt(szavak) == " " || parseInt(szavak) == " "){
        return szavak
    }
    else if (parseInt(szavak) == string){
        return Nan
    }
    else {
        return szavak
    }
}
console.log(parint("Valami"))

//3.feladat
function csere(string){
    let szoveg = "";
    let kicserelendok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "Ö", "Ő", "U", "Ú", "Ü", "Ű"]
    console.log(szoveg.replaceAll(kicserelendok, ""))
}
console.log(csere("This website is for losers LOL!"))

//4.feladat
function factorialis(number) {
    let faktor = number;
    for(let i = number; i != 1; i--){
        faktor = faktor*(i-1); 
    }
    return faktor
}
console.log(factorialis(3))
