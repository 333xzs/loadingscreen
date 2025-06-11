const slides = document.querySelectorAll('.slideshow img');
const slideDuration = 4; 
const totalDuration = slideDuration * slides.length;
slides.forEach((slide, index) => {
  slide.style.animationDuration = `${totalDuration}s`;
  slide.style.animationDelay = `${index * slideDuration}s`;
  slide.style.animationIterationCount = 'infinite';
});
const OpenUrl = (type) => {
  if(type == 'store') {
      window.invokeNative('openUrl', "your server shop")
  }else if(type == 'discord') {
      window.invokeNative('openUrl', "your server discord")
  }else if(type == 'tiktok') {
      window.invokeNative('openUrl', "your server tiktok")
  }
}
window.addEventListener('message', (event) => {
    if (event.data.eventName === 'loadProgress') {
        const progress = Math.floor(event.data.loadFraction * 100);
        document.querySelector('.loading-progress').style.width = `${progress}%`;
    }
});
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
