const googlehome = require('google-home-notifier');
const language   = 'us';
const ipAddress  = '192.168.10.151';

const date  = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const message = 'It is ' + hours + ' ' + minutes;


googlehome.ip(ipAddress, language);

// googlehome.notify(message, function(notifyRes) {
//     console.log(notifyRes);
// });

// change voice audio source
googlehome.play("http://192.168.10.101:8118/0.mp3", (res) => {
    console.log(res);
});