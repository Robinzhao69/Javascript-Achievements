a = document.getElementById('date')
b = document.getElementById('Dag')



function toonDatum(){
    // Schrijf hier jouw code
    d = new Date('2020,12,2');
    a.innerHTML = "het is vandaag: "+ d.toDateString(); 

    p = new Date();
    b.innerHTML = "dag: "+ p.toDateString();

    
    
       
}

window.addEventListener('DOMContentLoaded', toonDatum);