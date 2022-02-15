const humburgerOnOff_tag = document.querySelector('.humburgerOnOff')
const humburger_tag = document.querySelector('.humburger')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

humburger_tag.addEventListener('click', ()=> {
    if (humburger_tag.classList.contains('clicked')){
        line1.classList.remove('plus45deg')
        line2.classList.remove('hide')
        line3.classList.remove('minus45deg')
        humburger_tag.classList.remove('clicked')
        humburgerOnOff_tag.style.display = 'none'
    }else{
        line1.classList.add('plus45deg')
        line2.classList.add('hide')
        line3.classList.add('minus45deg')
        humburger_tag.classList.add('clicked')
        humburgerOnOff_tag.style.display = 'block'
    } 
})
