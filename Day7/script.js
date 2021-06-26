// Ques.1

// const student = { name : "David Rayy", sclass : "VI", rollno : 12 }

//     const studentProp = Object.keys(student);
//     console.log(studentProp)

// Q.2

// let student = { name : "David Rayy", sclass : "VI", rollno : 12 }
// console.log(student)

// const rollDelete = delete student.rollno
// console.log(student)

// Q.3

// const student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// Object.sizeObj = function(obj) {
//     var size = 0, key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) size++;
//     }
//     return size;
// };

// const sizeOfObj = Object.sizeObj(student);
// console.log(sizeObj);

//Q.4

// const library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },

//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },

//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   const title = library[i].title;
//   const author = library[i].author;
//   const readingStatus = library[i].readingStatus;
//   console.log(title + ":-", author + " =>", readingStatus);
// }

//Q.5

// class CylinderVolume {
//   constructor(height, radius) {
//     this.height = height;
//     this.radius = radius;
//   }

//   cacl() {
//     let output = Math.PI * this.radius ** 2 * this.height;
//     return output;
//   }
// }

// let volume = new CylinderVolume(7, 2);
// const mainOutput = volume.cacl().toFixed(4);
// console.log(mainOutput);

//Q.6

// var library = [
//   { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//   { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   const title = library[i].title;
//   const author = library[i].author;
//   const libraryID = library[i].libraryID;

//   let book1 = { author, libraryID, title };
//   console.log(book1);
// }
