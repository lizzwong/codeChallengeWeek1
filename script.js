var divList = [];
var clickCount = 0;

$( document ).ready(function(){
$( '#generateButton' ).on('click', function(){
var newDiv = 'hi!';
clickCount++;

divList.push(newDiv);
makeNewDiv();
});//run div generator

$( '#divsGoHere').on('click', '.delete', function(){
  var thisDiv = $(this).data( 'id' );
  var deletedDiv = divList.splice( thisDiv, 1);
  makeNewDiv();
});
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
      appendingDiv += '<button type="button" class= "swap" data-id ="' + i + '">Swap</button> ';
      appendingDiv += '<button type="button" class= "delete" data-id= "' + i + '">Delete</button> ';
      appendingDiv += '</div>';
      arrayOfDiv.append(appendingDiv);
}

}
