const buttonAdd = document.getElementById('button-add');
const selectMode = document.getElementById('select-mode');
buttonAdd.addEventListener('click', () => {
    selectMode.classList.toggle('hidden');
})