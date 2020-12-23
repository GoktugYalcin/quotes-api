var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const { exists } = require('fs');
const { exit } = require('process');
var app = express();

var sozler = require('./quotes.json');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Aktiflestirilen port : ", port);
  });

app.get('/', function(req, res){
    res.send(sozler);
});

app.get('/api', function(req, res){
    res.send(sozler);
});

app.get('/api/teapot', function(req, res){
    res.send({icerik: "Gun gelecek; buralar dutluktan fazlasi olacak", sahibi: "A. Goktug Yalcin"});
});

app.get('/api/sozler/:num', function(req, res){
   if(!req.params.num)
    {
        res.send({hata:"bir seyler olmadiysa bile, kesin bi sey oldu"});
    }
    else{
        if(Number.isFinite(Number(req.params.num)))
            {
                res.send(sozler[req.params.num]);
                console.log("LOG: Request edilen kayit getirildi!");
            }
        else
            res.send({hata: "bir sayi girmeliydiniz."});
    }

});

app.get('/api/sozler', function(req, res){
    res.send(sozler);
    console.log("LOG : Tüm sözler getirildi!");
 });

app.get('/api/rastgele', function(request, response){
    var item = sozler[Math.floor(Math.random() * sozler.length)];
    response.send(item);
    console.log("LOG : Rastgele getirildi!");
 });

app.get('/api/dizi/:num', function(req,res){
    if(!req.params.num)
    {
        res.send({hata:"bir seyler olmadiysa bile, kesin bi sey oldu"});
    }
    else{
        if(Number.isFinite(Number(req.params.num)))
            {
                const karisik = sozler.sort(() => 0.5 - Math.random());
                let secilenler = karisik.slice(0, Number(req.params.num));
                res.send(secilenler);
                console.log("LOG : "+req.params.num+" adet rastgele girdi getirildi!");
            }
        else
            res.send({hata: "bir sayi girmeliydiniz."});
    }
});