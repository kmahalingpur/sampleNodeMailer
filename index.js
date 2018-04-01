var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var apiHelper=require('./routes/apiHelper')




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});


app.post('/resetPassword', function (req, res, next) {

    console.log("resetPassword", req);

    apiHelper.sendMail(req.body.email, req.body.url, req.body.name, function (success) {
        res.json(success);
    })

})
app.get('/reset/:token', function (req, res, next) {
    console.log(req.params.token)
    res.render('reset.html')

})
app.post('/change', function (req, res, next) {
    console.log("in change",req.body)
    res.status('200').json({success:true})

})

module.exports = app;
