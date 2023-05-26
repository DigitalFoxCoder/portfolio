// let parent_elem = document.querySelector('.faq');
// parent_elem.addEventListener('click', (event)=>{
//     if(event.target.closest('.questionBlock')){
//         if(event.target == )
//         event.target.parentElement.classList.toggle('active')
//     }
// })

let all_blocks = document.querySelectorAll('.faq .questionBlock');
all_blocks.forEach(item =>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active')
    })
})