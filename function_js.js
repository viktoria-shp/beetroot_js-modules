function fun_js() {
    //Function

    //task_1
    /*Написать функцию, которая принимает 2 числа и возвращает -1, 
    если первое меньше, чем второе; 1 – если первое больше, 
    чем второе; и 0 – если числа равны. */
    $("#g4t1").on("click", function(){
        let x = prompt(`Enter first number`);
        let y = prompt(`Enter second number`);
        let numbers = function comparison(a, b) {return a < b ? -1 : a > b ? 1 : 0;}
        alert (numbers(x, y));
    });
    //task_2
    /*Написать функцию, которая вычисляет факториал переданного ей числа. */
    $("#g4t2").on("click", function(){
        let a = prompt(`Enter number`);
        function factorial(n) {
            if ((n === 0) || (n === 1))
              return 1;
            else
              return (n * factorial(n - 1));
          }
        alert (factorial(a));
    });
    //task_3
    /*Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
     Например: цифры 1, 4, 9 превратятся в число 149. */
    $("#g4t3").on("click", function(){
        let x = prompt(`Enter first number`);
        let y = prompt(`Enter second number`);
        let z = prompt(`Enter third number`);
        let MyNam;
        function number (join) {
            join = x+y+z;
            MyNam = Number(join);
            return MyNam;
        }
        alert (number(MyNam));
    });
    //task_4
    /*Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
    Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. */
    $("#g4t4").on("click", function(){
        let numbers = function comparison(a, b) {
            return a, b ? (`The area of the rectangle is ${(a * b)}`) : (`The area of the square is ${(a*a)}`);
        }
        alert (numbers(2, 3));
    });
    //task_5
    /*Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
    Совершенное число – это число, равное сумме всех своих собственных делителей. */
    $("#g4t5").on("click", function(){
        function perfect_number() {
            let number = parseInt(prompt("Enter the number")),
            divisors = [];
            for (let i = 1; i <= number; i ++) {
                if (number%i == 0 && number!==i) {
                    divisors.push(i);
                }
            } 
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let sum = (divisors.reduce(reducer));  
            if (sum == number) {
                alert(`Your number ${number}  is perfect`);
            }else {
                alert(`Your number ${number}  is simple`);
            }        
        }
        perfect_number();
    });
    //task_6
    /*Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
    и выводит только те числа из диапазона, которые являются совершенными. 
    Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. */
    $("#g4t6").on("click", function(){
        const min = parseInt(prompt(`Enter min number of range`));
        const max = parseInt(prompt(`Enter max number of range`));        
        let perfect_numbers = [];
        function perfect_range() {
            nextNumber:
            for (let number = min; number <= max; number++) {
                let divisors = [];
                for (let i = 1; i <= number; i ++) {
                    if (number%i == 0 && number!==i) {
                        divisors.push(i);
                    }
                }                 
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let sum = 0;                
                if (divisors.length) {
                   sum = (divisors.reduce(reducer));  
                }
                if (sum == number) {
                    perfect_numbers.push(number);
                }
            }  
            alert(perfect_numbers.join(" , "));
        }
        perfect_range();
    });
    //task_7
    /*Написать функцию, которая принимает время (часы, минуты, секунды) 
    и выводит его на экран в формате «чч:мм:сс».
    Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */
    $("#g4t7").on("click", function(){
        const h = parseInt(prompt(`Enter hours`)),
              m = parseInt(prompt(`Enter minutes`)),
              s = parseInt(prompt(`Enter seconds`));
        function formatTime(hour, min, sec) {
            let time = new Date();
            time.setHours(hour);
            time.setMinutes(min);
            time.setSeconds(sec);
            let h = time.getHours();
            if (h < 10) h = '0' + h;          
            let m = time.getMinutes();
            if (m < 10) m = '0' + m;          
            let s = time.getSeconds();
            if (s < 10) s = '0' + s;          
            return h + ':' + m + ':' + s;
          }
          alert( formatTime(h, m, s) ); 
    });
    //task_8
    /*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах. */
    $("#g4t8").on("click", function(){
        const h = parseInt(prompt(`Enter hours`)),
              m = parseInt(prompt(`Enter minutes`)),
              s = parseInt(prompt(`Enter seconds`));
        function getSeconds(hour, min, sec) {
            let time = new Date();
            time.setHours(hour);
            time.setMinutes(min);
            time.setSeconds(sec);
            return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
        }
        alert(getSeconds(h, m, s));
    });
    //task_9
    /*Написать функцию, которая принимает количество секунд, переводит их в часы, 
    минуты и секунды и возвращает в виде строки «чч:мм:сс». */
    $("#g4t9").on("click", function(){
        const s = parseInt(prompt(`Enter seconds`));
        function formatTime(sec) {
            let time = new Date();
            time.setHours(0);
            time.setMinutes(0);
            time.setSeconds(sec);
            let h = time.getHours();
            if (h < 10) h = '0' + h;          
            let m = time.getMinutes();
            if (m < 10) m = '0' + m;          
            let s = time.getSeconds();
            if (s < 10) s = '0' + s;          
            return h + ':' + m + ':' + s;
          }
          alert( formatTime(s) ); 
    });
    //task_10
    /*Написать функцию, которая считает разницу между датами. 
    Функция принимает 6 параметров, которые описывают 2 даты, 
    и возвращает результат в виде строки «чч:мм:сс». 
    При выполнении задания используйте функции из предыдущих 2-х заданий: 
    сначала обе даты переведите в секунды, узнайте разницу в секундах, 
    а потом разницу переведите обратно в «чч:мм:сс» */
    $("#g4t10").on("click", function(){
        const h1 = parseInt(prompt(`Enter hours`)),
              m1 = parseInt(prompt(`Enter minutes`)),
              s1 = parseInt(prompt(`Enter seconds`)),
              h2 = parseInt(prompt(`Enter second hours`)),
              m2 = parseInt(prompt(`Enter second minutes`)),
              s2 = parseInt(prompt(`Enter second seconds`));
        function getSeconds(hour, min, sec) {
            let time = new Date();
            time.setHours(hour);
            time.setMinutes(min);
            time.setSeconds(sec);
            return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
        }
        function formatTime(sec) {
            let time = new Date();
            time.setHours(0);
            time.setMinutes(0);
            time.setSeconds(sec);
            let h = time.getHours();
            if (h < 10) h = '0' + h;          
            let m = time.getMinutes();
            if (m < 10) m = '0' + m;          
            let s = time.getSeconds();
            if (s < 10) s = '0' + s;          
            return h + ':' + m + ':' + s;
          }
          function oddsDate (h1, m1, s1, h2, m2, s2) {
            let odsSec = Math.abs(getSeconds(h1, m1, s1) - getSeconds(h2, m2, s2));
            return formatTime(odsSec);
          }
          alert(oddsDate(h1, m1, s1, h2, m2, s2));
    });
}
export {fun_js};