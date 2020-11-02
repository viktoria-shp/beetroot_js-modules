//task_1
let name = prompt("What is your name?");
alert('Hello' + ' ' + name);

//task_2
/*const year = 2020;
let age = prompt("What year of birth?");
alert('You are' + ' ' + (year - age));*/

//task_3
/*let length = prompt("Enter side length of a square?");
alert('perimetr of a square =' + ' ' + 4*length);*/

//task_4
/*let radius = prompt("Enter the radius of the circle?");
const pi = 3.1415;
alert('radius of the circle =' + ' ' + pi*Math.pow(radius, 2));*/

//task_5
/*let s = prompt("Enter the distance"),
    t = prompt("Enter time");
alert('your speed should be ' + ' ' + (s/t));*/

//task_6
/*let s = prompt("Enter the amount in dollars");
const calk = 0.86;
alert('Euro ' + ' ' + (s*calk));*/

//task_7
/*let s = prompt("Enter flash drive volume in gigabytes");
const calk = 1024;
alert('you can hold'+' ' + Math.floor((s*calk)/860) + ' ' + 'files of 860 megabytes');*/

//task_8
/*let suma = prompt("Enter the amount"),
    price= prompt("Enter the price of chocolate");
alert('you can buy' +' ' + Math.floor(suma/price) + ' ' + ' chocolates. Your rest is =' +' ' + suma%price);*/

//task_9
/*let number = prompt("Enter a three-digit number"),
    revers = 0;
while (number != 0) {
    revers *= 10;
    revers += number % 10;
    number -= number % 10;
    number /= 10;
   }
console.log('Reverse number', revers);*/

//task_10
/*let s = prompt("Enter the amount ");
const procent = 5,
        time = 60;
alert('your procent ' + ' ' + (s*procent*time/365/100));*/

//task_1
/*let age = parseInt(prompt('Age?', 18));
    console.log(age, 8);
    let message = (age < 12) ? 'You are a child' :
    ((age > 12) && (age < 18)) ? 'You are teenager!' :
    ((age > 18) && (age < 60)) ? 'You are adults' :
    'You are pensioner';
    alert( message );*/

//task_2
/*let arg = prompt("Enter a number from 0 to 9?");
switch (arg) {
  case "0":
    alert("0 = )");
    break;
  case "1":
    alert("1 = !");
    break;
  case "2":
    alert("2 = @");
    break;
  case "3":
    alert("3 = #");
    break;
  case "4":
    alert("4 = $");
    break;
  case "5":
    alert("5 = %");
    break;
  case "6":
    alert("6 = ^");
    break;
  case "7":
    alert("7 = &");
    break;
  case "8":
    alert("8 = *");
    break;
  case "9":
    alert("9 = (");
    break;
  default:
    alert("number > 9");
}*/

//task_3
/*let number = prompt("Enter the number from 100 to 999", 0);
number = number + "";
if (
  number[0] == number[1] || number[0] == number[2] || number[1] == number[2]
) 
{
  alert("TRUE");
} 
else alert("FALSE");
*/

//task_4
/*let year = prompt("Enter year");
if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
  alert("Leap year");
} 
else alert("Not Leap Year");*/

//task_5
/*
function Palindrome()
	{
		var rem, temp, final = 0;
		let number = prompt("Enter number");
		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			alert("The inputed number is Palindrome");
		}
		else
		{
			alert("The inputted number is not palindrome");
		}
    }
    Palindrome();*/

//task_6
/*let sum = prompt('Enter the sum in USD:');
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
    switch(currency) {
        case '1':
            alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum*0.85 + ' ' +'EUR');
            break;
        case '2':
            alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum*28.35 + ' ' + 'UAH');
            break;
        case '3':
            alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum*1.7 + ' ' + 'AZN');
            break;
    }*/

//task_7
/*let sum = parseInt(prompt('Enter the sum'));
    let discount = ((sum >= 200) && (sum <= 300)) ? ('Your discounted price' + ' ' + (sum - sum*0.03)) :
    ((sum > 300) && (sum <= 500)) ? ('Your discounted price' + ' ' + (sum - sum*0.05)) :
    (sum > 500) ? ('Your discounted price' + ' ' + (sum - sum*0.07)) :
    'You don"t have discount';
    alert( discount );*/

//task_8
/*let diameter = parseInt(prompt('Enter diameter of the circle')),
        perimeter = parseInt(prompt('Enter perimeter of the square')),
        r = diameter/2,//circle radius
        a = perimeter/4,//side of squre
        rc = a/2;//the radius of the inscribed circle
    let message = (rc >= r) ? ('the circle can be inscribed in a square') : 'the circle can not be inscribed in a square';
    alert( message );*/

//task_9
/*let 
    mountain = prompt(
    "What is the highest mountain? 1 - Everest 2 - Kanchenjunga 3 - Goverla"
    ),
    lake = prompt(
    "Which is the deepest lake in the world? 1 - Baikal 2 - Tanganyika 3 - San Martín"
    ),
    country = prompt(
    "What is the smallest country in the world? 1 - Tavulu 2 - Monaco 3 - Vatican"
    ),
    mark = 0;
if (mountain == 1) {mark += 2};
if (lake == 1) mark += 2;
if (country == 3) mark += 2;
alert("Your bal is " + mark);*/

//task_10
/*let date = new Date(prompt('Enter Date (yyyy-mm-dd)'));
date.setDate(date.getDate() + 1);
console.log( date )*/
