const menu = document.querySelector('.nav-menu');
const bars = document.querySelector('.nav-bars');
const closee = document.querySelector('.nav-close');


bars.addEventListener('click', function(){
    menu.classList.add('show-menu');
});

closee.addEventListener('click', function(){
    menu.classList.remove('show-menu');
})


function showHeader(){
   const headerr = document.querySelector('header');
   if(this.scrollY>=50) headerr.classList.add('show'); else headerr.classList.remove('show');
}

window.addEventListener('scroll', showHeader);