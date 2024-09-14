let root = document.documentElement;
let slideshowPics = document.querySelectorAll("#slideshow #slideImg img");
let slideshowWidth = 0;
let slideshowSpeed = 30;

// Get the total slideshow width
for (let i = 0; i < slideshowPics.length; i++) {
    slideshowWidth += slideshowPics[i].clientWidth;
}

// Set the slider width and the appropriate speed
root.style.setProperty("--sliderWidth", -slideshowWidth + "px");
root.style.setProperty("--sliderTime", slideshowWidth / slideshowSpeed + "s");

console.log(slideshowWidth / slideshowSpeed);