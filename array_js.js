function array_js() {
    //objects
    //task_1

    /*Создать массив «Список покупок». Каждый элемент массива является объектом, 
    который содержит название продукта, необходимое количество и куплен или нет. 
    Написать несколько функций для работы с таким массивом.
        Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, 
        а потом – купленные.
        Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим 
        в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
        Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

    $("#g6t1").on("click", function(){
        class Product {
            constructor(params = {}) {
              Object.assign(this, {
                pName: null, 
                amount: 1, 
                bought: false
              }, { ...params }); 
            }
          
            static sortDefault(a, b) {  // чтобы сначала шли некупленные продукты, а потом – купленные
              return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName); 
            }; 
          }
          Product.prototype.toString = function () {
            return `${this.pName} (x${this.amount}), ${this.bought ? 'куплено' : 'не куплено'}`;
          }; 
          
          
          const shopList = [
            { pName: 'Банан', amount: 2 },
            { pName: 'Апельсин', amount: 5, bought: true },
            { pName: 'Молоко', bought: true },
            { pName: 'Груша', amount: 10 }
          ].map(prodDef => new Product(prodDef));
          
          const addToShopList = prodDef => {  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
            const prod = shopList.find(prod => prod.pName === prodDef.pName); 
            if (!prod) return shopList.push(new Product(prodDef)); 
            prod.amount += prodDef.amount; 
          }; 
          const printShopList = () => shopList.forEach(
            (prod, i) => console.log(`${i + 1}. ${prod}`)
          ); 
          
          shopList.sort(Product.sortDefault);
          printShopList();
          console.log('---'); 
          
          addToShopList({ pName: 'Банан', amount: 3 });
          addToShopList({ pName: 'Шоколад', amount: 2 });
          shopList.sort(Product.sortDefault);
          printShopList();
    });

    //task_2

    /*Создать массив, описывающий чек в магазине. 
    Каждый элемент массива состоит из названия товара, 
    количества и цены за единицу товара. Написать следующие функции:
    Распечатка чека на экран;
    Подсчет общей суммы покупки;
    Получение самой дорогой покупки в чеке;
    Подсчет средней стоимости одного товара в чеке.*/
    
    $("#g6t2").on("click", function(){
        const checkArr = [
          { 
            name: 'apple',
            count: 2,
            price: 28
          },
          { 
            name: 'kivi',
            count: 1,
            price: 10
          },
          { 
            name: 'banana',
            count: 2,
            price: 30
          }
        ]
        // Распечатка чека на экран;
        checkArr.forEach(check => console.log(check));
        //Подсчет общей суммы покупки;
        const amount = checkArr.reduce((total, checkArr)=> total + checkArr.price, 0);
        console.log('The amount of your purchase is' + ` ${amount}`);
        //Получение самой дорогой покупки в чеке;
        let max = 0;
        checkArr.forEach(checkArr => checkArr.price > max ? max = checkArr.price : checkArr.price);
        console.log ('The most expensive purchase in check is' + ` ${max}`);
        //Подсчет средней стоимости одного товара в чеке.
        const average = amount / checkArr.length;
        console.log ('The average purchase price in the check' + ` ${average.toFixed(1)}`);
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

    $("#g6t3").on("click", function(){
      let s = {
        color: "red",
        border: "1px solid black",
        font: "50px",
        align: "center"

      }
      let genStyle = genStrStyleFromObj(s);
      function genStrStyleFromObj(obj){
          let strStyle = "";
          for (const[attrStyle, valStyle] of Object.entries(obj)){
              strStyle += `${attrStyle}: ${valStyle};`;
          }
          return strStyle;
      }
      let p = document.createElement("p");
      p.style.cssText = genStyle
      p.style.fontSize = s.font
      p.style.textAlign = s.align
      p.innerHTML = "Hello world"
      document.write(p.outerHTML)  
  });

  //task_4

    /*Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
    количества посадочных мест (от 10 до 20) и названия факультета, 
    для которого она предназначена. Написать несколько функций для работы с ним
    Вывод на экран всех аудиторий;
    Вывод на экран аудиторий для указанного факультета;
    Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
    Функция сортировки аудиторий по количеству мест;
    Функция сортировки аудиторий по названию (по алфавиту).*/

    $("#g6t4").on("click", function(){
      const audienceArr = [
        { audienceName: 'mif_1', numSets: 10, facultyName: 'mif' },
        { audienceName: 'fiz_2', numSets: 20, facultyName: 'fiz' },
        { audienceName: 'mif_2', numSets: 15, facultyName: 'mif'  },
        { audienceName: 'mif_3', numSets: 16, facultyName: 'mif' },
        { audienceName: 'fiz_1', numSets: 10, facultyName: 'fiz' },
        { audienceName: 'ped_1', numSets: 12, facultyName: 'ped' },
        { audienceName: 'ped_2', numSets: 15, facultyName: 'ped' }
      ]
      //  Вывод на экран всех аудиторий;
      audienceArr.forEach(audience => console.log(audience));

      //Вывод на экран аудиторий для указанного факультета;
      const mif_1 = audienceArr.filter(audience => audience.facultyName ==='mif');
      console.log(mif_1);

      //Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
      //Объект-группа состоит из названия, количества студентов и названия факультета;
      const group = {
        name: 'mif22',
        quantity: 15,
        fName: 'mif'
      }
      const audience = audienceArr.filter(audience => group.quantity <= audience.numSets && group.fName === audience.facultyName)
      console.log(group, audience)

      //Функция сортировки аудиторий по количеству мест;
      
      audienceArr.sort(function (a, b) {
        return a.numSets - b.numSets;
      });
      console.log(audienceArr)

      //Функция сортировки аудиторий по названию (по алфавиту).

      audienceArr.sort(function(a, b) {
        var audienceNameA = a.audienceName.toUpperCase(); 
        var audienceNameB = b.audienceName.toUpperCase(); 
        if (audienceNameA < audienceNameB) {
          return -1;
        }
        if (audienceNameA > audienceNameB) {
          return 1;
        }
        return 0;
      });
      console.log(audienceArr)
      
  });

}
export {array_js};