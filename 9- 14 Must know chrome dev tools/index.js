const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('HELLO WORLD');

    // Interpolated
    console.log('HELLO I AM %s string!', '*WOW*');

    // Styled
    console.log('%c I am going to be styled', 'font-size: 30px; color: #30475e; background: #aee6e6;');

    // warning!
    console.warn('ABE OIII!!');

    // Error :|
    console.error('ENI ##N3');

    // Info
    console.info('AA Ritna Karvanu be');

    // Testing
    console.assert(1===2, 'This is wrong');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => 
     {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}, and is ${dog.age} years old`)
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Javascript');
    console.count('Javascript');
    console.count('Javascript');
    console.count('Javascript');
    console.count('React');
    console.count('React');
    console.count('React');
