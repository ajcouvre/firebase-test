const functions = require('firebase-functions')

module.exports = {
    hello: functions.https.onRequest((req, res) => {
        // const subject = req.query.subject || 'World'
        res.send('Test Did Not Deploy')
    }),
    goodbye: functions.https.onRequest((req, res) => {
        res.send('Goodbye from a single function')
    })
}
