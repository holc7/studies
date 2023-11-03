// JavaScript to change the image source when the button is clicked
document.addEventListener("DOMContentLoaded", function() {
    // Get the image button by its id
    const imageButton = document.getElementById("imageButton");

    // Get the modal image element by its id
    const modalImage = document.getElementById("modalImage");

    // Add a click event listener to the image button
    imageButton.addEventListener("click", function() {
        // Set the src attribute of the modal image with your image URL
        modalImage.src = "./resources/your-image.jpg";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/4a60a001-d58a-4abc-9c15-3dfee421211f/HM5extaiWt.json' // the path to your animation file
    });
  });
  