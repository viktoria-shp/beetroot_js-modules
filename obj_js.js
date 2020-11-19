function obj_js() {
    //objects
    //task_1

    /*Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
    и следующие функции для работы с этим объектом:
    Функция для вывода на экран информации об автомобиле;
    Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
    Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. */

    $("#g5t1").on("click", function(){
        const car = {
            manufacturer: 'Audi', 
            model: 'A7',
            year: 2020,
            speed: 200
        };
        
        function carInfo(car) {
            return `Car info:\n${car.manufacturer} ${car.model} \nyear:${car.year} \nspeed:${car.speed}`;
        }
        function calcTimeForDistance(car, distance = 1000) {                
            let hour;
            hour = distance / car.speed;
            hour = (parseInt(hour/4) + hour);
            return hour;
        }
        alert(carInfo(car));
        let distance = prompt(`Enter distance`);
        alert(calcTimeForDistance(car, distance));
    });

    //task_2

    /*Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

        Функция сложения 2-х объектов-дробей;

        Функция вычитания 2-х объектов-дробей;

        Функция умножения 2-х объектов-дробей;

        Функция деления 2-х объектов-дробей;

        Функция сокращения объекта-дроби. */
    
    $("#g5t2").on("click", function(){
        function Fraction(upNumber,downNumber){
            return {upNumber:upNumber, downNumber:downNumber};
        }
        const firstNumerator = prompt(`Enter first numerator`);
        const secondNumerator = prompt(`Enter second numerator`);
        const firstDenominator = prompt(`Enter first denominator`);
        const seconDenominator = prompt(`Enter second denominator`);
        let firstNumber = Fraction(firstNumerator,firstDenominator);
        let secondNumber = Fraction(secondNumerator,seconDenominator);
        
        function multiFraction(obj1,obj2){
            let resultUpNumber = obj1.upNumber * obj2.upNumber;
            let resultDownNumber = obj1.downNumber * obj2.downNumber;
            alert(`Multi: ${resultUpNumber}/${resultDownNumber}`);
        }
        multiFraction(firstNumber,secondNumber);

        function divisionFraction(obj1,obj2){
            let resultUpNumber = obj1.upNumber * obj2.downNumber;
            let resultDownNumber = obj1.downNumber * obj2.upNumber;
            alert(`Division: ${resultUpNumber}/${resultDownNumber}`);
        }
        divisionFraction(firstNumber,secondNumber);

        function gcd(n, m) {
          return m == 0 ? n : gcd(m, n % m);
        }          
        function nok(n, m) {
          return n * m / gcd(n, m);
        }        

        function subtractionFraction(obj1,obj2){
            let resultUpNumber = (obj1.upNumber * (nok(obj1.downNumber, obj2.downNumber)/obj1.downNumber)) - (obj2.upNumber * (nok(obj1.downNumber, obj2.downNumber)/obj2.downNumber)) ;
            let resultDownNumber = nok(obj1.downNumber, obj2.downNumber);
            alert(`Subtraction: ${resultUpNumber}/${resultDownNumber}`);
        }
        subtractionFraction(firstNumber,secondNumber);

        function additionFraction(obj1,obj2){
            let resultUpNumber = (obj1.upNumber * (nok(obj1.downNumber, obj2.downNumber)/obj1.downNumber)) + (obj2.upNumber * (nok(obj1.downNumber, obj2.downNumber)/obj2.downNumber)) ;
            let resultDownNumber = nok(obj1.downNumber, obj2.downNumber);
            alert(`Addition: ${resultUpNumber}/${resultDownNumber}`);
        }
        additionFraction(firstNumber,secondNumber);     
    });
    //task_3

    /*Создать объект, описывающий время (часы, минуты, секунды), 
    и следующие функции для работы с этим объектом: 
    Функция вывода времени на экран;
    Функция изменения времени на переданное количество секунд;
    Функция изменения времени на переданное количество минут;
    Функция изменения времени на переданное количество часов. 
    Учтите, что в последних 3-х функциях, при изменении одной части времени,
    может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, 
    то должно получиться «20:31:15», а не «20:30:75». */

    $("#g5t3").on("click", function(){
        function formatTime(time) {
            let timeSape = new Date();
            timeSape.setHours(time.hours);
            timeSape.setMinutes(time.minutes);
            timeSape.setSeconds(time.seconds);
            let hours = timeSape.getHours();
            console.log(hours)
            if (hours < 10) hours = '0' + hours;          
            let minutes = timeSape.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;          
            let second = timeSape.getSeconds();
            if (second < 10) second = '0' + second;          
            return hours + ':' + minutes + ':' + second;
        }
        function addHoursToTime(time, hours = 1) {
            time.hours += parseInt(hours);
            return formatTime(time);
        }
        function addMinutesToTime(time, minutes = 1) {
            time.minutes += parseInt(minutes);
            return formatTime(time);
        }
        function addSecondsToTime(time, seconds = 1) {
            time.seconds += parseInt(seconds);
            return formatTime(time);
        }
        let time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        time.hours = parseInt(prompt(`Enter hours`)),
        time.minutes = parseInt(prompt(`Enter minutes`)),
        time.seconds = parseInt(prompt(`Enter seconds`));
        alert( formatTime(time) ); 
        alert( addHoursToTime(time, 2) ); 
        alert( addMinutesToTime(time, 2) ); 
        alert( addSecondsToTime(time, 200) ); 
    });

}
export {obj_js};