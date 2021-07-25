const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')


let idx = 0

let interval = setInterval(run, 7000)

function run() {
  
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 2) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 2
    }
    let realWidth = img.naturalWidth;
    let realHeight = img.naturalHeight;
    let k=realHeight / realWidth;
    console.log(k);
if (k<0){
    
}
imgs.style.transform = `translateX(${-idx * 42}rem)`
    
    //==43.3=>22 
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 7000)
    
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})