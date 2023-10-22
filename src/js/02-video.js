import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const LOCAL_KEY = `videoplayer-current-time`;

    player.on('timeupdate', throttle(function({seconds}) {
        localStorage.setItem(LOCAL_KEY, seconds);
    }, 1000));

        const time = localStorage.getItem(LOCAL_KEY) || 0;
        player.setCurrentTime(time);
