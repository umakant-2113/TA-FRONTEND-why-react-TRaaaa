let root = document.querySelector('ul');
let input = document.querySelector('input');

let allMovie = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovie.push({
      name: event.target.value,
      watch: false,
    });
    event.target.value = '';
    createUI(allMovie);
  }
});

function handleClick(e) {
    let id = e.target.id
    allMovie[id].watched ? allMovie[id].watched = false : allMovie[id].watched = true
    createUI(allMovie)
}

function createUI(arr) {
   let movieUi = arr.map((elm, i) => {
        let li = React.createElement(
            'li',
            null,
            React.createElement('p', null, elm.name),
            React.createElement('span', { id: i, onClick: handleClick }, elm.watched ? 'watched' : 'To watched'))
            return li
    });
    ReactDOM.render(movieUi, root)
}
