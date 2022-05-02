window.addEventListener('DOMContentLoaded', () => {
  const add = document.querySelector('.add_item'),
    note = document.querySelector('.input'),
    erase = document.querySelectorAll('.fa-trash'),
    mark = document.querySelector('.fa-check-square'),
    text = document.querySelector('.to_do_list'),
    note__info = document.querySelectorAll('.item');

  let i = 0;

  add.addEventListener('click', () => {
    if (note.value.trim()) {
      text.innerHTML += `<div class="item"><p>${note.value}</p><div><i class="fas fa-check-square" style="color: limegreen"></i><i class="fas fa-trash" style="color: darkgray"></i></div></div>`;
    }

    note.value = '';
  });

  note.addEventListener('keydown', (e) => {
    if (e.target.value.trim()) {
      if (e.code === 'Enter') {
        text.innerHTML += `<div class="item">
        <p>${e.target.value}</p>
        <div>
        <i class="fas fa-check-square" style="color: limegreen"></i>
        <i class="fas fa-trash" style="color: darkgray"></i>
        </div>
        </div>`;
      }
      if (e.code === 'Enter') e.target.value = '';
    }
  });

  erase.forEach((item) => {
    item.addEventListener('click', () => {
      note__info[i].textContent = '';
    });
    i++;
  });
});
