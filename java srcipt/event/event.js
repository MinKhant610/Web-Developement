const clickBut = document.getElementById ('clickBut')
const image = document.getElementsByClassName ('logo')[0]
const firstImg = image.src;
const imgArr = [
    'https://bit.ly/33Y4CRV',
    'https://bit.ly/3AtnFzF',
    'https://bit.ly/3rOShrI',
    'https://bit.ly/3tSnBbI',
    'https://bit.ly/3AnvDdP'
]

let i = 0 ;
const myfun = () => {
    if (i === 5){
        image.src = firstImg 
        i = 0 
        return
    }
    
    image.src = imgArr[i]
    i += 1 
    console.log ('count ',i)
}
/*
clickBut.onclick = myfun 
clickBut.onclick = myfun2
*/
clickBut.addEventListener('click',myfun)