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


//Movimentando com o teclado

const cubo = document.getElementById("cubo");

let hspd = 0;
let vspd = 0;
let x = 200;
let y = 200;
const vel = 20;

document.addEventListener('keydown', (e) => {
    

    let up = (e.key === 'w');
    let down = (e.key === 's');
    let right = (e.key === 'd');
    let left = (e.key === 'a');

    vspd = (down - up) * vel;
    hspd = (right - left) * vel;

    x += hspd;
    y += vspd;

    cubo.style.top = y + 'px';
    cubo.style.left = x + 'px';

});
