let vardi_1=['varavīksne','zizlis','banāni','monitors','lineāls','datorpele','pikselis','čemodāns','krēsls','aparāts','lapa','lācis']
let vardi_s=['ksnevaravī','lizisz','anānbi','iomonrts','inlālse','olerpdate','elispiks','ānočemds','ēslkrs','aāptars','pala' ,'cāils']   
let timeout;
var c = document.getElementById("sekundes");
var s = c.getContext("2d");
var laiks;
var punkti;




function taimeris() {

laiks = 60;
n = 400 / laiks;
s.clearRect(0, 0, 400, 30);
s.fillRect(0, 0, 400, 30);
var izpildit = setInterval(function(){
    if (laiks > 0) {
    laiks = laiks - 1;
    }
    s.clearRect(0, 0, 400, 30);
    s.fillRect(0, 0, n * laiks, 30);
    izvade.innerHTML = laiks; 
    if (laiks == 0) {
        alert('Laiks beidzies! Spied OK, lai pievienotos TOP!')
        window.location.assign("tops.html")
    clearInterval(izpildit);
 
    } 
} 
, 1000);

}



function izveletiesVardu() {
randomNr = Math.random()*10
randomNr = Math.ceil(randomNr)
randomNr = randomNr-1

document.querySelector(".sajaukts").innerHTML=vardi_s[randomNr]
document.querySelector('.atbilde').value=''
}

izveletiesVardu()

function parbaudit(){
    let atbilde = document.querySelector('.atbilde').value;
    if(atbilde == vardi_1[randomNr])
    {
        izveletiesVardu()
        alert('Pareizi!') 
    
    }//beidzas if
    else {
        alert('Nepareizi')
    }
}//beidzas parbaudit()



function sajauktVardu(vards) {

    let vardsIzjauksanai = vards.split('')
    let vardaGarums = vards.length
    let loopIndex = 0
    let sajauktsVards = []

    while(loopIndex!=vardaGarums) {

        let randomIndex=Math.floor(Math.random()*vardsIzjauksanai.length)
        
        sajauktsVards.push(vardsIzjauksanai[randomIndex])
        vardsIzjauksanai.splice(randomIndex,1)
        loopIndex++
    }

    sajauktsVards = sajauktsVards.join('')
    return sajauktsVards
}

function startTime() {
const date = new Date();
 document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {startTime()}, 1000);
}  
 
