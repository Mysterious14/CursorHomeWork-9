function generateBlocks() {
  let parent = document.getElementById('container');

  for (let i = 0; i < 25; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = '#' + (Math.floor(Math.random() * (999999 - 100000)) + 100000);
    parent.appendChild(div);
  }
}
generateBlocks();
function generateBlocksInterval() {
  let parent = document.getElementById('container');
  let h1 = document.createElement('h1');
  h1.innerHTML = 'Advanced';
  parent.appendChild(h1);

  for (let i = 0; i < 25; i++) {
    let div = document.createElement('div');
    div.classList.add('box');

    setInterval(() => {
      div.style.backgroundColor = '#' + (Math.floor(Math.random() * (999999 - 100000)) + 100000);
    }, 500);
    parent.appendChild(div);
  }
}
generateBlocksInterval();
