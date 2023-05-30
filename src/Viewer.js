import ViewerImage from "./ViewerImage";

export default class Viewer {
    
    constructor(target , item) {
        
    }
    addNewImage(src,scale){
        return ViewerImage.newImage(src, scale)
    }
    
}