// Class Car
// -> gearbox, wheels, seats, windows, sidemirrors, engine:toyotaOyata, glutch, brake
// -> startGlutch -> "clutch Started"
// -> startEngine -> return "Toyota Engine has started"
// -> startCar -> 1. startGluch -> "clutch Started" -> "Toyota Engine has started"// Class Porsche extends Car
// -> Porsche engine has started.// Class Toyota
//Class Volkaswagen

Class car {
  constructor(gearbox, wheels, seats, windows, engine, clutch)
   this.gearbox =gearbox;
   this.wheels = wheels;
   this.seats = seats;
   this.windows = windows;
   this.engine = engine ;
   this.clutch = clutch;
}
   startEngine(){
     return`${this.engine} has started}`
   }
   startClutch(){
     return`${this.clutch} has started}`
   }
   startCar(){
     console.log(startClutch + "then" +"startEngine")

 Class Porche externds car{
   constructor(gearbox,wheels,seats,windows,engine,clutch)
   super(gearbox, wheels, seats, windows, engine, clutch)
 }
  Class Toyota extends car{
    constructor(gearbox, wheels, seats, windows, engine, clutch)
    super(gearbox, wheels, seats, windows, engine, clutch)
    
  }

 }
