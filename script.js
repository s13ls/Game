const globalMousePosText = document.getElementById('output');
const localMousePosText = document.getElementById('local-mouse-pos');
const box = document.querySelector(".player")
let rect = box.getBoundingClientRect()


let localMousePos = { x: undefined, y: undefined };
let globalMousePos = { x: undefined, y: undefined };

// window.addEventListener('mousemove', (event) => {
//   const localX = event.clientX - event.target.offsetLeft;
//   const localY = event.clientY - event.target.offsetTop;
//   localMousePos = { x: localX, y: localY };
  
//   globalMousePos = { x: event.clientX, y: event.clientY };

//   globalMousePosText.textContent = `(${globalMousePos.x}, ${globalMousePos.y})`;
//   localMousePosText.textContent = `(${localMousePos.x}, ${localMousePos.y})`;

  
// });

let listener = function(e) {
    box.style.left = e.pageX - 50 + "px";
    box.style.top = e.pageY - 50 + "px";
    box.style.cursor = 'none'
    globalMousePosText.innerText = `X: ${e.pageX}  Y: ${e.pageY}`  
};


box.addEventListener('click', e => {
    document.addEventListener('mousemove', listener)
})


const enemies = document.querySelector('.enemies')

function GenerateEnemy() {
    let enemy = document.createElement("div")
    enemy.className = "enemy"
    enemies.append(enemy)
    enemy.style.transform = `translate(1000px, 0)`
    // setInterval(()=>{
       
    // }, 10000000)
}

GenerateEnemy()


