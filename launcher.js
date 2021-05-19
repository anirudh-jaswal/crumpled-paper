class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 42
            
        }
        this.pointB = pointB
        this.Launchet= Matter.Constraint.create(options);
     
        World.add(world, this.Launchet);
    }
    fly(){
          this.Launchet.bodyA=null
      }
     
      display(){
        if(this.Launchet.bodyA){
          
            var pointA = this.Launchet.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}






