const buttonAdd = document.getElementById('button-add');
const buttonplus = document.getElementById('button-plus');
const selectMode = document.getElementById('select-mode');
const deleteSelectMode = document.getElementById('delete-select-mode');
const modeText = document.getElementById('mode-text');
const modeList = document.getElementById('mode-list');
const main = document.querySelector('main');
const body = document.querySelector('body');
const text = document.querySelector('.place-text');
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
    };
});

main.addEventListener('click', (e) => { // Menuju class input-list untuk mangambil elemen button
    const addText = e.target.closest('.add-button-text'); // Untuk mengambil class add-button-text
    const addList = e.target.closest('.add-button-list'); // Untuk mengambil class add-button-list 

    e.preventDefault();

    if (addText) { // Fungsi if untuk jika user mengclick button
        const textData = {
            id: Date.now(), // Mengambil id data dari waktu sekarang
            title: document.getElementById('title').value, // Mengambil judul dari input judul
            text: document.getElementById('text-input').value // Mengambil text dari input text
        }

        // const allDataText = JSON.parse(localStorage.getItem('data-text')) || []; // Mengambil data dari local storage 

        resaultText.push(textData); // Push data untuk di simpan di variabel resaultText.Fungsi di simpan di variabel adalah agar dapat dengan mudah di ambil dan di push ke html

        localStorage.setItem('data-text', JSON.stringify(resaultText)) || []; // Membuat data yang sudah di variabel text data ke local storage

        console.log(resaultText); // Untuk menguji apakah variabel resaultText sudah ada data atau belum

        const el = e.target.closest('.input-mode');
            el.remove();
        

    }
    if (addList) {
        
        const dataText = document.querySelectorAll('.list-input');

        const value = Array.from(dataText).map(dataText => dataText.value);

        const listData = {
            id: Date.now(),
            title: document.querySelector('.list-title').value,
            text: value
        };


        resaultList.push(listData);
        localStorage.setItem('data-list', JSON.stringify(resaultList)) || [];

        console.log(resaultList);

        const el = e.target.closest('.input-mode');
        el.remove();
    };
    writeData();
});

function writeData (e) {

    const allDataText = JSON.parse(localStorage.getItem('data-text'));
    const allDataList = JSON.parse(localStorage.getItem('data-list'));
    const section = document.querySelector('section');

    console.log(allDataText);

    if(!allDataText || allDataText.length === 0 ) {
        section.innerHTML = '';
    } else {
        section.innerHTML = allDataText.map(textData => 
            `<div class="place-text" data-id='${textData.id}'>
                <div class="place-title">
                    <p class="title-text-1">${textData.title}</p>
                    <button><i class="fas fa-x" id="delete-text"></i></button>
                </div>
                <hr>
                <p class="hello">${textData.text}</p>
            </div>`
        ).join();
    };

    if(!allDataList || allDataList.length === 0) {
        return
    } else {
        // section.innerHTML = allDataList.map(listData =>
        //     `<div class="place-list" data-id=${listData.id}>
        //         <div class="place-list-title">
        //             <p class="list-title">${listData.title}</p>
        //             <button><i class="fas fa-x"></i></button>
        //         </div>
        //         <hr>
        //         <div class="listiner">
        //             <ul>
        //                 <li class="place-list-checkbox">
        //                     <input type="checkbox">
        //                     <p>${listData.text}</p>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>`
        // ).join();
        createList();
    }
};

function createList () {
    const section = document.querySelector('section');
    
    let dataList = JSON.parse(localStorage.getItem('data-list'));

    dataList.forEach(card => {
        const placeList = document.createElement('div');
        placeList.className = 'place-list';
        placeList.dataset.id = card.id;

        const placeTitle = document.createElement('div');
        placeTitle.className = 'place-list-title';
        placeList.appendChild(placeTitle);

        const teksTitle = document.createElement('p');
        teksTitle.className = 'list-title';
        teksTitle.textContent = card.title;
        placeTitle.appendChild(teksTitle);

        const buttonClose = document.createElement('button');
        const i = document.createElement('i');
        i.className = 'fas fa-x';
        buttonClose.appendChild(i);
        placeTitle.appendChild(buttonClose);

        card.text.forEach((itemsText, index) => {
            const items = document.createElement('div');
            items.className = 'place-list-checkbox';
            items.innerHTML = `
            <input type="checkbox">
            <p>${itemsText}</p>`;

            placeList.appendChild(items);
        });
        section.appendChild(placeList);
    });

}

const cards = document.querySelectorAll('.place-text');

const overlay = document.getElementById('overlay');
const cardOver = document.getElementById('card-over');
const titleOver = document.getElementById('title-card');
const textOver = document.getElementById('teks-card');
const closeOver = document.getElementById('close-over');


cards.forEach(function (card) {
    card.addEventListener('click', function () {
        const titlePlaceText = card.querySelector('.title-text-1').textContent;
        const textPlaceText = card.querySelector('.hello').textContent;

        titleOver.textContent = titlePlaceText;
        textOver.textContent = textPlaceText;

        console.log(titleOver);
        console.log(textOver);

        console.log(titlePlaceText);
        console.log(textPlaceText);

        overlay.classList.add('active');
    });

    closeOver.addEventListener('click', () => {
        overlay.classList.remove('active');
    })
});

const cardsList = document.querySelectorAll('.place-list');

const overlist = document.getElementById('overlist');
const cardOverlist = document.getElementById('card-overlist');
const titleOverlist = document.getElementById('title-listover');
// const textOver = document.getElementById('teks-card');
const closeOverlist = document.getElementById('close-overlist');

cardsList.forEach(function (cardList) {
    cardList.addEventListener('click', function () {
        const titlePlaceList = cardList.querySelector('.list-title').textContent;
        // const textPlaceList = card.querySelector('.hello').textContent;

        titleOverlist.textContent = titlePlaceList;
        // textOver.textContent = textPlaceText;


        overlist.classList.add('active');
    });

    closeOverlist.addEventListener('click', () => {
        overlist.classList.remove('active');
    })
});


document.addEventListener('DOMContentLoaded', () => {
    writeData();
})
// document.querySelectorAll('.place-text').forEach(placeText => {
//     placeText.addEventListener('click', (e) => {
//         if(e.target.closest('#delete-text') || e.target.type === 'checkbox') return

//         const title = placeText.querySelector('.title-text-1').textContent;
//         const bodys = placeText.querySelector('.text-text').textContent;

//         titleOver.textContent = title;
//         textOver.textContent = bodys;

//         overlay.classList.add('active');
//     })
// })



// localStorage.clear();
