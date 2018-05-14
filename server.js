const express = require('express');

var app = express();

app.get('/', (req, res)=>{  //incoming req (variable etc), res - the answer
    //res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Daniel',
        likes: [
            'Suki',
            'Running'
        ]
    });
});

app.get('/about', (req, res)=>{
    res.send('About Page');
});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: 'Something went wrong'
    });
});

app.listen(3080);