window.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector('form.fo_rm'),
    add = addForm.querySelector('.add_item'),
    note = document.querySelector('.input'),
    erase = document.querySelectorAll('.fas .fa-trash'),
    mark = document.querySelector('.fa-check-square'),
    note__info = document.querySelector('.item'),
    text = document.querySelector('.to_do_list');

  let notes = {
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

    notes.note__list.forEach((item) => {
      if (e.classList.contains('fa-trash')) {
        item.textContent = '';

        e.parentNode.parentNode.outerHTML = '';

        console.log(notes.note__list);
      }
    });
  });

  function createNotes() {
    // То что изначально будет в экране, все будет стерто. Каждый раз оно будет появляться
    text.innerHTML = '';

    // Все что будет в обьекте будет появляться.
    notes.note__list.forEach((item) => {
      if (item.trim()) {
        text.innerHTML += `<div class="item">
          <p class="w">${item}</p>
          <div>
            <i class="fas fa-check-square" style="color: limegreen"></i>
            <i class="fas fa-trash" style="color: darkgray"></i>
          </div>
        </div>`;
      }
    });
  }
});
