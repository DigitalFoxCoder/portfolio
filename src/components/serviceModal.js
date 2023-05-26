let modalService = document.querySelector('.modalService');
let modalService_content = document.querySelector('.modalService .content');
let service_btns = document.querySelectorAll('.services button');

let service_heading = [
    'Маркетинговые услуги',
    'Дизайн сайтов',
    'Разработка сайтов',
    'Контекстная реклама',
    'Подключение и/или оптимизация AMOCRM'
]//заголовок услуги
let service_global_steps = [
    [
        'Step 1', 
        'Step 2', 
        'Step 3', 
        'Step 4', 
    ],
    [
        'Step 1', 
        'Step 2', 
        'Step 3', 
        'Step 4', 
    ],
    [
        'Step 1', 
        'Step 2', 
        'Step 3', 
        'Step 4', 
    ],
    [
        'Step 1', 
        'Step 2', 
        'Step 3', 
        'Step 4', 
    ],
    [
        'Step 1', 
        'Step 2', 
        'Step 3', 
        'Step 4', 
    ],
]
let service_description_step = [
    [
        'description 1',
        'description 2',
        'description 3',
        'description 4'
    ],
    [
        'description 1',
        'description 2',
        'description 3',
        'description 4'
    ],
    [
        'description 1',
        'description 2',
        'description 3',
        'description 4'
    ],
    [
        'description 1',
        'description 2',
        'description 3',
        'description 4'
    ],
    [
        'description 1',
        'description 2',
        'description 3',
        'description 4'
    ]
]
let service_price = [
    '1 000', '2 000', '3 000', '4 000', '5 000'
]
let service_time = [
    '1', '2', '3', '4', '5'
]


for(let i = 0; i < service_btns.length; i++){
    service_btns[i].addEventListener('click', ()=>{
        modalService.classList.add('active')
        // document.body.style.overflow = 'hidden'
        modalService_content.innerHTML = `
            <div class="serviceInfo">
                <h2>${service_heading[i]}</h2>
                <div class="moreInfo">
                    <h5>${service_global_steps[i][0]} - ${service_description_step[i][0]}</h5>
                    <h5>${service_global_steps[i][1]} - ${service_description_step[i][1]}</h5>
                    <h5>${service_global_steps[i][2]} - ${service_description_step[i][2]}</h5>
                    <h5>${service_global_steps[i][3]} - ${service_description_step[i][3]}</h5>
                    <h5>Цена: от ${service_price[i]} р.</h5>
                    <h5>Срок исполнения: от ${service_time[i]} дней</h5>
                </div>
                <button class="openFormBtn">Заказать услугу</button>
            </div>
            <div class="serviceSteps">
                <img src="./src/assets/imgs/closeModal_service.png" alt="" class="close">
                <div class="step">
                    <img src="./src/assets/imgs/01.png" alt="">
                    <h3>${service_global_steps[i][0]}</h3>
                </div>
                <div class="step">
                    <img src="./src/assets/imgs/02.png" alt="">
                    <h3>${service_global_steps[i][1]}</h3>
                </div>
                <div class="step">
                    <img src="./src/assets/imgs/03.png" alt="">
                    <h3>${service_global_steps[i][2]}</h3>
                </div>
                <div class="step">
                    <img src="./src/assets/imgs/04.png" alt="">
                    <h3>${service_global_steps[i][3]}</h3>
                </div>
                <img src="./src/assets/imgs/serviceModal_decorative.png" alt="" class="bg">
            </div>
        `
        document.querySelector('html').style.overflow = 'hidden'
    })
}




modalService.addEventListener('click', (event)=>{
    if(event.target.closest('.close')){
        modalService.classList.remove('active')
        document.querySelector('html').style.overflow = 'auto'
    }

    if(event.target.closest('.openFormBtn')){
        modalService.classList.remove('active')
        modal.classList.add('active')
    }
})