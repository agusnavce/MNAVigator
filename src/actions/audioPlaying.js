import { 
    AUDIO_PLAYING, 
    AUDIO_TIME, 
    AUDIO_ERROR, 
    AUDIO_PAUSE,
    AUDIO_CURRENT_TIME
} from './types';

export const audioPlaying = (value) => {
    return {
        type: 'audio_playing',
        payload: value
    }
}

export const audioTime = (time) => {
    return { 
        type: 'audio_time',
        payload: time
    }
}

export const audioError = (err) => {
    return {
        type: 'audio_error',
        payload: err
    }
}

export const audioPaused = (value) => {
    console.log('passed in value is... ', value);
    return {
        type: 'audio_pause',
        payload: value
    }
}

export const audioCurrentTime = (currentTime) => {
    return {
        type: 'audio_current_time',
        payload: currentTime
    }
}