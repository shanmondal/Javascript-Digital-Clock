window.onload=function ShowTime(){
  let date=new Date();
  let h=date.getHours();
  let m=date.getMinutes();
  let s=date.getSeconds();
  let session="AM";
  let hours=document.getElementById("hours");
  let minutes=document.getElementById("minutes");
  let seconds=document.getElementById("seconds");
 let Session=document.getElementById("session")
  if(h==0)
  {
    h=12;
  }
  if (h>12){
    h=h-12;
    session="PM";
    Session.innerHTML=session;
    
  }
  else{Session.innerHTML=session;}
  if(h<10){
    h="0"+h;
    hours.innerHTML=h;
  }
  else{
    hours.innerHTML=h;
    
  }
  if(m<10){
    m="0"+m;
    minutes.innerHTML=m;
  }
 else{
   minutes.innerHTML=m
   
 }
 seconds.innerHTML=(s<10)?"0"+s:s;
 
  setInterval(ShowTime,1000)
  

}
//ShowTime()


