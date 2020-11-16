function cicle() {
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
        let cd  = '<table cellpadding="6" cellspacing="3" border="1">\n';
            cd += '<tr>\n';
        for (let i = 1; i <= 9; i++) 
            cd += '<td align="right"><font color="red">&nbsp;' + ((i == 1) ? '' : i) + '</font></td>\n';
        for (i = 1; i <= 10; i++)
            {
            cd += '<tr>\n';
            for (let j = 1; j <= 9; j++)
            cd += '<td align="right">' + ((j == 1) ? ('<font color="red">&nbsp;' + i + '</font>') : i * j) + '</td>\n';
            cd += '</tr>\n';
            }
            cd += '</table>';
        //document.open (), document.write (cd), document.close ();
        document.body.innerHTML = cd;
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
}
export {cicle};