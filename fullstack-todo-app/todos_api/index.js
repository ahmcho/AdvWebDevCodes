var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	
var todoRoutes = require('./routes/todos');

app.use(express.json());
app.use(express.urlencoded({encoded: true}));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
	console.log("App is running on port " + port );
})