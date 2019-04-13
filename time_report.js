const googlehome = require('google-home-notifier');
const language   = 'us';
const ipAddress  = '192.168.10.151';

const date  = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const message = 'It is ' + hours + ' ' + minutes;


googlehome.ip(ipAddress, language);

if(process.argv.length <= 2) {
    googlehome.notify(message, function(notifyRes) {
        console.log(notifyRes);
    });
} else {
    // change voice audio source
    googlehome.play("http://192.168.10.101:8118/" + process.argv[2], (res) => {
        console.log(res);
    });

}

