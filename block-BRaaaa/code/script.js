let root = document.querySelector('.movie-list');
let input = document.querySelector('input');

let allMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    if (event.target.value !== '') {
      allMovies.push({
        name: event.target.value,
        watched: false,
      });
    }
    event.target.value = '';
    // console.log(allMovies);
    createUi(allMovies, root);
  }
});

function handlechange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUi(allMovies, root);
}

function createUi(data, root) {
  root.innerHTML = '';
  data.forEach((element, i) => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    div.classList.add('div1');
    let span = document.createElement('span');
    span.innerText = element.watched ? 'Watched' : 'To Watched';
    span.id = i;
    span.addEventListener('click', handlechange);
    let label = document.createElement('label');
    label.for = i;
    label.innerText = element.name;
    li.append(label, span);
    div.append(li);
    root.append(div);
  });
}
