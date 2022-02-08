const bodyElement = document.getElementsByTagName('body')[0]
/*
const parentDiv = document.getElementsByClassName('parent')
console.log ('parent Div ', parentDiv)

const Id = document.getElementById ('myId')
console.log ('div with Id ', Id) 
*/

/*
<div class = 'parent' > 
    <div class = 'child'> chileOne <div>
    <div class = 'child'> chileTwo <div>
<div>
*/

const parentDiv = document.createElement ('div')
parentDiv.classList.add('parent') // add class = 'parent'

const child1Div = document.createElement ('div')
child1Div.classList.add ('child')
child1Div.append ('chileOne')

const child2Div = document.createElement ('div')
child2Div.classList.add ('child')
child2Div.append ('chileTwo')

// to add body 
parentDiv.append (child1Div, child2Div) // add <div 'parent '> <div class = 'child'> <div>
bodyElement.appendChild(parentDiv)

const style = document.getElementsByClassName('test')[0]
console.log ('styel => width : ',getComputedStyle(style).width)
console.log ('styel => height : ',getComputedStyle(style).height)
console.log ('styel => background-color : ',getComputedStyle(style).backgroundColor)

