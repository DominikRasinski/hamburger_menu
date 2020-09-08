const btnMenu = document.querySelector('.hamburger');
const aside = document.querySelector('.menu');
const firstLine = document.querySelector('.top-line');
const secondLine = document.querySelector('.middle-line');

function actionMenu(){
    btnMenu.classList.toggle('action');
    if(btnMenu.classList.contains('action')){
        btnMenu.style.borderTop = 'none';
        firstLine.style.transform = 'rotate(45deg) translateY(4px)';
        secondLine.style.transform = 'rotate(-45deg) translateY(-4px)';
        firstLine.style.transition = 'transform .3s';
        secondLine.style.transition = 'transform .3s';
    }
    else{
        btnMenu.style.borderTop = '5px solid #ffffff';
        firstLine.style.transform = 'rotate(0deg)';
        secondLine.style.transform = 'rotate(0deg) translateY(10px)';
    }
}
function showMenu(){
    aside.classList.toggle('active');
    if(aside.classList.contains('active')){
        aside.style.left = '10px';
        aside.style.transition = 'left .3s';
    }
    else{
        aside.style.left = '-300px';
    }
}
// funkcja zamykajaca menu klikajac w miejsce na stronie
$(document).click(function(event){
    let clickover = $(event.target);
    let _opened = $(".menu").hasClass("active");
    if(_opened === true && !clickover.hasClass("hamburger")){
        $(".hamburger").click();
    }
});
btnMenu.addEventListener('click', actionMenu);
btnMenu.addEventListener('click', showMenu);


