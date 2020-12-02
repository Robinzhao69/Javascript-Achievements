//via het DOM document object model wordt er een link gemaakt naar elementen uit je HTML file
i = document.getElementById("break_img")//verwijzing naar je <img id='break_img'>
p = document.getElementById("clock")//verwijzing naar je <p id='clock'>

breakStart = new Date('November 2, 2020 12:00:00');
breakEnd = new Date('November 2, 2020 12:00:10');
//stel de begin en eindtijd van je break hier in


e = setInterval(updateTime,1000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd

function updateTime(){
    d = new Date('20 11:59:55');
    
    
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+ d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
     
     
       
   //check hier hoe laat het is en of je wel of geen break moet hebben
}
function breakNow(){
    //pas hier de source van je image aan voor als je een break hebt
    i.src = "break.jpg"
   
}
function endBreak(){
   //Pas hier de source van je image aan voor als je aan het werk bent
   i.src = "working-hard.jpg"
}