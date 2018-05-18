var elNumber = document.getElementById("number");

function setupClickHandlers(){
  var elTracks = document.getElementsByClassName("track");

  function generateClickHandler(tracknumber){
    return function clickHandler(){
      elNumber.innerHTML = tracknumber;
    }
  }

  for (var i = 0, l = elTracks.length; i< l; i++){
    elTracks[i].addEventListener("click", generateClickHandler(i));
    console.log(i);
  }

}

setupClickHandlers();
