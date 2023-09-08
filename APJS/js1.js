pais = "Argentina";

console.log(`Hello from ${pais}`);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: false,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    sayHello: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
  };
  
  console.log(person.firstName);  // Output: John
  console.log(person.address.city);  // Output: Anytown
  person.sayHello();  // Output: Hello, my name is John Doe
  

  function holaMundo(){
    console.log("Hola Mundo");
    }