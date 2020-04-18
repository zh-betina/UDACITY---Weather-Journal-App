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


app.get('/', (req, res)=>{

  res.sendFile(`${__dirname}/index.html`);
});



/*POST Routes*/

let projectData = [];



app.post('/add', addEntry);

function addEntry(req, res){
  let newEntry = {
    "temperature": req.body.temperature,
    "feelings": req.body.feelings,
    "date": req.body.date
  };

  projectData.unshift(newEntry);
  console.log(`New entries added on the server side: ${projectData}`);
  res.send(projectData);
};


app.get('/entries', (req,res)=>{

  res.send(projectData);
  console.log(`New entries sent to the UI: ${projectData}`);
});
