/*For running server*/
const express = require('express');
/*Instance of the app*/
const app = express();
/*Dependencies*/
const bodyParser = require('body-parser');
/*Body-parser as middle-ware*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/*Cors for cross origin allowance*/
const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 8000;
app.listen(port, ()=>{console.log(`Running on localhost: ${port}`)});

/*GET Routes*/

app.get('/', function(req, res){

  res.sendFile(`${__dirname}/index.html`);
});

app.get('/entries', function(req,res){

  res.send(entries);
  console.log(entries);
});

/*POST Routes*/

const entries = [];

app.post('/add', addEntry);

function addEntry(req, res){
  newEntry = {
    "base": req.body.base
  };

  entries.push(newEntry);
  console.log(entries);
};
