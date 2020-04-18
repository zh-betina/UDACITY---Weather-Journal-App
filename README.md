# UDACITY---Weather-Journal-App
### Available live deployment here: https://secret-harbor-17931.herokuapp.com/
## About project:


Weather Journal App project for **Front End Developer Nanodegree** program of **Udacity**. 
The main focus put on:
* setting up local server using **Node.js** and **Express.js**,
* GET and POST requests (client <-> API, client <-> server) using promises and Fetch API,
* User Interface updates in according to the user input and based on that data fetched from the API.

### Note:
There is no database behind and the entries aren't stored when the session ends. Moreover, only the last
generated entry is visible in the "Latest entries" section. One default entry is loaded with index.html file
for visual purposes and gets replaced once the user generates his/her own entry.

## Useful resources and software:

- Postman (https://www.postman.com/);
- CORS entry from MDN (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS);
- Error codes explained by MDN: (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).


#### Important remarks on CORS:

To bypass CORS rules while developing locally, **CORS Everywhere** addon for Firefox  was used:  
- https://github.com/spenibus/cors-everywhere-firefox-addon @spenibus

For Heroku deployment, **cors-anywhere** was applied:
- https://github.com/Rob--W/cors-anywhere @Rob--W

## Files:

* **node_modules**: npm modules necessary for the project (bodyParser, express, cors),
* **website**: 
  * **app.js**: client side code with requests and UI handling;
  * **index.html**
  * **style.css**
  * **weatherBgr.jpg**: background image used for screens with width larger than 800px;
  * **weatherBgrVert.jpg**: background image for screens with width smaller than 800px.
* **Procfile**: file required by Heroku for successful deployment.
* **package.json**
* **server.js**: server side code.

### Still to be improved/issues: 

- [ ] The basic design responsiveness is maintained, however, some issues still occur.
