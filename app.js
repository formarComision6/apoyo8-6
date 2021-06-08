const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')));
app.get('/about',(req,res) => res.sendFile(path.resolve(__dirname, 'views','about.html')));
app.get('/contact',(req,res) => res.sendFile(path.resolve(__dirname, 'views','contact.html')));



app.listen(port, () => console.log('server runing in port ' + port))