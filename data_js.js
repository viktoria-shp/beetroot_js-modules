function data_js() {
//Data types and operators
    //task_1
    $("#g2t1").on("click", function(){
        const age = parseInt(prompt('Age?', 18));
        console.log(age, 8);
        let message = (age < 12) ? 'You are a child' :
        ((age > 12) && (age < 18)) ? 'You are teenager!' :
        ((age > 18) && (age < 60)) ? 'You are adults' :
        'You are pensioner';
        alert( message );
    });
    //task_2
    $("#g2t2").on("click", function(){
        const arg = prompt("Enter a number from 0 to 9?");
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
        }
    });
    //task_3
    $("#g2t3").on("click", function(){
        let number = prompt("Enter the number from 100 to 999", 0);
        number = number + "";
        if (
        number[0] == number[1] || number[0] == number[2] || number[1] == number[2]
        ) 
        {
        alert("TRUE");
        } 
        else alert("FALSE");
    });
    //task_4
    $("#g2t4").on("click", function(){
        const year = prompt("Enter year");
        if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
        alert("Leap year");
        } 
        else alert("Not Leap Year");
    });
    //task_5
    $("#g2t5").on("click", function(){
        function Palindrome() {
		let rem, temp, final = 0;
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
        Palindrome();
    });
    //task_6
    $("#g2t6").on("click", function(){
        const sum = prompt('Enter the sum in USD:');
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
        }
    });
    //task_7
    $("#g2t7").on("click", function(){
        const sum = parseInt(prompt('Enter the sum'));
        let discount = ((sum >= 200) && (sum <= 300)) ? ('Your discounted price' + ' ' + (sum - sum*0.03)) :
        ((sum > 300) && (sum <= 500)) ? ('Your discounted price' + ' ' + (sum - sum*0.05)) :
        (sum > 500) ? ('Your discounted price' + ' ' + (sum - sum*0.07)) :
        'You don"t have discount';
        alert( discount );
    });
    //task_8
    $("#g2t8").on("click", function(){
        const diameter = parseInt(prompt('Enter diameter of the circle')),
        perimeter = parseInt(prompt('Enter perimeter of the square')),
        r = diameter/2,//circle radius
        a = perimeter/4,//side of squre
        rc = a/2;//the radius of the inscribed circle
        let message = (rc >= r) ? ('the circle can be inscribed in a square') : 'the circle can not be inscribed in a square';
        alert( message );
    });
    //task_9
    $("#g2t9").on("click", function(){
        let mountain = prompt("What is the highest mountain? 1 - Everest 2 - Kanchenjunga 3 - Goverla"),
            lake = prompt("Which is the deepest lake in the world? 1 - Baikal 2 - Tanganyika 3 - San Martín"),
            country = prompt("What is the smallest country in the world? 1 - Tavulu 2 - Monaco 3 - Vatican"),
            mark = 0;
        if (mountain == 1) {mark += 2};
        if (lake == 1) mark += 2;
        if (country == 3) mark += 2;
        alert("Your bal is " + mark);
    });
    //task_10
    $("#g2t10").on("click", function(){
        let date = new Date(prompt('Enter Date (yyyy-mm-dd)'));
        date.setDate(date.getDate() + 1);
        alert( date )
    }); 
}
export {data_js};