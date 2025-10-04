const express = require('express');
const path = require('path');
const fs = require('fs');
const { JSDOM } = require("jsdom");

const app = express();

const htmlPath = path.join(__dirname + "/public/test.html")
const html = fs.readFileSync(htmlPath, "utf-8"); //allows for functions like .appendChild
const dom = new JSDOM(html); //DOM = Document Object Model
const document = dom.window.document; // allows for document.__

const dirPath = path.join(__dirname + "/public/all photos");
const grid = document.getElementsByClassName('grid')[0];
grid.innerHTML = "";

fs.readdir(dirPath, (err, files) => { //iterates through the /public/all photos/ folder
    if (err) {
        return console.error("Unable to scan directory: " + err);
    }
    files.forEach(file => {
        const photosDirUrl = "/all photos";
        const imgUrl = encodeURI(`${photosDirUrl}/${file}`); //encodes the whole URL

        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = imgUrl;

        const container = document.createElement('div');

        container.classList.add('grid-item');

        container.appendChild(img);

        const grid = document.getElementsByClassName('grid')[0];
        grid.appendChild(container);

    });

    fs.writeFileSync(htmlPath, dom.serialize(), 'utf-8'); //dom.serialize() take the in-memory of DOM and coverts it back into a string of HTML
});


app.use(express.static(path.join(__dirname + '/public'))); //serves files from public folder when app starts

app.use((req, res) => { // if the status of the request is 404
    res.status(404);
    res.send('<h1>Error 404: Resource not found<h1>') //sends an html page 
})
app.listen(3000, () => { //logs the console if the html page launches
    console.log("App listening on port 3000")
})