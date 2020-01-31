// What is a class
// How classes work : Properties & Methods

class Bananas{
    color = 'yellow';
    weight = 100;
    total = 0;
    
    addElement = (i) => {
        this.total = this.total + i;
        return this.total;
    }
    getTotal = () => {
        return this.total;
    }
}

// How to initialise a class
const myfunction = new Bananas();
console.log(myfunction.getTotal());
console.log(myfunction.addElement(1));
console.log(myfunction.getTotal());

// What is inheritance
class Location extends Bananas{
    location = 'London';
   
    getLocation = () =>{
        return this.location;
    }
}
const findLocations  = new Location();
console.log(findLocations);