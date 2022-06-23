// feladat01.js
function feladat01(szinek) {
    let counter = 0;
    for(let i = 2; i <= szinek.length; i++) { //i = 2 -> a legkisebb és egyben kiinduló kombináció. Pl. red - green); i = 3 -> (red - green - blue); 
        counter += fact(szinek.length) / (fact(szinek.length - i) * fact(i));   
    }
    return `válasz: ${counter}`;
}

//factorial kiszámolása
function fact(n) {
    if (n === 0 || n === 1)
      return 1;
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
}

// ellenőrzés
const arr1 = [];
const arr2 = ["red"];
const arr3 = ["red","green"];
const arr4 = ["red","green", "blue"];
const arr5 = ["red","green", "blue", "yellow"];
const arr6 = ["red","green", "blue", "yellow", "violet"];
const check = [arr1, arr2, arr3, arr4, arr5, arr6];

check.forEach((e) => {
  console.log(feladat01(e));
});