let usa= new Typed(".demo",{
    strings : ["Roni howlader","Abir howlader","fontandevolapar"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})
let photo=['img1.jpg','img2.png','img3.png','img4.png']
let chan=document.querySelector(".img1g");
let count=0;
function changeimg(){
count++;
if(count>=photo.length){
    count=0;
    chan.src=photo[count];
}
   else{
    chan.src=photo[count];
   } 


}
function thimall(){
let thim=document.querySelector(".container");
thim.classList.add("hasib");
}
function rmthim(){
    let thim=document.querySelector(".container");
thim.classList.remove("hasib");
}
function color(){
alert("plase w8 code Edating")

}
function foter(){
let fo=document.querySelector(".foter");
fo.classList.add("hasib");
}
function fote(){
    let fo=document.querySelector(".foter");
fo.classList.remove("hasib");
}
function con(){
   let con=document.querySelector(".contack");
   con.classList.add("hasib");
}
function non(){
    let con=document.querySelector(".contack");
    con.classList.remove("hasib");
 }