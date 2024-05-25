console.log('dom events');
const getH1 = document.querySelector('h1');
getH1.style.textAlign = 'center'
console.log(getH1)

// ---- 2nd method -----
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    document.getElementById('addText').innerText = 'Blue'
}

// -----3rd method -----
const makePurpleBtn = document.getElementById('make_purple');
makePurpleBtn.onclick = makePurple;

function makePurple(){
document.body.style.backgroundColor = 'purple';
document.getElementById('addText').innerText = 'Purple'
}

// ----- 3rd another[***] ----
const resetBtn = document.getElementById('reset');
resetBtn.onclick = function () {
document.body.style.backgroundColor = 'white'
document.getElementById('addText').innerText = 'White'
}

// ------ 4th method -----
const makeTomato = document.getElementById('make_tomato');
makeTomato.addEventListener('click', function () {
document.body.style.backgroundColor = 'tomato'
document.getElementById('addText').innerText = 'Tomato'
}) 

// ------ 4th another -----
document.getElementById('make_green').addEventListener('click', makeGreen);
function makeGreen() {
    document.body.style.backgroundColor = 'green'
    document.getElementById('addText').innerText = 'Green'
}

// ------ Final Version ------
document.getElementById('make_yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
    
    document.getElementById('addText').innerText = 'Yellow'
})