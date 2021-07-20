class ImageLoader {

    constructor(img_array, tic_func) {
        this.images = {}

        for (let i = 0; i < img_array.length; ++i) {
            this.images[img_array[i].name] = new Image();
            this.images[img_array[i].name].src = img_array[i].src;
        }

        let imagesLoaded = 0;

        Object.keys(this.images).forEach(key => {
            this.images[key].onload = () => {
                imagesLoaded++;
                let progress = imagesLoaded / img_array.length;
                Logger.debug(this, `${Math.floor(progress * 100)}%`);
                tic_func(progress);
            }
          });
    }

    get(name) {
        return this.images[name];   
    }

};