const navBtn = document.querySelectorAll('.home .btnsContainer button')[1]
const navPlaces = document.querySelector('.services');

// for(let i =0; i < navBtn.length; i++){
//     let navBtn = navBtn[i] 
//     let navPlace = navPlaces[i].getBoundingClientRect().top
//     navBtn.addEventListener('click', (event)=>{
//         window.scrollTo({
//             top: `${navPlace}`,
//             behavior: "smooth"
//         })
//     })
// }



    
navBtn.addEventListener('click', (event)=>{
    let navPlace = navPlaces.getBoundingClientRect().top

    window.scrollTo({
        top: `${navPlace}`,
        behavior: "smooth"
    })
})
