AFRAME.registerComponent('fish',{
    init :function(){
        for(var i=1;i<20;i++){
            var id=`fish${id}`
            var posX =(Math.random() * 3000 + (-1000));      
      var posY = (Math.random() * 2 - (-1));
      var posZ = (Math.random() * 3000 + 1000);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.flyingbirds(id, position);
        }
    },

    flyingbirds:(id,position)=>{
        var terrain=document.querySelector("#terrain")
  
        var bird_1=document.createElement("a-entity")
        bird_1.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        bird_1.setAttribute("animation-mixer",{})
        bird_1.setAttribute("id",id)
        bird_1.setAttribute("position",position)
        bird_1.setAttribute("scale",{x:500,y:500,z:500})
        bird_1.setAttribute("static-body",{
            shape:"sphere",
            shapeRadius:5
        })

        bird_1.setAttribute("game",{
            elementId:`#${id}`
        })
        terrain.appendChild(bird_1)

    }
})