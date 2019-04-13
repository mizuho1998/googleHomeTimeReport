const express    = require('express');
const serverPort = 8118;
const app        = express();
const rootPath   = './audio';

app.use(express.static(rootPath, { index: false }));
app.listen(serverPort, ()=> {
    console.log('audio server port: ' + serverPort);
});