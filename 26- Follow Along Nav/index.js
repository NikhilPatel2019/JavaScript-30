const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
    // console.log('AVYO');
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active');
        }
        },40);
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    // console.log(dropdownCoords, navCoords);
    // console.log(navCoords.top);
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    // THis will add the height and width to white background of Particular dropdown
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    // console.log('GAYO');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));