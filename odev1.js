let greeting = prompt("Adınızı giriniz");
let greetingDOM = document.querySelector("#greeting");

window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('saat').innerHTML=h+":"+m+":"+s;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}

greetingDOM.innerHTML = greetingDOM.innerHTML + `${greeting}`
console.log(greetingDOM.innerHTML)