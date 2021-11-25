// (function () {
// var names = ["Farzad", "Hasan", "Ali", "Hossein", "Armin", "Behnam", "Ahmad", "Parisa", "Mahsa", "Somayeh"];
// for (var i = 0; i < names.length; i++) {
//   var firstLetter = names[i].charAt(0).toLowerCase();
//   if (firstLetter === 'j') {
//     byeSpeaker(names[i]);
//   }
//   else {
//     helloSpeaker(names[i]);
//   }
// }
// })();
(function () {

var names = ["Farzad", "jafar", "jusmin", "justin", "jaber", "Behnam", "Ahmad", "Parisa", "Mahsa", "Somayeh"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
