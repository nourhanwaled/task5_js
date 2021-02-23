//change backgroundcolor
const colors=[0,1,2,3,4,5,6,"A","B","c","d","e","f"];
let btn1=document.getElementById("btn1");
let body=document.getElementById("body");
function colorrandom(){
   return Math.floor(Math.random()*colors.length);
}
btn1.addEventListener("click",function(){
    let hexa="#";
    let i=0;
    for(i=0;i<=5;i++){
        hexa+=colors[colorrandom()];
    }
    body.style.backgroundColor=hexa;
    btn1.style.backgroundColor=hexa;
})
/*souq car*/
const btns=document.querySelectorAll(".btn");
const countvalue=document.getElementById("count");
let count=0;
btns.forEach(function(btn){
btn.addEventListener("click",function(event){
let classes=event.currentTarget.classList;
if(classes.contains('remove')&&count>0){
    count--;
}
else if(classes.contains('reset')){
    count=0;
}


countvalue.innerHTML=count;
});
});
const add=document.getElementById("add");
add.addEventListener("click",function(){
    count++;
    countvalue.innerHTML=count;
})

const add2=document.getElementById("add2");
add2.addEventListener("click",function(){
    count++;
    countvalue.innerHTML=count;
})
const add3=document.getElementById("add3");
add3.addEventListener("click",function(){
    count++;
    countvalue.innerHTML=count;
})
/*js srticle with slider*/
const candy=[
    {
        id:1,
        name:"candy 1",
        img:"images/8.jpg",
        jop:"maker",
        txt:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga explicabo voluptatem quam temporibus, magni illum aliquid a, id, fugit excepturi provident dolorum debitis delectus quisquam dignissimos numquam deserunt facilis libero!",
        
    }
    ,
    {
        id:2,
        name:"candy 2",
        img:"images/8.jpg",
        jop:"maker",
        txt:"voluptatem quam temporibus, magni illum aliquid a, id, fugit excepturi provident dolorum debitis delectus quisquam dignissimos numquam deserunt facilis libero!",
        
    }
    ,
    {
        id:3,
        name:"candy 3",
        img:"images/9.jpg",
        jop:"maker",
        txt:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga explicabo voluptatem quam temporibus, magni illum aliquid a, id, fugit excepturi provident dolorum debitis delectus quisquam dignissimos numquam deserunt facilis libero!",
        
    }
    ,{
        id:4,
        name:"candy 4",
        img:"images/6 (1).jpg",
        jop:"maker",
        txt:"Fuga explicabo voluptatem quam temporibus, magni illum aliquid a, id, fugit excepturi provident dolorum debitis delectus quisquam dignissimos numquam deserunt facilis libero!",
        
    }
]
const auther=document.getElementById("auther");
const jop=document.getElementById("jop");
const info=document.getElementById("info");
const pic1=document.getElementById("pic1");
//btton
const prev=document.querySelector(".prev-btn");
const next=document.querySelector(".next-btn");
let currentcandy=0;
function showcandy(){
    const ccandy=candy[currentcandy];
    auther.innerHTML=ccandy.name;
    jop.innerHTML=ccandy.jop;
    pic1.src=ccandy.img;
    info.innerHTML=ccandy.txt;
}
//click button
prev.addEventListener("click",function(){
    currentcandy--;
    if(currentcandy<0){
        currentcandy=candy.length-1;
    }
    showcandy();
})
next.addEventListener("click",function(){
    currentcandy++;
    if(currentcandy>candy.length-1){
        currentcandy=0;
    }
    showcandy();
})
/*candy 2*/
const auther2=document.getElementById("auther2");
const jop2=document.getElementById("jop2");
const info2=document.getElementById("info2");
const pic2=document.getElementById("pic2");
//btton
const prev2=document.querySelector(".prev-btn2");
const next2=document.querySelector(".next-btn2");
let currentcandy2=0;
function showcandy2(){
    const ccandy2=candy[currentcandy2];
    auther2.innerHTML=ccandy2.name;
    jop2.innerHTML=ccandy2.jop;
    pic2.src=ccandy2.img;
    info2.innerHTML=ccandy2.txt;
}
//click button
prev2.addEventListener("click",function(){
    currentcandy2--;
    if(currentcandy2<0){
        currentcandy2=candy.length-1;
    }
    showcandy2();
})
next2.addEventListener("click",function(){
    currentcandy2++;
    if(currentcandy2>candy.length-1){
        currentcandy2=0;
    }
    showcandy2();
})
/*candy 3*/
const auther3=document.getElementById("auther3");
const jop3=document.getElementById("jop3");
const info3=document.getElementById("info3");
const pic3=document.getElementById("pic3");
//btton
const prev3=document.querySelector(".prev-btn3");
const next3=document.querySelector(".next-btn3");
let currentcandy3=0;
function showcandy3(){
    const ccandy3=candy[currentcandy3];
    auther3.innerHTML=ccandy3.name;
    jop3.innerHTML=ccandy3.jop;
    pic3.src=ccandy3.img;
    info3.innerHTML=ccandy3.txt;
}
//click button
prev3.addEventListener("click",function(){
    currentcandy3--;
    if(currentcandy2<0){
        currentcandy3=candy.length-1;
    }
    showcandy3();
})
next3.addEventListener("click",function(){
    currentcandy3++;
    if(currentcandy3>candy.length-1){
        currentcandy3=0;
    }
    showcandy3();
})