let root = document.documentElement;
let slideshowPics = document.querySelectorAll("#slideshow img");
let slideshowWidth = 0;
let slideshowSpeed = 30;

// Get the total slideshow width
for (let i = 0; i < slideshowPics.length; i++) {
    slideshowWidth += slideshowPics[i].clientWidth;
}

// Set the slider width and the appropriate speed
root.style.setProperty("--sliderWidth", -slideshowWidth + "px");
root.style.setProperty("--sliderTime", slideshowWidth / slideshowSpeed + "s");

// Reorders the slider every 3 seconds
setInterval(reorderSlider, 3000);

// Reorders the slider so that once one picture is scrolled past the viewport,
// that picture can be reordered to the back of the flexbox
function reorderSlider() {

}


//setTimeout(testing, 3000);
function testing() {
    slideshowPics[0].style.order = 1;
    //document.querySelector("#slideshow").style
}
console.log(slideshowWidth / slideshowSpeed);