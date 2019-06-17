/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - The value of "this" in the global scope will be equal to the window/console object.
* 2. Implicit Binding - When a function is called with dot notation, the object before the dot gets the "this".
* 3. New Binding - When a constructor function is used, "this" refers to the specific instance of the new object that is being returned.
* 4. Explicit Binding - "this" is explicitly defined whenever JavaScript's call, apply, or bind methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const myName = {
    name: "Harrison!",
    shout: function() {
        console.log(`My name is ${this.name}`)
    }
};
myName.shout();

// Principle 3

function Food(obj) {
    this.name = obj.name;
    this.flavor = obj.flavor;
    this.ethnicity = obj.ethnicity;
    this.isTasty = function() {
        console.log(`This ${this.name} is perfectly ${this.flavor}. I love ${this.ethnicity} food!`);
    }
}
const chickenParmigiana = new Food({name: "Chicken Parmigiana", flavor: "salted", ethnicity: "Italian"});
chickenParmigiana.isTasty();

// Principle 4

const chickenScarpariello = new Food({name: "Chicken Scarpariello", flavor: "spicy", ethnicity: "Italian"});
chickenParmigiana.isTasty.call(chickenScarpariello);