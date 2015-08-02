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
function printNameCity (arr) {
  arr.forEach(function (person) {
    console.log(person.name +", " + person.city);
  });
 }


printNameCity(students);


});









