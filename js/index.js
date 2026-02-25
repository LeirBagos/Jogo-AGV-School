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
let x = 300;
let y = 200;
const vel = 10;

document.addEventListener('keydown', (e) => {

    const up = (e.key === 'w');
    const down = (e.key === 's');
    const right = (e.key === 'd');
    const left = (e.key === 'a');

    vspd = (down - up) * vel;
    hspd = (right - left) * vel;

    x += hspd;
    y += vspd;

    cubo.style.top = y + 'px';
    cubo.style.left = x + 'px';

});
