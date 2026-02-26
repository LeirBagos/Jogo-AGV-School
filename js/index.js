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
const bloco = document.getElementById("bloco")

let hspd = 0;
let vspd = 0;
let x = 200;
let y = 200;
const vel = 20;

document.addEventListener('keydown', (e) => {
    
    let newX = x;
    let newY = y;

    const up = (e.key === 'w');
    const down = (e.key === 's');
    const right = (e.key === 'd');
    const left = (e.key === 'a');

    vspd = (down - up) * vel;
    hspd = (right - left) * vel;

    x += hspd;
    y += vspd;

    if (!checkCollision(newX, newY)){

        x = newX;
        y = newY;
    };

    cubo.style.top = y + 'px';
    cubo.style.left = x + 'px';

});

function checkCollision(newX, newY){

    const playerRect = {
        left: newX,
        right: newX + 40,
        top: newY,
        bottom: newY + 40
    };

    const wallRect = {

        left: wall.offsetleft,
        right: wall.offsetleft + wall.offsetWidth,
        top: wall.offsetTop,
        bottom: wall.offsetTop + wall.offsetHeight
    };

    return (
        playerRect.right > wallRect.left &&
        playerRect.left < wallRect.right &&
        playerRect.bottom > wallRect.top &&
        playerRect.top < wallRect.bottom
    );
}