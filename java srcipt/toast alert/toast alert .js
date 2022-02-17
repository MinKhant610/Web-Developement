const buttton_tag = document.querySelector('.btn')
const parent_tag = document.querySelector('.parent')

const diplayText = (text) => {
    setTimeout(() => {
        text.style.bottom = '0px'
    }, 100)
    setTimeout(() => {
        text.style.bottom = `-${text.offsetHeight + 18}px`
    }, 2000)
}

const openText = () => {
    parent_tag.innerHTML = ''
    const text_div = document.createElement('div')
    text_div.classList.add ('alert')
    text_div.append('link coppied')
    parent_tag.append(text_div)
    text_div.style.bottom = `-${text_div.offsetHeight}px`
    diplayText(text_div)
}

buttton_tag.addEventListener ('click', ()=> {
    openText ()
})

