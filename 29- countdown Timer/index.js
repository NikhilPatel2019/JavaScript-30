let  countDown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    //Clear Existing Times
    clearInterval(countDown);

   const now = Date.now();
   const then = now + seconds * 1000;
   displayTimeLeft(seconds);
   dispplayEndTIme(then);
   
   countDown = setInterval(() => {
       const secondLeft = Math.round((then - Date.now()) / 1000);
       
       if (secondLeft<=0) {
           clearInterval(countDown);
           return;
       }
       //Displaying Time
       displayTimeLeft(secondLeft);
   }, 1000);
   
   
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes} : ${remainingSeconds < 10 ? '0' : ''} ${remainingSeconds}⌛`;
    timeDisplay.textContent = display;
    document.title = display;
}

function dispplayEndTIme(timeStamp){
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ⏰ ${hour > 12 ? hour-12 : hour} : ${minutes}`;
}

function startTimer(){
    const seconds = this.dataset.time;
    // console.log(seconds);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    // console.log(mins);
    timer(mins * 60);
    this.reset();
});