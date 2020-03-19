
window.addEventListener('load', function(){

  // THIS IS WORKING, BUT IT DOESN'T UPDATE THE OBJECT
  //IT ONLY CHANGES THE TITLES
  let randomButton = document.getElementById('randomize');
  let randomURLs = document.querySelectorAll('.activityURL');
  console.log("randomURLs-->", randomURLs[0].href)
  console.log('How many randomURLs in array:', randomURLs.length)
  console.log("here is the randomize", randomButton);

  randomButton.addEventListener('click', function(){
    
  let titlesObj =  document.querySelectorAll('.activityTitle');
  console.log("this is the titlesObj:", titlesObj)
  var titlesInnerHTML = [];
  for (var i = 0; i < titlesObj.length; i++) {
    titlesInnerHTML.push(titlesObj[i]);  
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
      console.log("titlesObj[j].innerHTML", titlesObj[i])
      console.log("temp", temp.id)
      let tempObj = {};
      titlesObj[j].innerHTML = temp.innerHTML
      tempObj.tempVal = temp.innerHTML;
      tempObj.tempId = randomURLs[j].href;
      let updatedURLs = tempObj.tempId;
      console.log("HERE is the updatedURLs:", updatedURLs)
      randomURLs[j].setAttribute('href', temp.id);
      console.log("this is the length of the randomURLs --->", randomURLs[j].href)
      console.log("href?-->:", randomURLs[j].href)

      console.log("TEMPOBJECT", tempObj)

      var canvasElement = document.getElementById('canvasElement');
      var dataURI = canvasElement.toDataURL();
      console.log("this is the dataURI", dataURI)
      var context = canvasElement.getContext('2d');
      let contextColor = context.fillStyle = 'green';
      let contextFill = context.fillRect (15, 20, 150, 200);
      // console.log("this is the canvasElement", canvasElement)
      

    }
    console.log("this is this-->", this)
    return this;
  }
    console.log("again titles:", titlesInnerHTML) 
    var result = titlesInnerHTML.random();
  });
});

  //THE END 
  //I NEED A WAY TO TARGET THE FULL OBJECT, NOT JUST THE TITLE. 

