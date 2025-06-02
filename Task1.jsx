class cabService {
  constructor(){
    this.car_type = ""
    this.bill = this.km =0.0
  }

  accept(){
    this.car_type = prompt("Enter Your Car Type: Ac or Non-AC")
    this.km = Number(prompt("Enter Km travelled"))
  }

  calculate(){
    if( this.car_type === 'AC'){
      if(this.km<=5) this.bill = 150;
      else this.bill = 150 +(this.km -5) *10
    }else if(this.car_type === 'Non-Ac'){
      if(this.km<=5) this.bill = 120;
      else this.bill = 120 +(this.km -5) *10
    }
  }
  display(){
    console.log("Car type" + this.car_type)
    console.log("Km Travelled" + this.km)
    console.log("Bill" + this.bill)
  }
}


let obj = new cabService()
obj.accept()
obj.calculate()
obj.display()