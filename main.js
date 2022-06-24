window.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector('form.fo_rm'),
    noteText = document.querySelector('.input'),
    noteContainer = document.querySelector('.to_do_list');

  let i = 0;

  const obj = JSON.parse(localStorage.getItem('notes')) || {};

  const addNote = () => {
    addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const e = event.target;

      if (noteText.value.trim()) obj[i] = noteText.value;

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

      for (let i in obj) {
        if (
          e.classList.contains('fa-trash') &&
          obj[i] == e.parentElement.previousSibling.previousSibling.innerHTML
        ) {
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
    localStorage.setItem('notes', JSON.stringify(obj));

    i++;
  };

  window.addEventListener('load', addNote);
});
