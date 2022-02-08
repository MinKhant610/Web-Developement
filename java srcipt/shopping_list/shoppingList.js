const input = document.getElementsByClassName('form-control input')[0]
const order = document.getElementsByClassName ('order')[0]

let idNum = 1
const handleChange = (event) => {

    const inputValue = event.target.value 
    const spanTag = document.createElement('span')
    const trashIcon = document.createElement ('i')
    const trashSpan = document.createElement ('div')
    trashSpan.classList.add('trashSpan')
    order.append(trashSpan)
    trashIcon.classList.add ('fas','fa-trash','trash')
    spanTag.id = idNum
    spanTag.classList.add('spanInput')
    const proNum = idNum.toString() + ". "+ inputValue 
    spanTag.append(proNum)
    trashSpan.append(spanTag,trashIcon)
    idNum++
    trashIcon.addEventListener('click',del=()=>{
        trashSpan.remove()
    })
    input.value = ''
}
input.addEventListener('change',handleChange)
