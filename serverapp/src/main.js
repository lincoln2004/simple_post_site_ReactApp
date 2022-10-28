const {app} = require('./server/index.js')


const port = 4000
app.listen(port, () => console.log(`server listen in port: ${port}`))