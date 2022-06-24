window.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector('form.fo_rm'),
    basket = document.querySelectorAll('.fa-trash'),
    noteText = document.querySelector('.input'),
    note = document.querySelectorAll('.item'),
    asd = document.querySelectorAll('.note__noteContainer'),
    noteContainer = document.querySelector('.to_do_list');

  let i = 0;

  const obj = JSON.parse(localStorage.getItem('notes')) || {};

  const addNote = () => {
    addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const e = event.target;

      obj[i] = noteText.value;
      e.reset();

      reCycle();
      deleteNote();
      cycle();
    });
  };

  const deleteNote = () => {
    noteContainer.addEventListener('click', (event) => {
      event.preventDefault();
      const e = event.target;

      /*e.parentElement.previousSibling.previousSibling.classList.contains("note__noteContainer")*/

      /* console.log(e.parentElement.previousSibling.previousSibling.innerHTML); */
      for (let i in obj) {
        if (
          e.classList.contains('fa-trash') &&
          obj[i] == e.parentElement.previousSibling.previousSibling.innerHTML
        ) {
          /* e.parentNode.parentNode.style.display = 'none';
          console.log(e.parentNode.parentNode); */
          delete obj[i];
        }
      }

      reCycle();
      cycle();
    });
  };

  const reCycle = () => {
    noteContainer.innerHTML = '';
  };

  const cycle = () => {
    for (let i in obj) {
      const noteItem = document.createElement('div');
      noteItem.classList.add('item');
      noteItem.innerHTML = `
          <p class="note__noteContainer">${obj[i]}</p>
          <div>
            <input type="checkbox" style="color: limegreen" />
            <i class="fas fa-trash" style="color: darkgray"></i>
          </div>
        `;
      noteContainer.appendChild(noteItem);
    }
    i++;
  };

  addNote();

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
  noteContainer.addEventListener('click', (event) => {
    let e = event.target;

    if (e.classList.contains('fa-trash')) {
      e.parentNode.parentNode.outerHTML = '';

      console.log(notes.note__list);
    }
  });

  function createNotes() {
    // То что изначально будет в экране, все будет стерто. Каждый раз оно будет появляться
    noteContainer.innerHTML = '';

    // Все что будет в обьекте будет появляться.
    notes.note__list.forEach((item) => {
      noteContainer.innerHTML += `<div class="item">
          <p class="w">${item}</p>
          <div>
            <input type="checkbox" style="color: limegreen" />
            <i class="fas fa-trash" style="color: darkgray"></i>
          </div>
        </div>`;
    });
  } */
});
