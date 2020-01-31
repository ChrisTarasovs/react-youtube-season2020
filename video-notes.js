// class
class Bananas {
 
 constructor(){
    this.color = 'yellow';
    this.count = 0;
 }
 add = (i) => {
        return this.count + i;
 }  
}
// function and initialisation
const myfunction = new Bananas();
myfunction.call();

// Constructor  and Inheritance 
class Location extends Bananas {

}
