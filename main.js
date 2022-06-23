window.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector('form.fo_rm'),
    add = addForm.querySelector('.add_item'),
    note = document.querySelector('.input'),
    text = document.querySelector('.to_do_list');

  const obj = JSON.parse(localStorage.getItem('notes')) || {
    0: 'a',
    1: 'b',
    2: 'c',
  };

  function asd() {
    add.addEventListener('click', (e) => {
      e.preventDefault();
      cycle();
    });
  }
  asd();

  function cycle() {
    for (let i in obj) {
      obj[i] = note.value;
      text.innerHTML += `<div class="item">
        <p class="w">${note.value}</p>
        <div>
          <input type="checkbox" style="color: limegreen" />
          <i class="fas fa-trash" style="color: darkgray"></i>
        </div>
      </div>`;
      i++;
    }
  }

  /* let notes = {
    note__list: [],
  };

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    createNotes();

    e.target.reset();
  });

  // Добавляем Заметки через кнопку
  add.addEventListener('click', () => {
    if (note.value.trim()) {
      notes.note__list.push(note.value);
    }
  });

  // Корзина, удаляем Заметки
  text.addEventListener('click', (event) => {
    let e = event.target;

    if (e.classList.contains('fa-trash')) {
      e.parentNode.parentNode.outerHTML = '';

      console.log(notes.note__list);
    }
  });

  function createNotes() {
    // То что изначально будет в экране, все будет стерто. Каждый раз оно будет появляться
    text.innerHTML = '';

    // Все что будет в обьекте будет появляться.
    notes.note__list.forEach((item) => {
      text.innerHTML += `<div class="item">
          <p class="w">${item}</p>
          <div>
            <input type="checkbox" style="color: limegreen" />
            <i class="fas fa-trash" style="color: darkgray"></i>
          </div>
        </div>`;
    });
  } */
});
