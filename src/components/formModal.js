let modal = document.querySelector('.modalForm');
let home_btn = document.querySelector('.home .btnsContainer button');

function stop_scrollign(){
    document.addEventListener('scroll', function(e) {
        e.preventDefault();
      }, { passive: false });
}


home_btn.addEventListener('click', ()=>{
    modal.classList.add('active')
    // document.body.style.overflow = 'hidden'
    document.querySelector('html').style.overflow = 'hidden'
})

modal.addEventListener('click', (event)=>{
    if(event.target.closest('.close')){
        modal.classList.remove('active')
        document.querySelector('html').style.overflow = 'auto'
    }
})