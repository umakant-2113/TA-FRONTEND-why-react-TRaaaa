let root = document.querySelector('div');
let input = document.querySelector('input');

let arr = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    let div = document.createElement('div');
    div.classList.add('data-div');
    let div2 = document.createElement('div');
    div2.classList.add('data');

console.log(event.target.value)

    let p = document.createElement('p');
    p.innerText = event.target.value;
    

    let span = document.createElement('span');

    span.addEventListener('click', clicked);

    span.innerText = 'To Watch';
    div2.append(p, span);
    div.append(div2);
    root.append(div);
    event.target.value = '';
  }
});

function clicked(event) {

if(event.target.innerText=== "To Watch"){
    event.target.innerText= "Watch"
}else if(event.target.innerText=== "Watch"){
event.target.innerText="To Watch"
}
}
