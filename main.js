window.addEventListener('DOMContentLoaded', () => {
  const add = document.querySelector('.add_item'),
    note = document.querySelector('.input'),
    erase = document.querySelector('.fa-trash'),
    mark = document.querySelector('.fa-check-square'),
    text = document.querySelector('.to_do_list');

  add.addEventListener('click', (event) => {
    text.innerHTML += `<div class="item">
    <p>${note.value}</p>
    <div>
      <i class="fas fa-check-square" style="color: limegreen"></i>
      <i class="fas fa-trash" style="color: darkgray"></i>
    </div>
    </div>`;

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
});
