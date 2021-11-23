const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2000);
})


const header = document.querySelectior('.header');

 window.onscroll = function(){
     var top = window.scrollY;
     console.log(top);
     if (top >= 50) {
         header.classList.add('active')
     } else {
         header.classLixt.remove('active');
     }
 }