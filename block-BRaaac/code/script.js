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
    createUi(allMovies, root);
  }
});

function handlechange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUi(allMovies, root);
}
// function elm(type, atr = {}) {
//   let element = document.createElement(type);

//   console.log(atr);
//   for (let key in atr) {
//     element[key] = atr[key];
//   }
//   return element;
// }

// function createUi(data, root) {
//   root.innerHTML = '';
//   data.forEach((element, i) => {
//     let li = elm('li');
//     let span = elm('span' ,{
//         id : i,
//         innerText:element.watched ? 'Watched' : 'To Watched'
//     });

//     let label = elm('label',{
//         for : i,
//         innerText:element.name
//     } );

//     li.append(label, span);
//     span.addEventListener('click', handlechange);
//     root.append(li);
//   });
// }

// second type 

function elm(type, atr = {}, ...children) {
    let arr=[];
    let element = document.createElement(type);

    for (let key in atr) {
      element[key] = atr[key];
    }
 
    children.forEach(child=>{
        if(typeof child==="object"){
            element.append(child)
        }
        if(typeof child==="string"){
            let node= document.createTextNode(child);
            element.append(node)
        }
    })

     return element;
  }


function createUi(data, root) {
  root.innerHTML = '';
  data.forEach((element, i) => {
    let li = elm(
      'li',
      {},
      elm('label', { for: i }, element.name),
      elm(
        'span',
        {
          id: i,
          onclick: handlechange
        },
        element.watched ? 'Watched' : 'To Watched'
      )
    );
    root.append(li)
  });
 
}
