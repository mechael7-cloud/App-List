const buttonAdd = document.getElementById('button-add');
const buttonplus = document.getElementById('button-plus');
const selectMode = document.getElementById('select-mode');
const deleteSelectMode = document.getElementById('delete-select-mode');
const modeText = document.getElementById('mode-text');
const modeList = document.getElementById('mode-list');
const main = document.querySelector('main');
const body = document.querySelector('body');


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
                <button id="add-button-text">add</button>
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
        </div>`;
    selectMode.classList.add('hidden');
    main.insertAdjacentHTML('beforeend', insertList);
});

document.addEventListener("click", (e) => {
    const el = e.target.closest('.input-mode'); // Untuk menargetkan class input mode .Menggunakan closest agar elemen tersebut ada atau tidak 
    const ei = e.target.closest('.input-list'); // Untuk menargetkan class input-list
    if (!ei && el) { //Membuat if untuk ei dan el.!ei untuk tidak dan el untuk iya
        el.remove('input-mode'); //Untuk menghapus class nya sendiri dan elemen nya 
        el.innerHTML = ''; // Untuk memastikan class child nya terhapus
        console.log('dihapus'); // Untuk output pemberitahuna!
    }
})
