function check_error(){
//Проверка имени				
output(/^[а-яА-Яa-zA-Z]+$/, "name");
//проверка фамилии					
output(/^[а-яА-Яa-zA-Z]+$/, "famile");
//проверка ника	
output(/^[0-9a-zA-Z]+$/, "nickname");
//проверка даты			
output(/(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.([1][9][0-9]{2}|[2][0][0][0-5]{1})/, "data");
//проверка электронной почты	
output(/^([a-z0-9_]+)@(mail|yandex|rambler|gmail|microsoft|example)\.[a-z]{2,3}$/, "email");
//проверка сотового телефона
output(/^\+?[7]?[8]?(\(?\d{3}?\))?[\d{3}]?[\-]?[\d]{2,3}?[\-]?[\d]{1,3}?$/, "phone");
//проверка номера банковской карты
output(/^[\d]{4}-?[\d]{4}-?[\d]{4}-?[\d]{4}$/, "bank");
//проверка паспортных данных
output(/^[\d]{4}-?[\d]{6}$/, "pasport");
}
//функция выводит знак проверки
function output(regex, object){
   var icon = "no"
   if(regex.test(document.getElementById(object).value)) icon = "yes";
   document.getElementById("check_" + object).innerHTML = '<img src=\"' + icon + '.png">';
}