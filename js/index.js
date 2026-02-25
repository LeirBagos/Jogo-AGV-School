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

const cubo = document.getElementById("cubo");
//Movimentando com o teclado

let hspd = 0;
let vspd = 0;
let x = 0;
let y = 0;
const vel = 5;

document.addEventListener('keydown', (e) => {

    const up = (e.key === 'w');
    const down = (e.key === 's');
    const right = (e.key === 'd');
    const left = (e.key === 'a');

    hspd = (down - up) * vel;
    vspd = (left - right) * vel;

    x += vspd;
    y += hspd;

    cubo.style.top = y +'px';
    cubo.style.left = x +'px';

});
