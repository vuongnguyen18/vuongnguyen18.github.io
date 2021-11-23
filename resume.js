let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-header');
let halfSpan = document.querySelectorAll('.half');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(() => {
        halfSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx+1)*400)
        });

        setTimeout(()=>{
            halfSpan.forEach((span, idx)=> {

                setTimeout(()=> {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx+1)*50)
            })
        },2000);

        setTimeout(()=> {
            intro.style.top='-100vh'
        },2300)
    })

})