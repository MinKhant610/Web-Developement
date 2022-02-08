// CRUD 

// create 
const h1Element = document.createElement('h1')
const textNode = document.createTextNode('Welcome to Code with Chill')
h1Element.appendChild(textNode)

const tagCollection = document.getElementsByTagName('body')
const bodyElement = tagCollection[0]
bodyElement.appendChild(h1Element)

const h2Element = document.createElement('h2')
const text2Node = document.createTextNode('Welcome to Coding with Chill')
h2Element.appendChild(text2Node)

const tagCollection2 = document.getElementsByTagName ('body')
const bodyElement2 = tagCollection2 [0]
bodyElement2.appendChild(h2Element)

// read 
const readElement = document.getElementsByTagName ('h1')[0]
console.log ('Text inside h1 element before update : ',readElement.textContent)

// update 
readElement.textContent = 'Welcome to Coding with Chill'
console.log ('Text inside h1 element after update : ',readElement.textContent)

// delet 
// readElement.remove()