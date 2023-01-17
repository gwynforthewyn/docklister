import './style.css';
import './app.css';

import {ListImages} from '../wailsjs/go/docklister/App';

document.querySelector('#app').innerHTML = `
    <button class="btn" onclick="listImages()">List Images</button>
    <div class="imagesGoHere" id="imagesGoHere""></div>
`;

let imagesElement = document.getElementById("imagesGoHere");


window.listImages = function () {
    try {
        ListImages()
            .then((result) => {
                imagesElement.innerText = result
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};
