import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe)
const time = localStorage.getItem(`videoplayer-current-time`);

function setPlayerCurrentTime() {
    if (time) { player.setCurrentTime(time); return}
    player.setCurrentTime(0)
}

setPlayerCurrentTime()
    
        player.on(`timeupdate`, throttle(function ({seconds}) {
            localStorage.setItem("videoplayer-current-time", seconds)
        }, 1000))