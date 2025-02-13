

export const currentIndex = $state({'current' : 0});

export const tracks = [
    { 'id' : "track_id: 01", 'name' : 'LVM_Bae.wav', 'src' : './public/assets/audio/LVM_bae.wav' },
    { 'id' : "track_id: 02", 'name' : 'LVM_Monster.wav', 'src' : './public/assets/audio/LVM_monster.wav' },
    { 'id' : "track_id: 03", 'name' : 'LVM_Great_Time.wav', 'src' : './public/assets/audio/LVM_great_time.wav' },
    { 'id' : "track_id: 04", 'name' : 'LVM_Pause.wav', 'src' : './public/assets/audio/LVM_pause.wav' },
    { 'id' : "track_id: 05", 'name' : 'LVM_Close.wav', 'src' : './public/assets/audio/LVM_close.wav' },
];

export let audio = new Audio();

export const playing = $state({ value: false });

export let audioContext = new AudioContext();
export let analyser = audioContext.createAnalyser();

