const playListContainerTag = document.getElementsByClassName('playListContainer')[0]
const audioTag = document.getElementsByClassName('audioTag')[0]
const currentAndTotalTimeTag = document.getElementsByClassName('currentAndTotalTime')[0]
const currentProgressTag = document.getElementById('currentProgress')
const playButtonTag = document.getElementsByClassName('playButton')[0]
const pauseButtonTag = document.getElementsByClassName('pauseButton')[0]
const previousButtonTag = document.getElementsByClassName('previousButton')[0]
const nextButtonTag = document.getElementsByClassName('nextButton')[0]
const slider = document.getElementById('durationSlider')
const currentPlayingMusicTag = document.getElementsByClassName('currentPlayingMusic')[0]

let durationText = '00:00'

const tracks = [
    {trackId : "../lofi/track1.mp3", title :"watr-fluid"} ,
    {trackId : "../lofi/track2.mp3", title :"travel-to-the-city"} ,
    {trackId : "../lofi/track3.mp3", title :"stay-at-home-for-christmas"} ,
    {trackId : "../lofi/track4.mp3", title :"sexy-fashion-beats"} ,
    {trackId : "../lofi/track5.mp3", title :"sanctuary"} ,
    {trackId : "../lofi/track6.mp3", title :"modern-chillout"} ,
    {trackId : "../lofi/track7.mp3", title :"we-own-the-night-roll-out"} ,
    {trackId : "../lofi/track8.mp3", title :"till-the-end"} ,
    {trackId : "../lofi/track9.mp3", title :"sleepy-cat"} ,
    {trackId : "../lofi/track10.mp3", title :"peace"} ,
    {trackId : "../lofi/track11.mp3", title :"just-breath"} ,
    {trackId : "../lofi/track12.mp3", title :"hip-hop"} ,
    {trackId : "../lofi/track13.mp3", title :"close-the-lights"} ,
    {trackId : "../lofi/track14.mp3", title :"boulevard"} ,
    {trackId : "../lofi/track15.mp3", title :"21-years"} ,
    {trackId : "../lofi/track16.mp3", title :"lofi-hip-hop"} ,
    {trackId : "../lofi/track17.mp3", title :"lofi-chill-x2"} ,
    {trackId : "../lofi/track18.mp3", title :"let-it-go"} ,
    {trackId : "../lofi/track19.mp3", title :"jazzy-abstract-beat"} ,
    {trackId : "../lofi/track20.mp3", title :"i-wish-i-could-sleep"} ,
    {trackId : "../lofi/track21.mp3", title :"indie-folk-king-around-here"} ,
    {trackId : "../lofi/track22.mp3", title :"hidden-place"} ,
    {trackId : "../lofi/track23.mp3", title :"freshness"} ,
    {trackId : "../lofi/track24.mp3", title :"food-vlog"} ,
    {trackId : "../lofi/track25.mp3", title :"coffee-chill-out"} ,
    {trackId : "../lofi/track26.mp3", title :"both-of-us"} ,
    {trackId : "../lofi/track27.mp3", title :"cinematic-chillhop"} ,
    {trackId : "../lofi/track28.mp3", title :"christmas-chill"} ,
    {trackId : "../lofi/track29.mp3", title :"bossa-in-my-heart"} ,
    {trackId : "../lofi/track30.mp3", title :"ASUJ36G-chill"} ,
    {trackId : "../lofi/track31.mp3", title :"walk-with-you"}  
]

const auto = () => {
    if (audioTag.currentTime === audioTag.duration){
        currentPlayingIndex += 1 
        const songIdToPlay = tracks [currentPlayingIndex].trackId
        audioTag.src = songIdToPlay 
        audioTag.play()
        updatePlayAndPauseButton()
        const name = tracks[currentPlayingIndex].title
        currentPlayingMusicTag.textContent = name
    }
}

const songName = (currentPlayingIndex) => {
    const songName = tracks [currentPlayingIndex].title
    currentPlayingMusicTag.textContent = songName    
}

for (let i = 0; i < tracks.length; i++){
    const trackTag = document.createElement('div')
    trackTag.addEventListener('click', () => {
        const trackId = tracks[i].trackId 
        audioTag.src = trackId
        audioTag.play()
        isPlaying = true
        songName(i)
        updatePlayAndPauseButton()
    })
    trackTag.classList.add('trackItem')
    const title = (i+1).toString() + " .  " + tracks[i].title
    trackTag.textContent = title
    playListContainerTag.append(trackTag)
}

let duration ;
audioTag.addEventListener('loadeddata', () => {
    duration = Math.floor(audioTag.duration)
    durationText = createMinuteAndSecondText(duration)
})



audioTag.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audioTag.currentTime)
    const currentTimeText = createMinuteAndSecondText(currentTime)
    const currentTimeTextAndDuration = currentTimeText + ' / ' + durationText
    currentAndTotalTimeTag.textContent = currentTimeTextAndDuration
    updateCurrentProgress(currentTime)
})

const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (300/duration) * currentTime
    currentProgressTag.style.width = currentProgressWidth.toString() + 'px'
    auto()
}

const createMinuteAndSecondText = (totalSecond) => {
    const minutes = Math.floor(totalSecond/60)
    const seconds = totalSecond%60

    const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes
    const secondText = seconds < 10 ? '0' + seconds.toString() : seconds
    
    return minuteText + ":" + secondText

}

let currentPlayingIndex = 0 
playButtonTag.addEventListener('click', () => {
    isPlaying = true

    const currentTime = Math.floor(audioTag.currentTime)
    if (currentTime === 0) {
        currentPlayingMusicTag.textContent = tracks[0].title
        songIdToPlay()
        updatePlayAndPauseButton ()
    }else {
        audioTag.play()
        updatePlayAndPauseButton ()
        
    }
})

pauseButtonTag.addEventListener('click', () => {
    isPlaying = false 
    audioTag.pause()
    updatePlayAndPauseButton()
})

previousButtonTag.addEventListener('click', () => {
    if (currentPlayingIndex === 0 ){
        currentPlayingIndex = tracks.length  
        audioTag.src = tracks [currentPlayingIndex].trackId
        audioTag.play()
    }
    currentPlayingIndex -= 1 
    songName(currentPlayingIndex)
    songIdToPlay() 
    isPlaying = true
    updatePlayAndPauseButton()


})

nextButtonTag.addEventListener('click', () => {
    if (currentPlayingIndex === tracks.length -1) {
        currentPlayingIndex = 0  
        audioTag.src = tracks [currentPlayingIndex].trackId
        audioTag.play()
    }
    currentPlayingIndex += 1 
    songName(currentPlayingIndex)
    songIdToPlay()
    isPlaying = true
    updatePlayAndPauseButton()

})

const updatePlayAndPauseButton = () => {
    if (isPlaying){
        playButtonTag.style.display = 'none'
        pauseButtonTag.style.display = 'inline'
        slider.style.display ='block'
    }else {
        playButtonTag.style.display = 'inline'
        pauseButtonTag.style.display = 'none'
        slider.style.display ='none'
    }
}

const songIdToPlay = () => {
    const songIdToPlay = tracks [currentPlayingIndex].trackId
    audioTag.src = songIdToPlay 
    audioTag.play()
}

const changDuration = () => {
    sliderPosition = audioTag.duration * (slider.value  / 100)
    audioTag.currentTime = sliderPosition
    if (audioTag.src != tracks [currentPlayingIndex].trackId){
        slider.value = 0  
    }
}

