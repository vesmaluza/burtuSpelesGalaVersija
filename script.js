let vardi_1=['varavīksne','zizlis','banāni','monitors','lineāls','datorpele','pikselis','čemodāns','krēsls','aparāts']
                            let vardi_s=['ksnevaravī','lizisz','anānbi','iomonrts','inlālse','olerpdate','elispiks','ānočemds','ēslkrs','aāptars']    
                            var vardi_i=[];
                            let timeout;
                            var c = document.getElementById("sekundes");
                            var s = c.getContext("2d");
                            var laiks;
                            var punkti=0;
                            var punktih=document.getElementById("punkti");
                            reset();
                            //}
                           //minēt vārdus 1 min
                           //parādīt cik vārdi uzminēti pēc iepsējas īsakā laikā
                            function reset(){
                                for(var i=0;i<vardi_1.length;i++){
                                    vardi_i.push(i);
                                }
                            }

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
                                    alert('Laiks beidzies!')
                                clearInterval(izpildit);
                                } 
                            } 
                            , 1000);

                        }

                           function startTime() {
                            const date = new Date();
                             document.getElementById("demo").innerHTML = date.toLocaleTimeString();
                                setTimeout(function() {startTime()}, 1000);
                            }

                            function izveletiesVardu(size) {
                            randomNr = Math.random()*(size)
                            randomNr = Math.ceil(randomNr)
                            randomNr--;
                            console.log(vardi_1[vardi_i[randomNr]]);
                            document.querySelector(".sajaukts").innerHTML=sajauktVardu(vardi_1[vardi_i[randomNr]]);
                            document.querySelector('.atbilde').value=''
                        }

                            izveletiesVardu(vardi_i.length)

                            function parbaudit(){
                                let atbilde = document.querySelector('.atbilde').value;
                                if(atbilde == vardi_1[vardi_i[randomNr]])
                                {
                                    var rand = randomNr
                                    console.log(vardi_i.length + ": size");
                                    vardi_i.splice(vardi_i[rand],1);
                                    izveletiesVardu(vardi_i.length)
                                    alert('Pareizi!')
                                    punkti++;
                                    console.log("Punkti: " + punkti);
                                    document.getElementById("punkti").textContent="Punkti: "+punkti;
                                        
                                }//beidzas if
                                else {
                                    console.log(atbilde + " : " + vardi_1[vardi_i[randomNr]]);
                                    console.log(vardi_i.length + " | " + randomNr + " | " + vardi_i[randomNr]);
                                    alert('Nepareizi')
                                }
                            }//beidzas parbaudit()
                            
        




                            function sajauktVardu(vards) {

                                var shuffled = vards.split('').sort(function(){return 0.5-Math.random()}).join('');
                                console.log(shuffled);
                                return shuffled;
                                /*let vardsIzjauksanai = vards.split('')
                                let vardaGarums = vards.length
                                let loopIndex = 0
                                let sajauktsVards = []

                                while(loopIndex!=vardaGarums) {
                                    //console.log(vards[loopIndex])

                                    let randomIndex=Math.floor(Math.random()*vardsIzjauksanai.length)
                                    
                                    sajauktsVards.push(vardsIzjauksanai[randomIndex])
                                    vardsIzjauksanai.splice(randomIndex,1)
                                    loopIndex++
                                }
                                //console.log(sajauktsVards)
                                sajauktsVards = sajauktsVards.join('')
                                return sajauktsVards*/
                            }
                                

