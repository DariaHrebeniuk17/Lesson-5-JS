//замикання

// function createNewSum (n) {
//     return function () {
//         console.log(10 * n);
//     };
// };

// const calc = createNewSum (5);
// calc ();


// function createNewNumber (n) {
//     return function (num) {
//         return n + num ;
//     };
// }

// const addFive = createNewNumber (5);

// console.log(addFive(10));

// function createUrl (domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua");

// console.log(comUrl("google"));

// console.log(comUrl("fb"));

// console.log(comUa("google"));

// console.log(comUa("fb"));


//this

// function hello () {
//     console.log("Hello", this)
// }

// hello();

// const user = {
//     name : "Ivan",
//     city : "Odessa",
//     sayHello: hello,
// };

// user.sayHello();

// function abc() {
//     console.log("In function");
//     console.log(this);
// }

// document.querySelector("p").onclick = abc;


// function changeColor () {
//     this.style.background = "green";
// }

// // document.querySelector('div').onclick = changeColor;


// let user = document.querySelectorAll("div");

// user.forEach(function (element) {
//     element.onclick = changeColor;
// });
    

// const showList = () => {
//     console.log(this);
// };

// showList();

// const list = {
//     names: ["Ann","Ivan","Dasha"],
//     showList: showList,
// };

// List.showList();

// function hello() {
//     console.log(this);
// };

// const user = {
//     name: "Ivan",
//     age: "30",
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function(city) {
//         console.log(`Name is ${this.name}`);
//         console.log(`City is ${city}`);
//     },
// };


// const Ann = {
//     name: "Anna",
//     age: "12",
// };

// user.info.bind(Ann)();

// const nataInfo = user.info.bind(Ann)();

// const userInfo = {
//     name: "Andriy",
//     age: "98",
//     logInfo: function(job){
//         console.group(`${name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Job is : ${job}`);
//         console.groupEnd();
//     },
// };

// const Vano = {
//     name: "Ivan",
//     age: "45",
// };

// userInfo.logInfo.call(Vano, 'developer');



// const showUserInfo = {
//     name: name,
//     age: 87,
//     logInfo:function(job){
//          console.group(`${name} info:`);
//          console.log(`Name is : ${this.name}`);
//          console.log(`Age is : ${this.age}`);
//          console.log(`Job is : ${job}`);
//          console.log(`City is : ${city}`);
//          console.groupEnd();
//     },
// };

// const Vano = {
//     name: "Ivan",
//     age: "45",
// };

// showUserInfo.logInfo.apply(Vano, ["developer", "Kyiv"]);




// const message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: "Bukovel"};
// const Tourist = { hotel: "Tourist"};

// // message.call(Bukovel, "Ivan", "5");

// // message.call(Tourist, "Dasha", "5");

// // message.apply(Tourist, ["Dasha", "5"]);

// // message.apply(Bukovel, ["Dasha", "5"]);

// message.bind(Bukovel, "Masha", "4")();
// message.bind(Tourist, "Masha", "4")();


// const cart = {
//     showItems(){
//         console.log("В корзині:" , this.items);
//     },
// };

// const women = {
//     items: ["Сукня, туфлі"],
// };

// const man = {
//     items: ["Сорочка, галстук"],
// };

// const kid = {
//     items: ["штани, футболка"],
// };



// document.querySelector('#wom').addEventListener('click', cart.showItems.bind(women));
// document.querySelector('#man').addEventListener('click', cart.showItems.bind(man));
// document.querySelector('#kid').addEventListener('click', cart.showItems.bind(kid));


// const infoCar = {
//     name: "BMW",
//     model: "BG-87",
//     color: "black",
//     showInfo: function(){
//         console.log("Car: " + this.name +   "  Model " +    this.model  +   "  color: " + this.color);
//     },
// };

// car2 = {
//     name: "Opel",
//     model: "llj9",
//     color: "red",
// };

// // infoCar.showInfo.bind(car2)();

// // infoCar.showInfo.call(car2);

// infoCar.showInfo.apply(car2);