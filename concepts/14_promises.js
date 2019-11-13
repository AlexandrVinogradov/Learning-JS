var promisesImages = [];

for (let i = 0; i < count; i++) {
    promisesImages.push(new Promise((resolveImg, rejectImg) => {
        let img =  new Image(),
            startTime = Date.now();

        img.src = this.imgUrl + '?' + Math.floor(Math.random() * 100000000);

        img.onload = () => {
            resolveImg(Date.now() - startTime);
        };
        img.onerror = rejectImg;
    }));
}

// Promise.all(promisesImages)
//     .then((timings) => {...})