let Nik = document.querySelector('.Nik');
let btn = document.querySelector('.btn');
let text = document.querySelector('.otz');
let otzivi = document.querySelector('.otzv');

btn.addEventListener('click', function(event){
    let div = document.createElement('div');
    div.classList.add('box');
    otzivi.insertBefore(div, otzivi.firstElementChild);

    let span = document.createElement('span');
    div.appendChild(span);
    span.innerHTML =  Nik.value + " пишет: " + text.value;

    Nik.value = Nik.value;
    text.value = "";
})