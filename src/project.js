const projectFactory = (name, description) => {
    const sayHello = () => console.log(this);
    return { name, description, sayHello };
  };

  const Person = function(name, age) {
    this.sayHello = () => console.log(this);
    this.name = name;
    this.age = age;
  };
  
  export { projectFactory, Person };