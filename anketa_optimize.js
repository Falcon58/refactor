function check_error(){
//Проверка имени				
	if (/^[а-яА-Яa-zA-Z]+$/.test(document.getElementById("name").value)){
		output("check_name", true);
}
	else{
		output("check_name", false);
	}
//проверка фамилии					
	if (/^[а-яА-Яa-zA-Z]+$/.test(document.getElementById("famile").value)){
		output("check_famile", true);
	}
	else{
		output("check_famile", false);
	}
//проверка ника	
	if (/^[0-9a-zA-Z]+$/.test(document.getElementById("nickname").value)){
		output("check_nickname", true);
	}
	else{
		output("check_nickname", false);
	}
//проверка даты			
	if (/(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.([1][9][0-9]{2}|[2][0][0][0-5]{1})/.test(document.getElementById("data").value)){
		output("check_data", true);
	}
	else{
		output("check_data", false);
	}
//проверка электронной почты	
	if (/^([a-z0-9_]+)@(mail|yandex|rambler|gmail|microsoft|example)\.[a-z]{2,3}$/.test(document.getElementById("email").value)){
		output("check_email", true);
	}
	else{
		output("check_email", false);
	}	
//проверка сотового телефона
if (/^\+?[7]?[8]?(\(?\d{3}?\))?[\d{3}]?[\-]?[\d]{2,3}?[\-]?[\d]{1,3}?$/.test(document.getElementById("phone").value)){
		output("check_phone", true);
	}
	else{
		output("check_phone", false);
	}
//проверка номера банковской карты
if (/^[\d]{4}-?[\d]{4}-?[\d]{4}-?[\d]{4}$/.test(document.getElementById("bank").value)){
		output("check_bank", true);
	}
	else{
		output("check_bank", false);
	}
//проверка паспортных данных
if (/^[\d]{4}-?[\d]{6}$/.test(document.getElementById("pasport").value)){
		output("check_pasport", true);
	}
	else{
		output("check_pasport", false);
	}
}
//функция выводит знак проверки
function output(adress, object){	
if(object){
		document.getElementById(adress).innerHTML = '<img src="yes.png">';
	}
	else{	
		document.getElementById(adress).innerHTML = '<img src="no.png">';
	}
}