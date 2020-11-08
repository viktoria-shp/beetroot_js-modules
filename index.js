$(function(){
    //task_1
    $("#g1t1").on("click", function(){
        const name = prompt("What is your name?");
        alert('Hello' + ' ' + name);
    });
    //task_2
    $("#g1t2").on("click", function(){
        const year = 2020;
        const age = prompt("What year of birth?");
        alert('You are' + ' ' + (year - age));
    });
    //task_3
    $("#g1t3").on("click", function(){
        const length = prompt("Enter side length of a square?");
        alert('perimetr of a square =' + ' ' + 4*length);
    });
    //task_4
    $("#g1t4").on("click", function(){
        const radius = prompt("Enter the radius of the circle?");
        const pi = 3.1415;
        alert('radius of the circle =' + ' ' + pi*Math.pow(radius, 2));
            });
    //task_5
    $("#g1t5").on("click", function(){
        const s = prompt("Enter the distance"),
        t = prompt("Enter time");
        alert('your speed should be ' + ' ' + (s/t));
    });
    //task_6
    $("#g1t6").on("click", function(){
        const s = prompt("Enter the amount in dollars");
        const calk = 0.86;
        alert('Euro ' + ' ' + (s*calk));
    });
    //task_7
    $("#g1t7").on("click", function(){
        const s = prompt("Enter flash drive volume in gigabytes");
        const calk = 1024;
        alert('you can hold'+' ' + Math.floor((s*calk)/860) + ' ' + 'files of 860 megabytes');
    });
    //task_8
    $("#g1t8").on("click", function(){
        const suma = prompt("Enter the amount"),
        price= prompt("Enter the price of chocolate");
        alert('you can buy' +' ' + Math.floor(suma/price) + ' ' + ' chocolates. Your rest is =' +' ' + suma%price);
    });
    //task_9
    $("#g1t9").on("click", function(){
        let number = prompt("Enter a three-digit number"),
        revers = 0;
        while (number != 0) {
            revers *= 10;
            revers += number % 10;
            number -= number % 10;
            number /= 10;
        };
        alert('Reverse number ' + revers);
    });
    //task_10
    $("#g1t10").on("click", function(){
        const s = prompt("Enter the amount ");
        const procent = 5,
                time = 60;
        alert('your procent ' + ' ' + (s*procent*time/365/100));
    });

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


    //Cicle

    //task_1
    $("#g3t1").on("click", function(){
        let a = Number(prompt("Enter the beginning of the range")),
            n = Number(prompt("Enter the end of the range")),
            sum = 0;        
        while(a <= n){       
            sum+=a;  
            a++;
            }        
        alert(sum)
    });
    //task_2
    $("#g3t2").on("click", function(){
        let a = prompt("Enter the first number"),
            b = prompt("Enter the second number");
        let gcd = function(a, b) {
            if ( b == 0) {
                return a;
            }
        
            return gcd(b, a % b);
        };
        alert(`The greatest common divisor for numbers  ${a} and ${b} is ${gcd(parseInt(a), parseInt(b))}`);
    });
    //task_3
    $("#g3t3").on("click", function(){
        let number = parseInt(prompt("Enter the number")),
            divisors = [];
        for (let i = 1; i <= number; i ++) {
            if (number%i == 0 && number!==i && i!==1) {
                divisors.push(i);
            }
        }    
        if (divisors.length) {
            alert(`Divisors for number ${number}  is ${divisors.join(', ')}.`);
        }else {
            alert(`There are not divisors for number ${number}.`)
        }
        
    });
    //task_4
    $("#g3t4").on("click", function(){
        const numb1 = parseInt(prompt("Enter number : ", ));
        function getDigitAmount(n) {
            let c = 1;
            while (( n /= 10)>=1)
                c++;
            return (c);
        }
        alert( getDigitAmount(numb1));
    });
    //task_5
    $("#g3t5").on("click", function(){
        const countNumbers = 4;
        let numbers = [];
        let c = 1;
        while (c <= countNumbers) {
            const number = parseInt(prompt(`Enter ${c} number : ` ));
            numbers.push(number);
            c++;
        }
        let negativeNumbersCount = 0;
        let positiveNumbersCount = 0;
        let oddNumbers = 0;
        let evenNumbers = 0;
        let usernul = 0;
        numbers.forEach(function(number) {
            if (number ==0) {
                usernul++;
            }
            if (number < 0) {
                negativeNumbersCount++;
            } else {
                positiveNumbersCount++;
            }
            if (number % 2 == 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }
        });
        alert(`Entered numbers ${numbers} Null ${usernul} PositiveNumbers ${positiveNumbersCount}, NegativeNumbers ${negativeNumbersCount}, EvenNumbers ${evenNumbers}, OddNumbers ${oddNumbers}`);
    });
    //task_6
    $("#g3t6").on("click", function(){
        while (true) {
            const a = +prompt('Enter first number');
            const b = +prompt('Enter second number');
            const op = prompt('Select a character - + / *');
            const action = {
              '+': () => a + b,
              '-': () => a - b,
              '/': () => a / b,
              '*': () => a * b
            }[op];
            if (action){
                alert(action());
            } else {
                alert (`Wrong sign`)
            }          
            if (!confirm('Do you want to solve another example?')) break;
          }
    });
    //task_7
    $("#g3t7").on("click", function(){
        let number = prompt(`Enter number`);
        let a = prompt(`How many digits should I move it?`); 
        alert(number.replace(RegExp("(\\d{" + a + "})(\\d*)$"), "$2$1"));

    });
    //task_8
    $("#g3t8").on("click", function(){
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let currDay = 0;
        while (confirm(`${days[currDay]}. Do you want to see next day?`)) {
        currDay = (currDay + 1) % days.length;
        }
    });
    //task_9
    $("#g3t9").on("click", function(){
        var cd  = '<table cellpadding="6" cellspacing="3" border="1">\n';
            cd += '<tr>\n';
        for (var i = 1; i <= 9; i++) 
            cd += '<td align="right"><font color="red">&nbsp;' + ((i == 1) ? '' : i) + '</font></td>\n';
        for (i = 1; i <= 10; i++)
            {
            cd += '<tr>\n';
            for (var j = 1; j <= 9; j++)
            cd += '<td align="right">' + ((j == 1) ? ('<font color="red">&nbsp;' + i + '</font>') : i * j) + '</td>\n';
            cd += '</tr>\n';
            }
            cd += '</table>';
        with (document) open (), write (cd), close ();
    });
    //task_10
    $("#g3t10").on("click", function(){
        let left = 1, 
            current, 
            is_right,
            right = 100;
        while (1){
            current = parseInt((left+right)/2);
            is_right = prompt( `Your number:${current}?(=, >, <)`);
            if (is_right == '=') {
                alert(`I guess your number. Your number is ${current}.`);
                break;
            } else if(is_right =='>') {
                left = current + 1;
            }
            else if (is_right =='<') {
                right = current - 1;
            }
        }
    });
});


$('.accordion-toggle').click(function(e) {
    e.preventDefault();  
  $("a:first-of-type").removeClass('chev');
  
  let $this = $(this);
  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .accordion-inner').removeClass('show');
      $this.parent().parent().find('li .accordion-inner').slideUp(350);
      $this.toggleClass('chev');
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

