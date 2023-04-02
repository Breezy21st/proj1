//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
   module.exports = require('./prod');
} else {
   module.exports = require('./dev');
}

//mongoDB user: prod, pass: 4Y3NeVL8q19nfcqa
// mongodb+srv: //prod:4Y3NeVL8q19nfcqa@cluster0.xmvtzkk.mongodb.net/emailyprod?retryWrites=true&w=majority

// googleClientID: 576649473028-5k11attpsbh5nrdaau0565a3gmg68ed2.apps.googleusercontent.com
// googleClientSecret: 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