export default class ViewerImage {

    constructor(src, scale) {

        this.canvas = document.createElement('canvas');
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.content = document.getElementById('content')
        this.content.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.img = new Image();
        this.img.src = src;
        this.scale = scale; // 초기 확대/축소 배율

        this.img.onload = () => {
            this.drawImageWithScale();
        };

    }


    static newImage(src, scale){
        return new ViewerImage(src, scale)
    }

    drawImageWithScale() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const scaledWidth = this.img.width * this.scale;
        const scaledHeight = this.img.height * this.scale;
        const x = (this.canvas.width - scaledWidth) / 2;
        const y = (this.canvas.height - scaledHeight) / 2;

        this.ctx.drawImage(this.img, x, y, scaledWidth, scaledHeight);
    }

    drawZoomIn(scale) {
        this.scale *= scale
        this.drawImageWithScale(scale);
    }

    drawZoomOut(scale) {
        this.scale /= scale
        this.drawImageWithScale(scale);
    }
}