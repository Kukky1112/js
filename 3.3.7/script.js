function rekniAhoj() {
    console.log("čus bus");

}

rekniAhoj();
rekniAhoj();

let pozdrav = "Pozdrav!";

function ukazPozdrav() {
    console.log(pozdrav)
}

function testLocal() {
    let localValue = 123;
    console.log(localValue)
}

ukazPozdrav();
testLocal();


// tady byla chyba

if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);
    
//Parametr & Argument

function sayHello(name) { // name = parametr
     console.log("Ahoj" + name);
}

sayHello("Alice");

function scitani(num1, nuum2) {
    console.log(num1 + nuum2);
    console.log(num1 - nuum2);
    console.log(num1 * nuum2);
    console.log(num1 / nuum2);
}

scitani(5,8);


function poradnik(zacatek, konec) {
    for (let i = zacatek; i <= konec; i++)
        console.log(i);
}

poradnik(5,20);