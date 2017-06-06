const express=require('express');
const hbs=require('hbs');
 var app = express();
 hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');
 app.get('/',(req,res)=>{
res.render('index.hbs',{
	title :'hello',
	year:new Date().getFullYear()

	});
 });

 app.listen(8080);