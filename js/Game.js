AFRAME.registerComponent('game',{
    schema:{
        elementId:{type:"string",default:'#ring1'}
    }    ,
    init:function(){
        var duration=120
        const timer1=document.querySelector("#timer")
        this.starttimer(duration,timer1)
        
                },



                starttimer:function(duration,timer1){
                    var mins,sec;
                    setInterval(()=>{
                        if(duration>=0){
                                mins=parseInt(duration/60);
                                sec=parseInt(duration%60);
                                if(mins<10){
                                    mins="0"+mins
        
                                }
                                if(sec<10){
                                    sec="0"+sec
                                }
                                timer1.setAttribute('text',{
                                    value:mins+':'+sec
                                });
                                duration+=-1
        
                        }
        
                    
                        else{
                            this.gameOver()
                        }
        
        
                        
                    },1000)
            },
            isCollided:function(elementId){
                const element=document.querySelector(elementId)
                element.addEventListener('collide',e=>{
                   if(elementId.includes('#coin')){
                    element.setAttribute("visible",false)
                    this.updateScores()
                    this.updateTarget()
                   } 
    
                else if(elementId.includes('#fish')){
               this.gameOver()
                  
                }
                   
                })
            },

            updateTarget:function(){
                var element=document.querySelector("#targets");
                var count=element.getAttribute("text").value;
                var currenttarget=parseInt(count)
                currenttarget-=1
                element.setAttribute("text",{
                    value:currenttarget
                })
    
    
            },
    
            updateScores:function(){
                var element=document.querySelector("#score")
                var count=element.getAttribute("text").value;
                var currentscore=parseInt(count)
                currentscore+=100
                element.setAttribute("text",{
                    value:currentscore
                })
    
                
            },
    
            gameOver:function(){
                var plane1=document.querySelector('#plane')
                var element=document.querySelector('#over')
                element.setAttribute('visible',true)
                plane1.setAttribute("dynamic-body",{
                    mass:1
                })
            },
            update:function(){
                this.isCollided(this.data.elementId)
    
            }


})