const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000

// Custom response
app.use(require('./configs/middleware'))


app.get('/api/', (req, res)=>{
    res.send({status: 'ok'})
})

app.use('/api/user', require('./routes/user'))

app.use(express.static(`${__dirname}/www`))
app.get('*', (req, res)=>{
    res.sendFile(`${__dirname}/www`)
})

app.listen(port, () => console.log(`Server is running on port ${port}`))