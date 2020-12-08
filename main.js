const add = document.querySelector('.add');
var inputItem = document.querySelector('.input');
const container = document.querySelector('.container');

class items{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item');
        input.type = "text";

        let allItem = document.createElement('div');
        allItem.classList.add('items');

        let edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "編集";

        let deleted = document.createElement('button');
        deleted.classList.add('delete');
        deleted.innerHTML = "削除";

        container.appendChild(allItem);
        allItem.appendChild(input);
        allItem.appendChild(edit);
        allItem.appendChild(deleted);

        edit.addEventListener('click',() => this.editItem(input));
        deleted.addEventListener('click',() => this.delete(allItem));
    }

    editItem(input){
        input.disabled = !input.disabled;
    }

    delete(items){
        container.removeChild(items);
    }
}
function check(){
    if(inputItem.value != ""){
        new items(inputItem.value);
        inputItem.value ="";
    }
}
add.addEventListener('click',check);

add.addEventListener('keypress', onKeyPress);

function onKeyPress(e) {
  if ( e.keyCode === 13) {
    check(); 
  }
  return
 }
