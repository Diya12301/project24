class paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.body = Bodies.circle(x,y,options);
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      ellipse(56,46,55,55);
    }
  };