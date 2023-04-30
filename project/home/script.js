let red_color = document.querySelectorAll('.red');
let blue_color = document.querySelector('.blue');
let yellow_color = document.querySelector('.yellow');

const first_red = red_color[0];
const second_red = red_color[1];
const third_red = red_color[2];
const four_red = red_color[3];

const home = document.querySelector('.home');
const roof = document.querySelector('.roof');
const home_back = document.querySelector('.home-back');
const home_window = document.querySelector('.home-window');
const home_door = document.querySelector('.home-door');

second_red.addEventListener('click',  ()=> {
    // let home_first = home.children[1].className;
    console.log('hello');
    
})


blue_color.addEventListener('click',  ()=> {
    roof.style.backgroundColor = 'blue';
})

yellow_color.addEventListener('click',  ()=> {
    roof.style.backgroundColor = 'yellow';
})