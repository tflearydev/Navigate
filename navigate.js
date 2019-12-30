var opn = require('opn');

// opens the url in the default browser 
opn('https://cnn.com');

// specify the app to open in 
opn('https://cnn.com', {app: 'firefox'});