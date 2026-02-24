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

const cubo= document.getElementById("cubo")

//Movimentando com o teclado

let x = 200
let y = 200
const velocidade = 5

document.addEventListener('Keydown', (event) => {
    
    if (event.key === "w") y -= velocidade;
    if (event.key === "s") y += velocidade;
    if (event.key === "a") x -= velocidade;
    if (event.key === "d") x += velocidade;

    cubo.style.left = x + "px"
    cubo.style.top = y + "px"
    
});