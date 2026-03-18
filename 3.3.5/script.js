alert("Fachá to")

let podminka = !false;

podminka = true && true;

podminka = false || true;

console.log(podminka)

// Podmínka přes "if"

let number = 10;
let message;

if (number > 0) {
    message = "Kladné číslo;"
} else {
    message = "Není kladné"
}

console.log(message);

// Druhé řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "Kladné číslo" : "Není kladné"

console.log(message2)

let věk = 18;
let message3 = (věk >= 18) ? "Můžeš pít pívo" : "Ještě musíš pít colu"

console.log(message3)
