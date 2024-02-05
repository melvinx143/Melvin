
let texting=document.getElementById("textcontent");
let profilepic=document.getElementById("profilepic");
let prev=document.getElementById("prev");
let next=document.getElementById("next");
let display=[
    {
texting:'CSS',
profilepic:'./css.png'
    },
    {
texting:'JENKINS',
profilepic:'./jenkins.jpg'
    },
    {
texting:'MONGODB',
profilepic:'./mongo.jpg'
    },
    {
texting:'DOCKER',
profilepic:'./docker.png'
    },
    {
texting:'SQL',
profilepic:'./sql.png'
    },
    {
texting:'JAVASCRIPT',
profilepic:'./javascript.webp'
    },
    

];
let count=0;
window.addEventListener('DOMContentLoaded',function(){
person();
});

function person()
{
let p=display[count];

profilepic.src=p.profilepic;
texting.textContent=p.texting;
}
prev.addEventListener('click',function(){
count++;
if(count>display.length-1)
{
count=0;
}
person();
});
next.addEventListener('click',function(){
count--;
if(count<0)
{
count=display.length-1;
}
person();
});