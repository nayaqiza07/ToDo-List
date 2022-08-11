let task = document.querySelector('#task');
const list = document.querySelector('#list');
const form = document.querySelector('.form');

// membuat tombol enter
let ent = document.createElement('button');
ent.className = 'enter';
let txtEnt = document.createTextNode('⤵');
ent.appendChild(txtEnt);
form.appendChild(ent);

// membuat wadah untuk listItems
let wadah = document.querySelector('.wadah');

// mengambil tombol clear
let clear = document.querySelector('.c');
let cAll = document.createElement('em');
let txtAll = document.createTextNode('Clear All');

// event
ent.addEventListener('click', function (e) {
  e.preventDefault();

  let li = document.createElement('li');
  li.className = 'listItems';
  let sp = document.createElement('span');
  let txt = document.createTextNode(task.value);

  if (task.value !== '') {
    sp.appendChild(txt);
    li.appendChild(sp);
    list.appendChild(li);
    wadah.classList.add('wadahList');

    // todo buat checkbox
    let check = document.createElement('input');
    check.className = 'centang';
    check.setAttribute('type', 'checkbox');
    li.insertBefore(check, sp);

    // todo buat close button
    let closeBtn = document.createElement('button');
    let txtBtn = document.createElement('i');
    txtBtn.className = 'far fa-trash-alt';
    closeBtn.className = 'close';
    closeBtn.appendChild(txtBtn);
    li.appendChild(closeBtn);

    // untuk mengurutkan dari listItems paling baru
    list.insertAdjacentElement('afterbegin', li);

    task.value = ''; // untuk mengosongkan input text
    // li.addEventListener('click', function (e) {
    //   e.target.style.textDecoration = 'line-through';
    // });
    check.addEventListener('click', function () {
      if (check.checked) {
        li.classList.add('coret');
      } else {
        li.classList.remove('coret');
      }
    });

    closeBtn.addEventListener('click', function () {
      // e.target.parentElement.style.display = 'none';
      li.remove('li');
    });

    cAll.appendChild(txtAll);
    clear.appendChild(cAll);
    clear.classList.add('btn-clear');
    clear.addEventListener('click', function () {
      li.remove('li');
      wadah.classList.remove('wadahList');
    });
  }
});

// untuk Switch button
const toggleSwitch = document.querySelector('#switch');
let teksTheme = document.querySelector('.teksTheme');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    teksTheme.innerHTML = 'Dark';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    teksTheme.innerHTML = 'Light';
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
