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
                <button id="add-button-text">add</button>
            </div>
        </div>`
});
modeList.addEventListener('click', () => {
    main.innerHTML = `
    <div class="input-mode">
            <div class="input-list">
                <div class="unknown">
                    <input type="text" placeholder="Title" id="list-title">
                    <hr>
                    <div class="raw">
                        <input type="checkbox" id="checkbox-input">
                        <input type="text" id="list-input" placeholder="Text">
                    </div>
                </div>
                <button id="add-button-list">add</button>
            </div>
        </div>
        </div>`
})

// modeList.addEventListener('click', () => {
//     main.innerHTML = '
//     '
// })
