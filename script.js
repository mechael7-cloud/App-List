const buttonAdd = document.getElementById('button-add');
const buttonplus = document.getElementById('button-plus');
const selectMode = document.getElementById('select-mode');
const deleteSelectMode = document.getElementById('delete-select-mode');


buttonAdd.addEventListener('click', () => {
    selectMode.classList.toggle('hidden');
})
buttonplus.addEventListener('click', () => {
    selectMode.classList.toggle('hidden');
})
deleteSelectMode.addEventListener('click', () => {
    selectMode.classList.add('hidden');
})
