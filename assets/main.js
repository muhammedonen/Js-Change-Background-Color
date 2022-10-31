const img = document.querySelector('img');
const body = document.querySelector('body');
const colors = ['624F82','61764B','F6F6C9','FD841F','FF8DC7','3C4048','E1FFB1','F5EFE6','6F38C5','54B435','F0FF42'];



body.style.backgroundColor ='#AEBDCA';
document.getElementById('colorCode').innerText = "#AEBDCA"
img.addEventListener('click',ChangeColor);


function ChangeColor() {
    const colorIndex = parseInt(Math.random() * colors.length)
    var color = colors.map(e => '#' + e)
   
    body.style.backgroundColor = color[colorIndex]
   document.getElementById('colorCode').innerText = color[colorIndex];
   
    
}