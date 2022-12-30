
AFRAME.registerComponent("coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 1 + (-3));      
        var posY = (Math.random() * 0.5 + (-1));
        var posZ = (Math.random() * 2 - (10));
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#island");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
  
      
      ringEl.setAttribute("material","color","#ff9100");
      
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
      ringEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:2
      })
      
      ringEl.setAttribute("game",{
        elementId:`#${id}`
      })
      terrainEl.appendChild(ringEl);
    }
  });
  
  