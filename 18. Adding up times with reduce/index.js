const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const totalTime = document.querySelector('h1');

const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
            const [mins, sec] = timeCode.split(':') .map(parseFloat);
            return (mins * 60) + sec;
            console.log(mins, sec);
        })
        .reduce((total, s) => total + s);

        let secondsBaki = seconds;
        const hours = Math.floor(secondsBaki / 3600);
        secondsBaki = secondsBaki % 3600;

        const minutes = Math.floor(secondsBaki / 60);
        secondsBaki = secondsBaki % 60;

        console.log(hours, 'Hours', minutes, 'minutes', secondsBaki, 'seconds');
        
totalTime.innerHTML = `${hours} Hours ${minutes} Minutes ${secondsBaki} Seconds`;