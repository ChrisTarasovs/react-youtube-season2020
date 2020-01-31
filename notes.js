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
console.dir(findLocations);



// Lesson 3: 

var color = 'yellow';
/* console.log(color); */

var bananas = function(){
	return color;
}

// closure, functions
var msg = function(userName){
    greeting = (greetingType) => {
    		return greetingType + ' ' + userName;
    }
    return greeting;
}
var starting = new msg('James');
/* console.log( starting('Buenas dias')); */

// Hoisting: Block scope, function scope.
// var name;
// var, let, const,
var user = function (){
		var name = 'Ilma';
    if(1===1){
    	const name = 'Tomas';
      console.log(name);
    }
    console.log(name);
    var name = 'Chris';
    console.log(name);
}

user();
