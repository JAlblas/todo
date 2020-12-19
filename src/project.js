// Factory
const createUser = ({ userName, avatar }) => ({
  userName,
  avatar,
  setUserName (userName, avatar) {
    this.userName = userName;
    this.avatar = avatar;
    console.log(this);
  }
});

// Constructor
const Person = function(name, age) {
  this.sayHello = () => console.log(this);
  this.name = name;
  this.age = age;
};

// Module pattern
const Module = (() => {
  const printLine = () => {
    console.log(("HAHAHA"));
  }
  return { printLine };
})()

export { createUser, Person, Module };