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

let hspd = 0;
let x = 200;
let y = 200;
const vel = 5;

document.addEventListener('Keydown', (e) => {

    const up = (e.key === 'w');
    const down = (e.key === 's');

    hspd = (down - up) * vel;
    y += hspd;

    Cubo.style.top = y +'px';

});
