const buttonAdd = document.getElementById('button-add');
const buttonplus = document.getElementById('button-plus');
const selectMode = document.getElementById('select-mode');
const deleteSelectMode = document.getElementById('delete-select-mode');
const modeText = document.getElementById('mode-text');
const modeList = document.getElementById('mode-list');
const main = document.querySelector('main');


buttonAdd.addEventListener('click', () => {
    selectMode.classList.toggle('hidden');
});
buttonplus.addEventListener('click', () => {
    selectMode.classList.toggle('hidden');
});
deleteSelectMode.addEventListener('click', () => {
    selectMode.classList.add('hidden');
});

modeText.addEventListener('click', () => {
    main.innerHTML = `
    <div class="input-mode">
            <div class="input-text">
                <input type="text" id="title" placeholder="Title">
                <hr>
                <textarea name="" id="text-input" placeholder="Text"></textarea>
                <button id="add-button">add</button>
            </div>
        </div>`
});

// modeList.addEventListener('click', () => {
//     main.innerHTML = '
//     '
// })
