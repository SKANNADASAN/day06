//4.)write a class to calculate the uber price.

class uber{
    constructor(name,km,travelfrom,travelto){
      this.name=name;
      this.km=km;
      this.travelfrom;
      this.travelto;
    }
    price(){
      return this.km*16;
    }
  }
  var u1=new uber("toyata",200,"chennai","pondicherry");
  console.log(u1.price());
  
