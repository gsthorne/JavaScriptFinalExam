// JavaScript Document

// create a class of person
class Person {
  // person 'traits' include name, age, gender, and interests. a constructor runs when the
  // Person is instantiated, and sets the Person's name, age, gender, and interests to the
  // values passed in.
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // greeting() is a method that can be called, and logs the message to the console.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  // bye() is the same as greeting(), but logs a different message.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

// instantiate two different Person instances
// Parth is a 20 year old male that likes JavaScript, Java, and PHP
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
// Harmanpreet is a 22 year old male that likes JavaScript, C#, and Relational DataBase
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// a Teacher is a child class of Person that inherits name, age, gender and interests
// from Person, but has subject and grade unique to its class.
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    // basically just get the Person constructor to set the name, age, gender and interests
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher

    // set its own subject and grade
    this.subject = subject;
    this.grade = grade;
  }
}

// create a new Teacher instance
// bob is a bad teacher
let bob = new Teacher('Bob', 83, 'male', ['Sleeping', 'Yelling', 'Being mean'], 'History', 12);
