function dejMi3() {
    return 3;
}

console.log (dejMi3())

//funkce s logem
function nasobic(a,b) {
    console.log(a*b);
}

let r = nasobic(5,3)
console.log(r)

//funkce s return

function nasobic2(a,b) {
    return a * b;
}

let r2= nasobic2(5,3)
console.log(r2)

// return ukončí funkci

function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B"); // toto neprojde
} 

let konec2 = konec();
console.log(konec())

// cvičení 

//1. vytvoř funkci "je sudé"
//2. podminka, jestli je sudé, vypíš boolean true
//3. jestli je liché vypiš boolean false
//4. Návratová hodnota vrací výsledek

// jeSude(20) -> true
//jeSude(7) -> false

function jeSude(cislo) {
    return cislo % 2 === 0;
 }
    
console.log(jeSude(20));
console.log(jeSude(7));
   