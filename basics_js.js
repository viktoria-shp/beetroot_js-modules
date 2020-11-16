function basics() {
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
}
export {basics};