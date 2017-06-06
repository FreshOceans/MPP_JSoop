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

// var myAlbums = {
//   albumCovers: { title: "", location: "", url: "", timeStamp: "" },
//   cocktails: { title: "", location: "", url: "", timeStamp: "" },
//   trips: { title: "", location: "", url: "", timeStamp: "" },
//   games: { title: "", location: "", url: "", timeStamp: "" },
// }
// console.dir(myAlbums);

var photoApp = {
  myGallery: [
    { title: , location: , url: , timeStamp: }
    { title: , location: , url: , timeStamp: }
    { title: , location: , url: , timeStamp: }
    { title: , location: , url: , timeStamp: }
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
  },
  // ===== Photo Constructor ======
  Photo: function(title, location, url, timeStamp){
    console.log("== Photo ==");
    this.title = title;
    this.location = location;
    this.url = url;
    this.timeStamp = timeStamp;
  }
  // ===== Make Instance ======
  var nextPhoto = newPhoto("","","")
};

photoApp.initialize();
