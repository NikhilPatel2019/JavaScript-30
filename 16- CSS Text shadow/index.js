const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 500; 

function shadow(e){
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //This can also be written in ES6 version as
    // const { offsetWidth: width, offsetHeight: height} = hero;
    // console.log(width, height);

    let x = e.offsetX;
    let y = e.offsetY;
    // console.log(x, y);

    // console.log(this, e.target);
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // console.log(x,y);

    const xwalk = Math.round((x / width * walk) - (walk / 2));
    const ywalk = Math.round((y / height * walk) - (walk / 2));
    // console.log(xwalk, ywalk);

    text.style.textShadow = `${xwalk}px ${ywalk}px  0 #54e346,
                             ${xwalk * -1}px ${ywalk}px  0 #fecd1a,
                             ${xwalk}px ${ywalk * -1}px  0 #222831,
                             ${xwalk * -1}px ${ywalk * -1}px  0 #ea2c62`;

}

hero.addEventListener('mousemove', shadow);