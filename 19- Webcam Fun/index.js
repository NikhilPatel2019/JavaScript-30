const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        // console.log(localMediaStream);
      
  //  DEPRECIATION : 
  //       The following has been depreceated by major browsers as of Chrome and Firefox.
  //       video.src = window.URL.createObjectURL(localMediaStream);

  //       Please refer to these:
  //       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
        
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(err => {
        console.error(`OH NO!!!`, err);
      });
  }

  function paintCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width,height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        //Taking the pixels OUT
        let pixels = ctx.getImageData(0, 0, width, height);

        //Changing the pixels
        // pixels = redEffect(pixels);

        // pixels = rgbsplit(pixels);
        // ctx.globalAlpha = 0.8;

        pixels = greenScreen(pixels);

        //Changing it on the page
        ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  function takePhoto(){
      //Will play the sound
      snap.currentTime = 0;
      snap.play();

      const data = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = data;
      link.setAttribute('download','Taken');
      link.innerHTML = `<img src=${data} alt=" Webcam Capture"/>`;

      strip.insertBefore(link, strip.firstChild)
  }

  function redEffect(pixels){
    for (let i = 0; i < pixels.data.length; i+= 4) {
        pixels.data[i] = pixels.data[i] + 50;             //RED
        pixels.data[i + 1] = pixels.data[i + 1] + 50;      //Green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;     //Blue        
    }
    return pixels;
  }

  function rgbsplit(pixels){
    for (let i = 0; i < pixels.data.length; i+= 4) {
        pixels.data[i - 150] = pixels.data[i];             //RED
        pixels.data[i + 150] = pixels.data[i + 1];      //Green
        pixels.data[i - 550] = pixels.data[i + 2];     //Blue        
    }
    return pixels;
  }

  function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }
  

getVideo();

video.addEventListener('canplay', paintCanvas);