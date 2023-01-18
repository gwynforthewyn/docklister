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
                let images = result.map(image => image.RepoTags)
                images = images.filter( image => image != ['<none>:<none>'] )

                for (var i=0; i<images.length; i++) {
                    images[i] = `<div> ${images[i]} </div>`
                }

                imagesElement.innerHTML = images.join("<br>")
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};
