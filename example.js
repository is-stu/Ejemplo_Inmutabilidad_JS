//Ejemplo de inmutabilidad con JS y Object.freeze

const obj = {
    prop: 50
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 50


  const person = {
      name: "Stewar",
      age : 21
  };

  Object.freeze(person);

  person.age = 60;
  //no cambia

  console.log(person.age);
    // expected output: 21