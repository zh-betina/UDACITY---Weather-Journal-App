let zip = document.getElementById('zipcode').value;
let place = document.getElementById('country').value;
let feel = document.getElementById('feelings').value;
/*API credentials*/
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = '&appid=51a1e583a80570b3b8cd3b2021b86cac';
const units = '&units=metric'
let url = `${baseUrl}zip=${zip},${place}${apiKey}${units}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//'Generate' event listener
document.getElementById('generate').addEventListener('click', getInput);

//Chained promises
//1)GET data from the API,  2)POST that data to server, 3)Update the UI
function getInput(e){
  zip = document.getElementById('zipcode').value;
  place = document.getElementById('country').value;
  feel = document.getElementById('feelings').value;
  url = `${baseUrl}zip=${zip},${place}${apiKey}${units}`;
  getApiData(url)
  .then(function(data){
    console.log(data)
    postData('/add', {"base": data.base})
    })
  .then(function(postData){
    updateUI();
  });
};

//GET weather info from the API
const getApiData =  async(url)=>{
  const apiResponse = await fetch(url);
    try {
      const data = await apiResponse.json();
      console.log(data);
      return data;
    }catch (error) {
      console.log('While fetching GET request from the API, an error occured: ', error);
    }
  };

//POST to the server the data fetched from the API
const postData = async(url = "/add", data = {})=>{
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try{
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error){
    console.log('While POSTing weather data to the server an error occured: ', error);
    }
};

//User Interface update

const updateUI = async(url = "/entries")=>{
  const getEntries = await fetch(url);
    try{
      const entries = await getEntries.json()
      console.log(entries);
      document.getElementById('content').innerHTML = entries[0].base;
    }catch(error){
      console.log('While updating UI an error occured: ', error)
    };
};
