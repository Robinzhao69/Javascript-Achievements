image = document.getElementById("break_img");
clock = document.getElementById("clock");

breakStart = new Date();
breakStart.setSeconds(breakStart.getSeconds() + 10);
breakEnd = new Date();
breakEnd.setSeconds(breakStart.getSeconds() + 10);

updateTime();
e = setInterval(updateTime,1000);

function updateTime(){
    d = new Date();
    clock.innerHTML = "Break Time from "+ breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds();

   //check hier hoe laat het is en of je wel of geen break moet hebben
    if (d > breakStart && d < breakEnd) {
        breakNow();
    } else {
        endBreak();
    }
}
function breakNow(){
    //pas hier de source van je image aan voor als je een break hebt
    image.src = "break.jpg";

}
function endBreak(){
   //Pas hier de source van je image aan voor als je aan het werk bent
   image.src = "working-hard.jpg";
}