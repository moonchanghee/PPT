import Viewer from './Viewer'


let viewer = new Viewer()

let image = viewer.addNewImage('https://source.unsplash.com/random', 1)
addEvent()


function addEvent(){
    document.getElementById('zoom-in').addEventListener('click', () => {
        image.drawZoomIn(1.1);
    });

    document.getElementById('zoom-out').addEventListener('click', () => {
        image.drawZoomOut(1.1);
    });
}







