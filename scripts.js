// Create an object called Multiplier with two methods: multiply and getCurrentValue.
// multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.
// getCurrentValue should return the last answer returned from multiply.

var multiplier = {
  currentValue: 1,

  multiply: function(ourNumber) {
    console.log("== multiply ==");
    console.log("ourNumber:", ourNumber);
    var temporaryNumber = (ourNumber * multiplier.currentValue);
      console.log("temporaryNumber:", temporaryNumber);
      multiplier.currentValue = temporaryNumber;
  }

};
multiplier.multiply(5);

// Implement an object model that allows you to store strings that represent a Photo.
// Your model should include an Album object that can contain many Photo objects in its photos attribute.
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added.
// Each Photo should store the photo's file name and the location the photo was taken in as strings.
// Create instances of each object defined to prove that your object model works.

var photoApp = {
  myGallery: [
    { title: "The Lookout" , location: "Island"  , url: "Gallery/lookout.jpg", timeStamp: "July 2009" },
    { title: "White Houses", location: "Greece" , url: "Gallery/whiteHouses.jpg", timeStamp: "August 2009"},
    { title: "Venetian Roads", location: "Venice", url: "Gallery/venetianRoads.jpg", timeStamp: "June 2010"},
    { title: "Nojiri Village", location: "Asia" , url: "Gallery/nojiriVillage.jpg", timeStamp: "December 2015"}
  ],
  initialize: function() {
    console.log("== initialize ==");
    photoApp.activateUserActions();
  },
  activateUserActions: function() {
    console.log("== activateUserActions ==");
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", photoApp.saveNewPhoto);
  },
  saveNewPhoto: function(){
    console.log("== saveNewPhoto ==");
    var title = document.getElementById("title").value;
    var location = document.getElementById("location").value;
    var url = document.getElementById("url").value;
    var timeStamp = document.getElementById("timeStamp").value
    // ===== Make Instance ======
    var nextPhoto = new photoApp.Photo(title, location, url, timeStamp);
    photoApp.myGallery.push(nextPhoto);
    console.log(photoApp.myGallery);
    console.dir(nextPhoto);
    photoApp.createPhotoList();
  },
  // ===== Photo Constructor ======
  Photo: function(title, location, url, timeStamp){
    console.log("== Photo ==");
    this.title = title;
    this.location = location;
    this.url = url;
    this.timeStamp = timeStamp;
  },
  // var galleryTitles = document.getElementById(galleryTitles);
  // galleryTitles = innerhtml(" ");
  createPhotoList: function(){
    console.log("== createPhotoList ==");
    var nextListItem = "";
      for (var i = 0; i < photoApp.myGallery.length; i++) {
        nextPhoto = photoApp.myGallery[i];
        nextTitle = nextPhoto.title;
        nextListItem += "<li id='title_" + i + "'>" + nextTitle + "</li>";
      };
      console.log(nextListItem);
    // document.getElementById(galleryTitles).appendChild(nextListItem);
  }


};
photoApp.initialize();

// Create a prototypical Person object.
// From this object, extend a Teacher object and a Student object.
// Each of these objects should have attributes and methods pertinent to what they describe.
// Also create a School object that should be able to store instances of students and teachers.
// Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

var mySchool = {
  myTeachers:[],
  myStudents:[]
};

// ====== Person Constructor ======
function Person(fName, lName, age, ethnicity){
  console.log("== Person == ");
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.ethnicity = ethnicity;
}
// ===== Person Instance ====
console.log("== Instances for Person ==");
var Monique = new Person("Monique", "Bolosan", "25", "Philipino");
console.log("Monique:", Monique);
// ===== Person Method =====
Person.prototype.Hi = function(){
  console.log("== Hi ==");
  var Hi = this.fName + "Says: Hi!";
  console.log(Hi);
}
Monique.Hi();


// ===== Teacher Constructor =====
function Teacher(fName, lName, age, ethnicity, discipline){
  console.log("== Teacher ==");
  Person.call(this, fName, lName, age, ethnicity, discipline);
  this.discipline = discipline;
}
// ===== Inherited Teacher Method =====
console.log("=== inherit Person Protoype for Teacher ===");
Teacher.prototype = Object.create(Person.prototype);

// ===== Teacher Instance =====
console.log("== Instances for Teacher ==");
var Anjali = new Teacher("Anjali", "Ram", "40", "Indian", "Communications");
console.log("Anjali:", Anjali);
mySchool.myTeachers.push(Anjali);
console.log(mySchool.myTeachers);

// ===== Calling Inherited Person Method =====
Anjali.Hi();

// ===== Teacher Method =====
Teacher.prototype.Homework = function(){
  console.log("== Homework ==");
  var Homework = this.fName + "Says: Turn in your Homework!";
  console.log(Homework);
}
Anjali.Homework();


// ===== Student Constructor =====
function Student(fName, lName, age, ethnicity, year){
  console.log("== Student ==");
  Person.call(this, fName, lName, age, ethnicity, year);
  this.year = year;
}
// ===== Inherited Student Method =====
console.log("=== inherit Person Protoype for Student ===");
Student.prototype = Object.create(Person.prototype);

// ===== Student Instance =====
console.log("== Instance for Student ==");
var Mike = new Student("Micahel", "Perez", "26", "Brazilian", "2013");
console.log("Mike:", Mike);
mySchool.myStudents.push(Mike);
console.log(mySchool.myStudents);

// ===== Calling Inherited Person Method =====
Mike.Hi();

// ===== Student Method =====
Student.prototype.Excuse = function(){
  console.log("== Excuse ==");
  var Excuse = this.fName + "Says: My dog ate my Homework?";
  console.log(Excuse);
}
Mike.Excuse();
