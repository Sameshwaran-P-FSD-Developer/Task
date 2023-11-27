class person {
    constructor (firstName, lastName, age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender=gender;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}
 
var person1 = new person ("Sam", "Eshwaran", 21,"Male" );
console.log(person1.firstName);
console.log(person1.getFullName());
console.log(person1.gender);