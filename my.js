


let clickMe = document.getElementById('click');
let moreInfo = document.getElementById('para2');

 
function showMore(){
    moreInfo.style.display= 'block';
        clickMe.style.display = 'none';
        button.style.cursor= 'default'
}

clickMe.addEventListener('click',showMore)