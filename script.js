var divList = [];
var clickCount = 0;

$( document ).ready(function(){
$( '#generateButton' ).on('click', function(){
var newDiv = 'hi!';
clickCount++;

divList.push(newDiv);
makeNewDiv();
});//run div generator

});


function makeNewDiv(divlist){
console.log('in make new div');
var arrayOfDiv = $( '#divsGoHere' );

arrayOfDiv.empty();

for( var i=0; i<divList.length; i++){

  var appendingDiv = '<div>';
      appendingDiv += '<p class="counter">';
      appendingDiv += clickCount;
      appendingDiv += '</p>';
      appendingDiv += '<button type="button" class= "swap">Swap</button> ';
      appendingDiv += '<button type="button" class= "delete">Delete</button> ';
      appendingDiv += '</div>';
      arrayOfDiv.append(appendingDiv);
}

}
