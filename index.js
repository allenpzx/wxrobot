const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 9090;
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('*', (req, res, next)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`App is listened on localhost: ${PORT}`)
});