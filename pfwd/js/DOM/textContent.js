let box1 = document.querySelector('#box1');
box1.textContent= "Hello  <b> DOM </b> ";
box1.style.color = 'red';

document.querySelector('#box2').innerHTML= "Hello <b> DOM </b>";

let hello = document.createTextNode('Hello DOM');
document.querySelector('#box3').appendChild(hello);

let create_ele = document.createElement('div');
create_ele.textContent = "Hello I am create Element";
document.querySelector('#box3').appendChild(create_ele);

// to remove element 
// document.querySelector('#box3').remove(); 
