// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"basics_js.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basics = basics;

function basics() {
  //task_1
  $("#g1t1").on("click", function () {
    var name = prompt("What is your name?");
    alert('Hello' + ' ' + name);
  }); //task_2

  $("#g1t2").on("click", function () {
    var year = 2020;
    var age = prompt("What year of birth?");
    alert('You are' + ' ' + (year - age));
  }); //task_3

  $("#g1t3").on("click", function () {
    var length = prompt("Enter side length of a square?");
    alert('perimetr of a square =' + ' ' + 4 * length);
  }); //task_4

  $("#g1t4").on("click", function () {
    var radius = prompt("Enter the radius of the circle?");
    var pi = 3.1415;
    alert('radius of the circle =' + ' ' + pi * Math.pow(radius, 2));
  }); //task_5

  $("#g1t5").on("click", function () {
    var s = prompt("Enter the distance"),
        t = prompt("Enter time");
    alert('your speed should be ' + ' ' + s / t);
  }); //task_6

  $("#g1t6").on("click", function () {
    var s = prompt("Enter the amount in dollars");
    var calk = 0.86;
    alert('Euro ' + ' ' + s * calk);
  }); //task_7

  $("#g1t7").on("click", function () {
    var s = prompt("Enter flash drive volume in gigabytes");
    var calk = 1024;
    alert('you can hold' + ' ' + Math.floor(s * calk / 860) + ' ' + 'files of 860 megabytes');
  }); //task_8

  $("#g1t8").on("click", function () {
    var suma = prompt("Enter the amount"),
        price = prompt("Enter the price of chocolate");
    alert('you can buy' + ' ' + Math.floor(suma / price) + ' ' + ' chocolates. Your rest is =' + ' ' + suma % price);
  }); //task_9

  $("#g1t9").on("click", function () {
    var number = prompt("Enter a three-digit number"),
        revers = 0;

    while (number != 0) {
      revers *= 10;
      revers += number % 10;
      number -= number % 10;
      number /= 10;
    }

    ;
    alert('Reverse number ' + revers);
  }); //task_10

  $("#g1t10").on("click", function () {
    var s = prompt("Enter the amount ");
    var procent = 5,
        time = 60;
    alert('your procent ' + ' ' + s * procent * time / 365 / 100);
  });
}
},{}],"data_js.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data_js = data_js;

function data_js() {
  //Data types and operators
  //task_1
  $("#g2t1").on("click", function () {
    var age = parseInt(prompt('Age?', 18));
    console.log(age, 8);
    var message = age < 12 ? 'You are a child' : age > 12 && age < 18 ? 'You are teenager!' : age > 18 && age < 60 ? 'You are adults' : 'You are pensioner';
    alert(message);
  }); //task_2

  $("#g2t2").on("click", function () {
    var arg = prompt("Enter a number from 0 to 9?");

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
  }); //task_3

  $("#g2t3").on("click", function () {
    var number = prompt("Enter the number from 100 to 999", 0);
    number = number + "";

    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
      alert("TRUE");
    } else alert("FALSE");
  }); //task_4

  $("#g2t4").on("click", function () {
    var year = prompt("Enter year");

    if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
      alert("Leap year");
    } else alert("Not Leap Year");
  }); //task_5

  $("#g2t5").on("click", function () {
    function Palindrome() {
      var rem,
          temp,
          final = 0;
      var number = prompt("Enter number");
      temp = number;

      while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
      }

      if (final == temp) {
        alert("The inputed number is Palindrome");
      } else {
        alert("The inputted number is not palindrome");
      }
    }

    Palindrome();
  }); //task_6

  $("#g2t6").on("click", function () {
    var sum = prompt('Enter the sum in USD:');
    var currency = prompt('EUR = 1, UAH = 2, AZN = 3');

    switch (currency) {
      case '1':
        alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum * 0.85 + ' ' + 'EUR');
        break;

      case '2':
        alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum * 28.35 + ' ' + 'UAH');
        break;

      case '3':
        alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum * 1.7 + ' ' + 'AZN');
        break;
    }
  }); //task_7

  $("#g2t7").on("click", function () {
    var sum = parseInt(prompt('Enter the sum'));
    var discount = sum >= 200 && sum <= 300 ? 'Your discounted price' + ' ' + (sum - sum * 0.03) : sum > 300 && sum <= 500 ? 'Your discounted price' + ' ' + (sum - sum * 0.05) : sum > 500 ? 'Your discounted price' + ' ' + (sum - sum * 0.07) : 'You don"t have discount';
    alert(discount);
  }); //task_8

  $("#g2t8").on("click", function () {
    var diameter = parseInt(prompt('Enter diameter of the circle')),
        perimeter = parseInt(prompt('Enter perimeter of the square')),
        r = diameter / 2,
        //circle radius
    a = perimeter / 4,
        //side of squre
    rc = a / 2; //the radius of the inscribed circle

    var message = rc >= r ? 'the circle can be inscribed in a square' : 'the circle can not be inscribed in a square';
    alert(message);
  }); //task_9

  $("#g2t9").on("click", function () {
    var mountain = prompt("What is the highest mountain? 1 - Everest 2 - Kanchenjunga 3 - Goverla"),
        lake = prompt("Which is the deepest lake in the world? 1 - Baikal 2 - Tanganyika 3 - San Martín"),
        country = prompt("What is the smallest country in the world? 1 - Tavulu 2 - Monaco 3 - Vatican"),
        mark = 0;

    if (mountain == 1) {
      mark += 2;
    }

    ;
    if (lake == 1) mark += 2;
    if (country == 3) mark += 2;
    alert("Your bal is " + mark);
  }); //task_10

  $("#g2t10").on("click", function () {
    var date = new Date(prompt('Enter Date (yyyy-mm-dd)'));
    date.setDate(date.getDate() + 1);
    alert(date);
  });
}
},{}],"cicle_js.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cicle = cicle;

function cicle() {
  //Cicle
  //task_1
  $("#g3t1").on("click", function () {
    var a = Number(prompt("Enter the beginning of the range")),
        n = Number(prompt("Enter the end of the range")),
        sum = 0;

    while (a <= n) {
      sum += a;
      a++;
    }

    alert(sum);
  }); //task_2

  $("#g3t2").on("click", function () {
    var a = prompt("Enter the first number"),
        b = prompt("Enter the second number");

    var gcd = function gcd(a, b) {
      if (b == 0) {
        return a;
      }

      return gcd(b, a % b);
    };

    alert("The greatest common divisor for numbers  ".concat(a, " and ").concat(b, " is ").concat(gcd(parseInt(a), parseInt(b))));
  }); //task_3

  $("#g3t3").on("click", function () {
    var number = parseInt(prompt("Enter the number")),
        divisors = [];

    for (var _i = 1; _i <= number; _i++) {
      if (number % _i == 0 && number !== _i && _i !== 1) {
        divisors.push(_i);
      }
    }

    if (divisors.length) {
      alert("Divisors for number ".concat(number, "  is ").concat(divisors.join(', '), "."));
    } else {
      alert("There are not divisors for number ".concat(number, "."));
    }
  }); //task_4

  $("#g3t4").on("click", function () {
    var numb1 = parseInt(prompt("Enter number : "));

    function getDigitAmount(n) {
      var c = 1;

      while ((n /= 10) >= 1) {
        c++;
      }

      return c;
    }

    alert(getDigitAmount(numb1));
  }); //task_5

  $("#g3t5").on("click", function () {
    var countNumbers = 4;
    var numbers = [];
    var c = 1;

    while (c <= countNumbers) {
      var number = parseInt(prompt("Enter ".concat(c, " number : ")));
      numbers.push(number);
      c++;
    }

    var negativeNumbersCount = 0;
    var positiveNumbersCount = 0;
    var oddNumbers = 0;
    var evenNumbers = 0;
    var usernul = 0;
    numbers.forEach(function (number) {
      if (number == 0) {
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
    alert("Entered numbers ".concat(numbers, " Null ").concat(usernul, " PositiveNumbers ").concat(positiveNumbersCount, ", NegativeNumbers ").concat(negativeNumbersCount, ", EvenNumbers ").concat(evenNumbers, ", OddNumbers ").concat(oddNumbers));
  }); //task_6

  $("#g3t6").on("click", function () {
    var _loop = function _loop() {
      var a = +prompt('Enter first number');
      var b = +prompt('Enter second number');
      var op = prompt('Select a character - + / *');
      var action = {
        '+': function _() {
          return a + b;
        },
        '-': function _() {
          return a - b;
        },
        '/': function _() {
          return a / b;
        },
        '*': function _() {
          return a * b;
        }
      }[op];

      if (action) {
        alert(action());
      } else {
        alert("Wrong sign");
      }

      if (!confirm('Do you want to solve another example?')) return "break";
    };

    while (true) {
      var _ret = _loop();

      if (_ret === "break") break;
    }
  }); //task_7

  $("#g3t7").on("click", function () {
    var number = prompt("Enter number");
    var a = prompt("How many digits should I move it?");
    alert(number.replace(RegExp("(\\d{" + a + "})(\\d*)$"), "$2$1"));
  }); //task_8

  $("#g3t8").on("click", function () {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var currDay = 0;

    while (confirm("".concat(days[currDay], ". Do you want to see next day?"))) {
      currDay = (currDay + 1) % days.length;
    }
  }); //task_9

  $("#g3t9").on("click", function () {
    var cd = '<table cellpadding="6" cellspacing="3" border="1">\n';
    cd += '<tr>\n';

    for (var _i2 = 1; _i2 <= 9; _i2++) {
      cd += '<td align="right"><font color="red">&nbsp;' + (_i2 == 1 ? '' : _i2) + '</font></td>\n';
    }

    for (i = 1; i <= 10; i++) {
      cd += '<tr>\n';

      for (var j = 1; j <= 9; j++) {
        cd += '<td align="right">' + (j == 1 ? '<font color="red">&nbsp;' + i + '</font>' : i * j) + '</td>\n';
      }

      cd += '</tr>\n';
    }

    cd += '</table>'; //document.open (), document.write (cd), document.close ();

    document.body.innerHTML = cd;
  }); //task_10

  $("#g3t10").on("click", function () {
    var left = 1,
        current,
        is_right,
        right = 100;

    while (1) {
      current = parseInt((left + right) / 2);
      is_right = prompt("Your number:".concat(current, "?(=, >, <)"));

      if (is_right == '=') {
        alert("I guess your number. Your number is ".concat(current, "."));
        break;
      } else if (is_right == '>') {
        left = current + 1;
      } else if (is_right == '<') {
        right = current - 1;
      }
    }
  });
}
},{}],"function_js.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fun_js = fun_js;

function fun_js() {
  //Function
  //task_1

  /*Написать функцию, которая принимает 2 числа и возвращает -1, 
  если первое меньше, чем второе; 1 – если первое больше, 
  чем второе; и 0 – если числа равны. */
  $("#g4t1").on("click", function () {
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");

    var numbers = function comparison(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };

    alert(numbers(x, y));
  }); //task_2

  /*Написать функцию, которая вычисляет факториал переданного ей числа. */

  $("#g4t2").on("click", function () {
    var a = prompt("Enter number");

    function factorial(n) {
      if (n === 0 || n === 1) return 1;else return n * factorial(n - 1);
    }

    alert(factorial(a));
  }); //task_3

  /*Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
   Например: цифры 1, 4, 9 превратятся в число 149. */

  $("#g4t3").on("click", function () {
    var x = prompt("Enter first number");
    var y = prompt("Enter second number");
    var z = prompt("Enter third number");
    var MyNam;

    function number(join) {
      join = x + y + z;
      MyNam = Number(join);
      return MyNam;
    }

    alert(number(MyNam));
  }); //task_4

  /*Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
  Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. */

  $("#g4t4").on("click", function () {
    var numbers = function comparison(a, b) {
      return a, b ? "The area of the rectangle is ".concat(a * b) : "The area of the square is ".concat(a * a);
    };

    alert(numbers(2, 3));
  }); //task_5

  /*Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
  Совершенное число – это число, равное сумме всех своих собственных делителей. */

  $("#g4t5").on("click", function () {
    function perfect_number() {
      var number = parseInt(prompt("Enter the number")),
          divisors = [];

      for (var i = 1; i <= number; i++) {
        if (number % i == 0 && number !== i) {
          divisors.push(i);
        }
      }

      var reducer = function reducer(accumulator, currentValue) {
        return accumulator + currentValue;
      };

      var sum = divisors.reduce(reducer);

      if (sum == number) {
        alert("Your number ".concat(number, "  is perfect"));
      } else {
        alert("Your number ".concat(number, "  is simple"));
      }
    }

    perfect_number();
  }); //task_6

  /*Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
  и выводит только те числа из диапазона, которые являются совершенными. 
  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. */

  $("#g4t6").on("click", function () {
    var min = parseInt(prompt("Enter min number of range"));
    var max = parseInt(prompt("Enter max number of range"));
    var perfect_numbers = [];

    function perfect_range() {
      nextNumber: for (var number = min; number <= max; number++) {
        var divisors = [];

        for (var i = 1; i <= number; i++) {
          if (number % i == 0 && number !== i) {
            divisors.push(i);
          }
        }

        var reducer = function reducer(accumulator, currentValue) {
          return accumulator + currentValue;
        };

        var sum = 0;

        if (divisors.length) {
          sum = divisors.reduce(reducer);
        }

        if (sum == number) {
          perfect_numbers.push(number);
        }
      }

      alert(perfect_numbers.join(" , "));
    }

    perfect_range();
  }); //task_7

  /*Написать функцию, которая принимает время (часы, минуты, секунды) 
  и выводит его на экран в формате «чч:мм:сс».
  Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */

  $("#g4t7").on("click", function () {
    var h = parseInt(prompt("Enter hours")),
        m = parseInt(prompt("Enter minutes")),
        s = parseInt(prompt("Enter secunds"));

    function formatTime(hour, min, sec) {
      var time = new Date();
      time.setHours(hour);
      time.setMinutes(min);
      time.setSeconds(sec);
      var h = time.getHours();
      if (h < 10) h = '0' + h;
      var m = time.getMinutes();
      if (m < 10) m = '0' + m;
      var s = time.getSeconds();
      if (s < 10) s = '0' + s;
      return h + ':' + m + ':' + s;
    }

    alert(formatTime(h, m, s));
  }); //task_8

  /*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах. */

  $("#g4t8").on("click", function () {
    var h = parseInt(prompt("Enter hours")),
        m = parseInt(prompt("Enter minutes")),
        s = parseInt(prompt("Enter secunds"));

    function getSeconds(hour, min, sec) {
      var time = new Date();
      time.setHours(hour);
      time.setMinutes(min);
      time.setSeconds(sec);
      return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
    }

    alert(getSeconds(h, m, s));
  }); //task_9

  /*Написать функцию, которая принимает количество секунд, переводит их в часы, 
  минуты и секунды и возвращает в виде строки «чч:мм:сс». */

  $("#g4t9").on("click", function () {
    var s = parseInt(prompt("Enter secunds"));

    function formatTime(sec) {
      var time = new Date();
      time.setHours(0);
      time.setMinutes(0);
      time.setSeconds(sec);
      var h = time.getHours();
      if (h < 10) h = '0' + h;
      var m = time.getMinutes();
      if (m < 10) m = '0' + m;
      var s = time.getSeconds();
      if (s < 10) s = '0' + s;
      return h + ':' + m + ':' + s;
    }

    alert(formatTime(s));
  }); //task_10

  /*Написать функцию, которая считает разницу между датами. 
  Функция принимает 6 параметров, которые описывают 2 даты, 
  и возвращает результат в виде строки «чч:мм:сс». 
  При выполнении задания используйте функции из предыдущих 2-х заданий: 
  сначала обе даты переведите в секунды, узнайте разницу в секундах, 
  а потом разницу переведите обратно в «чч:мм:сс» */

  $("#g4t10").on("click", function () {
    var h1 = parseInt(prompt("Enter hours")),
        m1 = parseInt(prompt("Enter minutes")),
        s1 = parseInt(prompt("Enter secunds")),
        h2 = parseInt(prompt("Enter second hours")),
        m2 = parseInt(prompt("Enter second minutes")),
        s2 = parseInt(prompt("Enter second secunds"));

    function getSeconds(hour, min, sec) {
      var time = new Date();
      time.setHours(hour);
      time.setMinutes(min);
      time.setSeconds(sec);
      return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
    }

    function formatTime(sec) {
      var time = new Date();
      time.setHours(0);
      time.setMinutes(0);
      time.setSeconds(sec);
      var h = time.getHours();
      if (h < 10) h = '0' + h;
      var m = time.getMinutes();
      if (m < 10) m = '0' + m;
      var s = time.getSeconds();
      if (s < 10) s = '0' + s;
      return h + ':' + m + ':' + s;
    }

    function oddsDate(h1, m1, s1, h2, m2, s2) {
      var odsSec = Math.abs(getSeconds(h1, m1, s1) - getSeconds(h2, m2, s2));
      return formatTime(odsSec);
    }

    alert(oddsDate(h1, m1, s1, h2, m2, s2));
  });
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _basics_js = require("./basics_js");

var _data_js = require("./data_js");

var _cicle_js = require("./cicle_js");

var _function_js = require("./function_js");

(0, _basics_js.basics)();
(0, _data_js.data_js)();
(0, _cicle_js.cicle)();
(0, _function_js.fun_js)();
$('.accordion-toggle').click(function (e) {
  e.preventDefault();
  $("a:first-of-type").removeClass('chev');
  var $this = $(this);

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
},{"./basics_js":"basics_js.js","./data_js":"data_js.js","./cicle_js":"cicle_js.js","./function_js":"function_js.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49464" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/beetroot_js-modules.e31bb0bc.js.map