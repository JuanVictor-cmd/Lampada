const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken ()) {
        lamp.src = './assets/ligada.png';
    }
}

function lampOff (){
    if (!isLampBroken ()) {
        lamp.src = './assets/desligada.png';
    }
}

function lampBroken (){
    lamp.src = './assets/quebrada.png';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
