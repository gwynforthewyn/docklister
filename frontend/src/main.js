import './style.css';
import './app.css';

import {ListImages} from '../wailsjs/go/main/App';

document.querySelector('#app').innerHTML = `
      <div class="imagesGoHere" id="imagesGoHere" onload="listImages()"></div>
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
