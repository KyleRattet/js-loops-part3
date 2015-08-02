// add scripts

$(document).on('ready', function() {

//GLOBAL VARIABLES
  var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

//EXAMPLE (OUTPUT DEREK LIZ CARL PETER MEGAN)

// function firstLoop (arr) {
//   arr.forEach(function (person) {
//     console.log(person.name);
//   });
// }

// firstLoop(students);

//PROBLEM 1 (PRINT OUT AGES)
// function nameLoop (arr) {
//   arr.forEach(function (person) {
//     console.log(person.age);
//   });
// }

// nameLoop(students);

//PROBLEM 2 (PRINT NAME, CITY)
// function printNameCity (arr) {
//   arr.forEach(function (person) {
//     console.log(person.name +", " + person.city);
//   });
//  }


// printNameCity(students);

//PROBLEM 3 (FILTER CITY BOULDER, print names)
// function printBoulder (arr) {
//     arr.forEach(function (person) {
//       if(person.city === "Boulder"){
//         console.log(person.name +' is from ' + person.city);
//       }
//     });
// }

// printBoulder(students);

//PROBLEM 4
// function olderThan (arr) {
//   arr.forEach(function (person) {
//     if(person.age > 25) {
//       console.log(person.name +' is older than 25');
//     }
//   });
// }

// olderThan(students);

// Testing filter() on problem 3&4

//PROBLEM 3
function city (value) {
 if (value.city === "Boulder"){
  console.log(value.name +" is from "+ value.city);
 }
}

var cityFilter = students.filter(city);

});









