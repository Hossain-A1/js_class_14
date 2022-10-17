"use strict"

const restaurant ={
  name: "BUrger house 402",
  location: "B.Baria, Mojjid road Bangladesh",
  categories: ["Italian", "vegetarian", "local", "organic"],
  starterMenu: [
    "Chicken Cheese Burger",
    "Beef Burger",
    "Garlic Bread",
    "Italian Spicy Pasta",
    "Bagdadi Shahi Biriyani",
    "Mexican Chilli Chicken",
  ],

  mainMenu: ['Burger', "Pizza", "pasta", "Fajita", "French fries"],

  openingHours:{
    Sun: {
      open: 10,
      close: 22,
    },
    Fir: {
      open: 9,
      close: 23,
    },
    Wed:{
      open: 11,
      close: 22,
    }
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex
     ]];
  },

  orderDelivery: function({starterIndex =0, mainIndex = 0,time = "10:10 pm",address = "unknown"}){
    console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time}`);
  },
  orderBurger: function(ing1,ing2,ing3){
   console.log( `here is your delicious burger with ${ing1}, ${ing2}, ${ing3}`);
  }

};
//spread oparators
const arry = [33,44,55,88];
const goodArryCoppy = [11,22, ...arry];
console.log(goodArryCoppy);

const newMenu = [...restaurant.mainMenu, "noodles", "sweet"];
console.log(newMenu); 

//array copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join arrays
const allFoods = [ ...restaurant.categories, ...restaurant.location, ...restaurant.mainMenu ];
console.log(allFoods);


//destructuring object
restaurant.orderDelivery({
  starterIndex:2,
  mainIndex: 0,
  time: '06:22 pm',
  address: "saudi 12 road #54",
});

restaurant
.orderDelivery({
  starterIndex:1,
  address: "uk 23 road",
})



 const {name,categories,mainMenu} = restaurant;
 console.log(name,categories,mainMenu);

 const {location:resLocation,openingHours:Hours} = restaurant;
 console.log(resLocation,Hours);

 const {Sun:sunday,Wed:wednesday,Fir:friday} = restaurant.openingHours;
 console.log(sunday,wednesday,friday);

 //default values
 const {feedMenu = [],starterMenu = []} = restaurant;
 console.log(feedMenu,starterMenu);

 //muteting variables
let ba = 200;
let ab = 300;
// [ba,ab] = [ab,ba];
const obj ={ba:30, ab:50};
({ba,ab} = obj);
console.log(ba,ab);

//nested object
const tumpa = {
  friends: {
    firstFrien: "hossain",
    secondFnd: "lily",
  },
};

const{firstFrien,secondFnd} = tumpa.friends;
console.log(firstFrien,secondFnd);

const sumpa ={
 allName:{
  loseName: "oishi",
  pastName: "nilima",
 }
};

const {
allName: {loseName,pastName},} = sumpa;
console.log(loseName,pastName);












//destructuring arrays
const arr =[ 1,2,3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(arr);

const [x,y,z] = arr;
console.log(x,y,z);

const arr2 = [2,5,3];
const [m,n,o] = arr2;
console.log(m,n,o);

const [main, secondry] = restaurant.categories;
console.log(main,secondry);

const [step1,,step2, ,,step3] = restaurant.starterMenu;
console.log( step1, step2,step3);

//switching variables
let first = 10;
let second = 20;
// let temp = first;
// first = second;
// second = temp;
[first ,second] = [second ,first];

console.log(first, second);

const [firstOrder, secondOrder] = restaurant.order(2,3);
console.log(firstOrder,secondOrder);

// nested destructaring
const nested = [4,6,[9,12]];
// const [i,j,k,l] = nested;
const [i,j,[k,l]] = nested;
console.log(i,j,k,l);

const nested2 = ['tompa','lily','jibon',['omit','shovo'],
'taher'];

const [q,r,s,[d,e],f] = nested2;
console.log(q,r,s,d,e);

// default values
const arrNew = [10,40];
const [aa =11,bb=1,cc=1,ee =1] = arrNew;
console.log(aa,bb,cc,ee);


//iterables: arrays, strings, maps, not object     
const gameNamme = "call of duty: Modren Warfare";   
console.log(...gameNamme, "","2022");  
const str = "hossain";
console.log(...str);

const [firsts,seconds,third,last] = [...str];
console.log(firsts); 
console.log(seconds); 
console.log(third); 
console.log(last); 

restaurant.orderBurger("burgerBon", "chicken", "cheese");

const burgerBons = ["bonBerger", "beef", "lettuce"]; 
restaurant.orderBurger(...burgerBons);

//copying object
const newRestaurant = {...restaurant, founder:'amjad'};
newRestaurant.name = "chicken hub";
console.log(restaurant);
console.log(newRestaurant);

