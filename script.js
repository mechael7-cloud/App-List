const buttonAdd = document.getElementById('button-add');
const buttonplus = document.getElementById('button-plus');
const selectMode = document.getElementById('select-mode');
const deleteSelectMode = document.getElementById('delete-select-mode');
const modeText = document.getElementById('mode-text');
const modeList = document.getElementById('mode-list');
const main = document.querySelector('main');
const body = document.querySelector('body');
let resaultText = [];
let resaultList = [];

buttonAdd.addEventListener('click', () => { // Membuat tombol add memuncul kan class select-mode
    selectMode.classList.toggle('hidden');
});
buttonplus.addEventListener('click', () => { // Membuat tombol + memuncul kan class select-mode
    selectMode.classList.toggle('hidden');
});
deleteSelectMode.addEventListener('click', () => { // Membuat tombol X yang akan menambahkan class di select-mode
    selectMode.classList.add('hidden');
});

modeText.addEventListener('click', () => { // Memunculkan form untuk mengisi teks
    const insertTeks = `
    <div class="input-mode">
            <div class="input-text">
                <input type="text" id="title" placeholder="Title">
                <hr>
                <textarea name="" id="text-input" placeholder="Text"></textarea>
                <button class="add-button-text">add</button>
            </div>
        </div>`;
    selectMode.classList.add('hidden');
    main.insertAdjacentHTML('beforeend', insertTeks) // Menggunakan insertAdjacentHTML untuk menambah kan ke dalam class main supaya class lain di dalam main tidak terhapus.Dan menambahkan beforeend untuk membuat elemen nya tertanbah di akhir class child main

});
modeList.addEventListener('click', () => {
    const insertList = `
    <div class="input-mode">
            <div class="input-list">
                <div class="unknown">
                    <input type="text" placeholder="Title" class="list-title">
                    <hr>
                    <div class="raw">
                        <input type="checkbox" id="checkbox-input">
                        <input type="text" class="list-input" placeholder="Text">
                    </div>
                </div>
                <button class="add-button-list">add</button>
            </div>
        </div>
        </div>`;
    selectMode.classList.add('hidden');
    main.insertAdjacentHTML('beforeend', insertList);
});
function createraw (e) {
    const unknown = document.querySelector('.unknown');
        const div = document.createElement('div');
        const inputCheckbox = document.createElement('input');
        const inputTextList = document.createElement('input');


        div.className = 'raw';
        div.innerHTML = `
        <input type="checkbox" id="checkbox-input">
        <input type="text" class="list-input" placeholder="Text">
        `;

        unknown.appendChild(div);
    return div;
}
main.addEventListener('keydown', (e) => {
    e.preventDefault;
    if (!e.target.closest('.input-list')) return;

    if (e.key === 'Enter') {
        const row = createraw();
        row.querySelector('.list-input').focus();
        console.log('helo')
    }

})

document.addEventListener("click", (e) => {
    const el = e.target.closest('.input-mode'); // Untuk menargetkan class input mode .Menggunakan closest agar elemen tersebut ada atau tidak 
    const ei = e.target.closest('.input-list'); // Untuk menargetkan class input-list
    const ea = e.target.closest('.input-text'); // Untuk menargetkan class input-text
    if (!ei && !ea && el) { // Membuat if untuk ei dan el.!ei untuk tidak dan el untuk iya
        el.remove('input-mode'); //Untuk menghapus class nya sendiri dan elemen nya 
        el.innerHTML = ''; // Untuk memastikan class child nya terhapus
        console.log('dihapus'); // Untuk output pemberitahuna!
    }
});

main.addEventListener('click', (e) => {
    const addText = e.target.closest('.add-button-text');
    const addList = e.target.closest('.add-button-list');

    if (addText) {
        const textData = {
            id: Date.now(),
            title: document.getElementById('title').value,
            text: document.getElementById('text-input').value
        }

        const allDataText = JSON.parse(localStorage.getItem('data-text')) || [];

        resaultText.push(textData);

        localStorage.setItem('data-text', JSON.stringify(textData));

        console.log(resaultText);

    }
    if (addList) {
        const listData = {
            id: Date.now(),
            title: document.querySelector('.list-title').value,
            text: document.querySelector('.list-input').value
        }

        const allDataList = JSON.parse(localStorage.getItem('data-list')) || []

        resaultList.push(listData);

        localStorage.setItem('data-list', JSON.stringify(listData));

        console.log(resaultList);
    }
})

// const addText = document.getElementById('add-button-text');
// const addList = document.getElementById('add-button-list');

// const inputTitle = document.getElementById('title').value;
// const inputText = document.getElementById('text-input').value;
// const inputTitleList = document.getElementById('list-title').value;

// addText.addEventListener('click', (e) => {
//     e.preventDefault;
//     console.log('hello1')
// });

// addText.addEventListener('click', () => {
//     console.log('1');
// })