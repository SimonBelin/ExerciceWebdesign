function clock(){
    let hours = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    if ( h > 12){
        h = h - 12;
        var am = 'PM'; 
    }
    h = ( h < 10) ? '0' + h : h;
    m = ( m < 10) ? '0' + m : m;
    s = ( s < 10) ? '0' + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}
var interval =setInterval(clock, 1000);


let container = document.getElementById('blob');
let count = 200;
for (let i = 0; i < 200; i++){
    let gooeyBox = document.createElement('div')
    gooeyBox.className='box';
    container.appendChild(gooeyBox);
}

setInterval(function(){

let gooey = document.getElementsByClassName('box');
for (let i = 0; i< gooey.length; i++){
    gooey[i].style.left=Math.floor(Math.random()*90) + 'vw';
    gooey[i].style.top=Math.floor(Math.random()*80) + 'vh';

}

},2000)
