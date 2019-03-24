const googlehome = require('google-home-notifier');
const language   = 'us';
const ipAddress  = '192.168.10.104';

const date  = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const message = 'It is ' + hours + ' ' + minutes;


googlehome.ip(ipAddress, language);

googlehome.notify(message, function(notifyRes) {
    console.log(notifyRes);
});

