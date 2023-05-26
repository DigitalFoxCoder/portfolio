//работа с модальным окном
let modal_portfolio = document.querySelector('.modalPortfolio');
let modal_portfolio_content_container = document.querySelector('.modalPortfolio .contentContainer');
let portfolio_cards = document.querySelectorAll('.portfolio .swiper-wrapper img');
let open_form_modal = document.querySelector('.modalPortfolio button');

//данные которые выводятся в всплывающий блок в соответтсвии с id карточки
let work_heading = [
    'Heading 1', 
    'Heading 2', 
    'Heading 3',
    'Heading 4',
    'Heading 5',
    'Heading 6',
    'Heading 7',
    'Heading 8',
    'Heading 9',
]//загаловок кейса
let work_content = [
    'content', 
    'content',
    'content',
    'content',
    'content',
    'content',
    'content',
    'content',
    'content',
]//описание работы
let work_big_img = [
    'big_img', 
    'big_img',
    'big_img',
    'big_img',
    'big_img',
    'big_img',
    'big_img',
    'big_img',
    'big_img'
]//путь к главной картинке
let work_right_imgs = [
    ['small_img', 'small_img'], 
    ['small_img', 'small_img'],
    ['small_img', 'small_img'],
    ['small_img'],
    ['small_img', 'small_img'],
    ['small_img', 'small_img'],
    ['small_img', 'small_img'],
    ['small_img'],
    ['small_img', 'small_img']

]//картинки которые отображаются справа
let work_bottom_imgs = [
    ['small_img', 'small_img'], 
    ['small_img'],
    ['small_img', 'small_img', 'small_img'],
    [],
    ['small_img', 'small_img', 'small_img'],
    [],
    ['small_img', 'small_img'],
    [],
    ['small_img', 'small_img', 'small_img'],
]//картинки которые отображаются снизу
let final_work_imgs_content = []


function open_modal_portfolion(id){
    modal_portfolio.classList.add('active')
    document.querySelector('html').style.overflow = 'hidden'

    for(i in work_big_img){
        if(id-1 == i){
            final_work_imgs_content.push(work_big_img[id-1])
            final_work_imgs_content.push(work_right_imgs[id-1])
            final_work_imgs_content.push(work_bottom_imgs[id-1])
            final_work_imgs_content.push(work_heading[id-1])
            final_work_imgs_content.push(work_content[id-1])
        }
    }

    modal_portfolio_content_container.innerHTML = `
    <div class="imgsContainer">
            <div class="lineLarge">
                <div class="globalImg">
                    <img src="${final_work_imgs_content[0]}" alt="">
                </div>
                <div class="smallImgs">
                    ${final_work_imgs_content[1].length >= 1? `<img src="${final_work_imgs_content[1][0]}" alt="">`: ''}
                    ${final_work_imgs_content[1].length == 2? `<img src="${final_work_imgs_content[1][1]}" alt="">`: ''}
                </div>
            </div>
            <div class="lineLittle">
                <div class="smallI">
                    ${final_work_imgs_content[2].length >= 1? `<img src="${final_work_imgs_content[2][0]}" alt="">`: ''}
                    ${final_work_imgs_content[2].length >= 2? `<img src="${final_work_imgs_content[2][1]}" alt="">`: ''}
                    ${final_work_imgs_content[2].length == 3? `<img src="${final_work_imgs_content[2][2]}" alt="">`: ''}
                </div>
            </div>
        </div>
        
        <div class="textContainer">
            <div class="heading">
                <h3>${final_work_imgs_content[3]}</h3>
            </div>
            <p>${final_work_imgs_content[4]}</p>
        </div>
    </div>

`
    final_work_imgs_content.length = 0
}

function close_modalPortfolio(){
    modal_portfolio.classList.remove('active')
    document.querySelector('html').style.overflow = 'auto'
}

function close_modalPortfolio_and_open_form_modal(){
    modal_portfolio.classList.remove('active')
    modal.classList.add('active')
}

//работа со слайдером
let swiper_container = document.querySelector('.swiper-wrapper')
let cards = []
let id = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let heading = [
    'Heding',
    'Heding',
    'Heding',
    'Heding',
    'Heding',
    'Heding',
];
let content = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus dolor quas vitae blanditiis iure harum incidunt dicta ipsam aperiam tempore. Velit, eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat error veritatis, beatae, odio, ad impedit pariatur delectus',
];

for(let i = 0; i < id.length; i++){
    cards.push({
        id: id[i],
        heading: heading[i],
        content: content[i],
        img: './src/assets/imgs/portfolio_card'
    })
}

for(let i = 0; i < cards.length; i++){
    swiper_container.insertAdjacentHTML('beforeend', `<div class="swiper-slide"><img src=${cards[0].img+id[i]}.png alt="" onclick="open_modal_portfolion(${id[i]})"></div>`)
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }
    }


});

// close_btn_portfolio.addEventListener('click', ()=>{
//     modal_portfolio.classList.remove('active')
// })