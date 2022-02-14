//transitin
const transition_tag = document.querySelector('.transition')
const tranButton_tag = document.querySelector('.tranbutton')

tranButton_tag.addEventListener('click', () => {
    transition_tag.classList.add('runTransition');
});

//transform
const transform_tag = document.querySelector('.transform')
const transformButton_tag = document.querySelector('.transfrombutton')

transformButton_tag.addEventListener('click', () => {
    transform_tag.classList.add('runTransform');
});

//animation 
const animation_tag = document.querySelector('.animation')
const animationButton_tag = document.querySelector('.animationbutton')

animationButton_tag.addEventListener('click', () => {
    animation_tag.classList.add('runanimation');
});
