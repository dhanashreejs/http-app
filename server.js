const express=require('express');//express
const mongoose=require('mongoose');//db
const path=require('path');//giving routing based on custom path
const app=express();
const api=require('./server/api');
app.use(express.json());
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/bookdb",{useNewUrlParser:true});
app.use(express.static(path.join(__dirname,'dist/http-app')));
app.use('/api',api);
//get Resource on http : GET
app.get('/',function(req,resp){
	resp.sendFile(path.join(__dirname),'dist/http-app/index.html');
});

app.listen(9999,()=>console.log('Listening port 9999'));