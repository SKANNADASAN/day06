

//# Circle - Class

//Convert the UML diagram to Typescript class.

class circle{
    constructor(radius,colour){
      this.radius=radius;
      this.colour=colour;
    }
    getarea(){
      return pi*radius*radius
    }
    getcircumference(){
      return 2*pi*radius
    }
  }
  var c1=new circle(1.0,"blue");
  console.log(c1.getarea());