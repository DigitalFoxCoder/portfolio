// window.addEventListener('DOMContentLoaded', ()=>{
// 	const form = document.querySelector('#form');//получаю саму форму
// 	form.addEventListener('submit', formSend);//при отправке формы должна будет 	заработать функция formSend
	
// 	async function formSend(event){
// 		event.preventDefault();//отменяет стандартное действие при клике на отправку 		формы, что бы сама форма отправилась, а не обновилась страница
		
// 		let error = formValidate(form);	

// 		let formData = new FormData(form);
// 		formData.append('image', formImage.files[0]);
		
// 		if(error == 0){
// 			//сюда можно ввести действия если не будет ошибок при заполнении
//       		alert('Ошибок нет, можно продолжать изучение');
// 			//данный класс сробатывает когда сообщение отправляется, можно как угодно остилизовать его самостоятельно(можно добавить гифку загрузки)
// 			form.classList.add('sending')
// 			//данный функционал необходимо записать для отправки самого сообщения
// 			let response = await fetch('sendmail.php', {
// 				method: 'POST',
// 				body: formData
// 			})//при успешной отправке запроса будет братся логика из файла sendmail.php, можно будет создать файл с другим названием и назвать по другому

// 			if(response.ok){
// 				let result = await response.json();
// 				alert(result.message);
// 				formPreview.innerHTML = '';//если есть форма, при отправке сообщения удаляются картинки с формы и отправляются в сообщение
// 				form.reset();//очищение заполненной информации в форме и отправка на почту
// 				form.classList.remove('sending')//после отправки сообщения удаляет гифку загрузки
// 			}else{
// 				alert('Ошибка');
// 				form.classList.remove('sending');//после выявления ошибки удаляет гифку загрузки
// 			}
// 		}else{
// 			// сюда можно ввести действия если будут ошибки при заполнении
//       		alert('Ошибка');
// 		}
		
// 	}

// 	function formValidate(form){
// 		let error = 0;
// 		let formReq = document.querySelectorAll('.req');//получает все элементы с 			классом req(сокращённо requer, что переводится как обязательное), этот класс 		необходимо добавить ко всем input, в которых поля должны быть обязательно 		заполнены(как минимум Имя, почта и подтверждение согласия на обработку 		данных)

// 		for(let i = 0; i < formReq.length; i++){
// 			let input = formReq[i];
// 			formRemoveError(input);//если не были заполненны данные в форме и 			появилась ошибка, при повторном заполнении убираются классы 				говорящие об этой ошибке

// 			if(input.classList.contains('email')){
// 				if(emailTest(input)){
// 					formAddError(input);
// 					error++;
// 				}//если тест не пройден, выдаёт ошибку
// 			}else if(input.getAttribute("type") === "checkbox" && input.checked === false){
// 				formAddError(input);
// 				error++;
// 				//если не будет подтверждено согласие на обработку данных
// 			}else{
// 				if(input.value == ''){
// 					formAddError(input);
// 					error++;
// 				}
// 			}//Проверяет заполнена ли строка вообще
// 		}//проверяет каждый input с классов req на заполнение

// 		return error;//возвращает количество ошибок для обработки данных в функции formSend
// 	}

// 	function formAddError(input){
// 		input.parentElement.classList.add('error');
// 		input.classList.add('error');
// 	}//добавляет класс error если в input с классом req не были заполнены данные

// 	function formRemoveError(input){
// 		input.parentElement.classList.remove('error');
// 		input.classList.remove ('error');
// 	}//удаляет класс error если в input с классом req были заполнены данные

// 	function emailTest(input){
// 		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	}//фунция проверяет с помощью регулярного выражения присутствует ли @ и точка

// 	//далее уже будет описана логика для отобраения загруженной картинки для input file, усли нет необходимости добавлять этот inpu, то этот функционал записывать нет смысла
// 	const formImage = document.querySelector('#formImage');//получаю input file
// 	const formPreview = document.querySelector('#formPreview');//получаю загруженную картинку

// 	formImage.addEventListener('change', ()=>{
// 		uploadFile(formImage.files[0]);
// 	})//когда пользователь будет выбирать какой-то файл, будет сробатывать событие

// 	function uploadFile(file){
// 		if(!['image/jpeg', 'image/png'].includes(file.type)){
// 			alert('разрешены только изображения');
// 			formImage.value = '';
// 			return;
// 		}//проверка типа файла

// 		if(file.size > 2 * 1024*1024){
// 			alert('Файл должен быть менее 2 мб');
// 			return;
// 		}//проверка на размер файла(в данном случае 2мб)

// 		let reader = new FileReader();
// 		reader.onload = function(event){
// 			formPreview.innerHTML = `<img src="${event.target.result}" alt="Фото">`;
// 		}//при соответствии требованиям файл выводится рядом с input file
// 		reader.onerror = function(event){
// 			alert('Ошибка');
// 		}//при ошибке говорит об этом
// 		reader.readAsDataURL(file);
// 	}
// })