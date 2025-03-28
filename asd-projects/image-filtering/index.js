// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify)
  applyFilterNoBackground(decreaseBlue)
  applyFilter(increaseGreenByBlue)
  pixelate()

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for(var row = 0; row < image.length; row++){
    for(var column = 0; column < image[row].length; column++){
      let rgbString = image[row][column];
      let rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[row][column] = rgbString;

    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  let backgroundColor = image[0][0];

  for(var row = 0; row < image.length; row++){
    for(var column = 0; column < image[row].length; column++){
      let rgbString = image[row][column];

      if(rgbString != backgroundColor){
        let rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[row][column] = rgbString;
      }
    }
  }
}


// TODO 5: Create the keepInBounds function
function keepInBounds(aNumber){
  let AHHHHHHHHHHH = 0
  const zero = (aNumber < 0) ? AHHHHHHHHHHH = 0 :
              (aNumber > 255) ? AHHHHHHHHHHH = 255 : AHHHHHHHHHHH = aNumber;
  zero
  return AHHHHHHHHHHH
}


// TODO 3: Create reddify function
function reddify(anArray){
  anArray[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(anArray){
  anArray[BLUE] = keepInBounds(anArray[BLUE] - 50);

}
function increaseGreenByBlue(anArray){
  anArray[GREEN] = keepInBounds(anArray[GREEN] + anArray[BLUE]);
}


// CHALLENGE code goes below here
function pixelate(){
  for(var row = 0; row < image.length; row++){
    for(var column = 0; column < image[row].length; column++){
      let nextPixel
      const inArray = (column + 1 < image[row].length) ? nextPixel = image[row][column + 1] : nextPixel = image[row][column];
      inArray;

      let rgbString = image[row][column];

      let rgbNumbers = rgbStringToArray(rgbString);
      let nextPixelRgbNumber = rgbStringToArray(nextPixel);
      
      rgbNumbers[RED] = (nextPixelRgbNumber[RED] * Math.random())
      rgbNumbers[GREEN] = (nextPixelRgbNumber[GREEN] * Math.random())
      rgbNumbers[BLUE] = (nextPixelRgbNumber[BLUE] * Math.random())

      rgbString = rgbArrayToString(rgbNumbers);
      image[row][column] = rgbString;

    }
  }
}