const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['pink','sky blue','grey','purple','yellow','aqua','pale green','orange'];
body.style.backgroundColor = 'yellow';
document.addEventListener('click',function(){
    const colorindex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorindex];
})