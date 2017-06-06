// Create an object called Multiplier with two methods: multiply and getCurrentValue.
// multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.
// getCurrentValue should return the last answer returned from multiply.


// var multiplier = {
//   currentValue: 1,
//
//   multiply: function(ourNumber) {
//     console.log("== multiply ==");
//     console.log("ourNumber:", ourNumber);
//     var temporaryNumber = (ourNumber * multiplier.currentValue);
//       console.log("temporaryNumber:", temporaryNumber);
//       multiplier.currentValue = temporaryNumber;
//   }
//
// };
// multiplier.multiply(5);

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
    console.dir(nextPhoto);
  },
  // ===== Photo Constructor ======
  Photo: function(title, location, url, timeStamp){
    console.log("== Photo ==");
    this.title = title;
    this.location = location;
    this.url = url;
    this.timeStamp = timeStamp;
  }
};
photoApp.initialize();

// Create a prototypical Person object.
// From this object, extend a Teacher object and a Student object.
// Each of these objects should have attributes and methods pertinent to what they describe.
// Also create a School object that should be able to store instances of students and teachers.
// Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
