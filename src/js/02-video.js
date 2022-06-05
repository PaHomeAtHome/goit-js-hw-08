import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe)

    player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`))
    
        player.on(`timeupdate`, throttle(function ({seconds}) {
            localStorage.setItem("videoplayer-current-time", seconds)
        }, 1000))