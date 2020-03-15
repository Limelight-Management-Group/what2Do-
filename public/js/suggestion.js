// let ActivitySuggestion = require('../models/suggestions')
// console.log(ActivitySuggestion,"imported js from suggestions")
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     console.log("this is the forms OBJ:", forms)
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
// console.log("this is the validation", event)
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();
  // 'use strict';
  // window.addEventListener('load', function() {
  //   console.log("suggestion loaded")
  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var formSub = document.getElementById('suggestionsubmit');
  //   console.log("this is the forms OBJ:", formSub)
  //   // Loop over them and prevent submission
  //   // var validation = Array.prototype.filter.call(forms, function(form) {
  //     formSub.addEventListener('click', function(event) {
  //       alert("this is the validation", event)
  //       if (formSub.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       // formSub.classList.add('was-validated');
  //     }, false);

  //   // var objectToUpdate = document.getElementById('updateActivity')
  //   // objectToUpdate.addEventListener('click', function(update){
  //   //   console.log(" this is the event:", update)
  //   //   alert("yup...")
  //   // })
  // });
//I want to load all of the events into an array
// var item = items[Math.floor(Math.random() * items.length)]
// var newOrder = [];
// let abcs = ["z","x","y","d","e","f","g"]
// console.log("the ABC's", abcs)
// function useSort(array){
//    newOrder = array[Math.floor(Math.random() * array.length)]
//   console.log('newOrder',newOrder);
// }
// useSort(abcs)
// let update = []
//   pTextArray = [];
//   console.log('locked, cocked, and ready to rock!!');
//   let pClass = document.getElementsByClassName('activityTitle');
//   console.log('pclass.length--->', pClass.length)
//   console.log('pTagsArray[0]', pClass[0].innerHTML)
//   for(var i =0; i < pClass.length; i++){
//     pTextArray.push(pClass[i].innerHTML);
//     console.log(pClass[i].innerHTML)
//   // console.log("the p tags:", pTags)
//   let sorted = useSort(pTextArray)
//   update.push(newOrder)
//   // let sorted = pTags.sort();

//   // I want to reorder dom elements in array;
//   }
//   // console.log("SORTEDDDD:", sorted.length)
//     // console.log("this is the update:", update)
//   console.log("this is the unsorted array", pTextArray);

// console.log('this is the update:', update)
// let elementArray = []
//   // console.log("this is after sort():", sorted);
//   var pElements =document.querySelectorAll('.activityTitle');
//   console.log("this is the pElements", pElements.length)
// let count = pElements.length
//   while(count >= 0){
//     console.log(pElements[count],"Pelementscount")
//     count--;
//   }
  // [].slice.call( pElements ).forEach(function ( element ) {
  // //   elementArray.push(element)
  // count = pElements.length
  // console.log('count', count)
  // let storage = []
  // //     if(count > 0){
  //   while(count > 0){
  //     storage.push(element.innerHTML)
  //     count--;
  //     if(count >= 0){
  //     storage[i] = update[i];
  //       console.log("count-->", count)
  //     console.log(storage,"<----innerHTML")
  //     let total = storage.length
  //     console.log(total,'<---total')
  //     }  
  //   }
  // //     // console.log(sorted,"sorted")
  //   // }
  //   });
window.addEventListener('load', function(){

  // THIS IS WORKING, BUT IT DOESN'T UPDATE THE OBJECT
  //IT ONLY CHANGES THE TITLES
  let randomButton = document.getElementById('randomize');
  console.log("here is the randomize", randomButton);

  randomButton.addEventListener('click', function(){
    

  let titlesObj =  document.querySelectorAll('.activityTitle');
  var titlesInnerHTML = [];
  for (var i = 0; i < titlesObj.length; i++) {
    titlesInnerHTML.push(titlesObj[i].innerHTML);  
  }
  console.log(titlesInnerHTML,"titlesInnerHTML" );

  console.log("checkinginfrom suggestion");

  Array.prototype.random = function(){
    var i = this.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
      console.log("titlesObj[j].innerHTML", titlesObj[j].innerHTML)
      console.log("temp", temp)
      titlesObj[j].innerHTML = temp
      console.log("tempVal", temp.value)
      // alert(temp)
    }
    console.log("this is this-->", this)
    console.log("this is the result:", result)
    return this;
  }
  // console.log("TITLES:", titlesObj)
    console.log("again titles:", titlesInnerHTML) 
    var result = titlesInnerHTML.random();
  });
    // console.log('result', result)
});

  //THE END 
  //I NEED A WAY TO TARGET THE FULL OBJECT, NOT JUST THE TITLE. 

// console.log("TITLES:", typeof title)
// console.log("")
// var items = document.getElementById( 'items' ),
//     divs = document.getElementsByClassName( 'count' );

// [].slice.call( divs ).forEach(function ( div ) {
//     div.innerHTML = items.innerHTML;
// });