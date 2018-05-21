const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res)=>{  //incoming req (variable etc), res - the answer
    //res.send('<h1>Hello Express</h1>');
    // res.send({
    //     name: 'Daniel',
    //     likes: [
    //         'Suki',
    //         'Running'
    //     ]
    // });
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hello, welcome!!'
    })
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: 'Something went wrong'
    });
});

app.listen(3080, () => {
    console.log('Server is up on port 3080');
});