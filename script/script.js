let randomNumbers = generateRandom(5);
let randomStars = generateRandom(2);

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");

let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");

let btn = document.getElementsByClassName("btn")[0];

n1.innerHTML = randomNumbers[0];
n2.innerHTML = randomNumbers[1];
n3.innerHTML = randomNumbers[2];
n4.innerHTML = randomNumbers[3];
n5.innerHTML = randomNumbers[4];

s1.innerHTML = randomStars[0];
s2.innerHTML = randomStars[1];

btn.addEventListener("click", refresh)


function refresh(){
    location.reload();
}


function generateRandom(n){
    let i = 0;
    let array = [];
    let ran = 0;
    while(i < n){
        if(n === 2) { 
            ran = Math.ceil(Math.random()*12); 
        }else { 
            ran = Math.ceil(Math.random()*50); 
        }
        
        if(array.indexOf(ran) === -1){
            array.push(ran);
            i++
        }
    }
    return array.sort((a, b) => a-b);
}
