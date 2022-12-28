AFRAME.registerComponent('game',{
    schema:{
        elementId:{type:"string",default:'#ring1'}
    }    ,

    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener('collide',e=>{
           if(elementId.includes('#fish')){
            console.log("collision")
           } 

        else if(elementId.includes('#coin')){
            console.log("Collision")

        }
           
        })
    },

    update:function(){
        this.isCollided(this.data.elementId)
    }


})