const helloWorld = () => {
    return "Hello, World!";
};

const obj = {
    prop: {
        name: "Leir Bagos",
        info: {
            youtube: "/Leir Bagos",
        },
    },
};

const Cubo = document.getElementById("Cubo");
s;
//Movimentando com o teclado

let x = 200;
let y = 200;
const velocidade = 5;

document.addEventListener("Keydown", function (event) {
    if (event.key === "w") y -= velocidade;
    if (event.key === "s") y += velocidade;
    if (event.key === "a") x -= velocidade;
    if (event.key === "d") x += velocidade;

    Cubo.style.left = x + "px";
    Cubo.style.top = y + "px";
});
