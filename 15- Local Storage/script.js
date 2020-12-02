const addItems  = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items     = JSON.parse(localStorage.getItem('items')) || [];
const check     = document.querySelector('.checkall');
const unCheck   = document.querySelector('.uncheckall');
const deleteALL = document.querySelector('.deleteall');

function addItem(e){
    e.preventDefault();
    const text = this.querySelector('[name = item]').value;
    // console.log(text);
    const item = {
        text,
        done: false
    };

    //Pushing and Input value entered by user in items array
    items.push(item);

    populateList(items, itemsList);

    localStorage.setItem('items', JSON.stringify(items));

    // console.log(item);
    this.reset();
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toogleDone(e){
    // console.log(e.target);
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function checkAll(){
    items.forEach(item => {
        item.done = true;
    });

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function unCheckAll(){
    items.forEach(item => {
        item.done = false;
    });

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function deleteAll(){
    localStorage.clear();
    console.log('deleted');
    location.reload();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toogleDone);
populateList(items, itemsList);

check.addEventListener('click', checkAll);
unCheck.addEventListener('click', unCheckAll);
deleteALL.addEventListener('click',deleteAll);