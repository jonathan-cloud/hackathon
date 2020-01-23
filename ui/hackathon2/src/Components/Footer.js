import React from 'react'
import './Nav.css'

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = ["Do something drastic, cut the plastic!",
    "Don’t be a punk! Recycle your junk!",
    "Don’t Litter, it makes the world bitter!",
    "Eat, Sleep, Recycle.",
    "Happiness is recycling.",
    "Have you hugged your recycle bin today?",
    "I am a mean, green recycling machine.",
    "I pity the fool who don’t recycle.",
    "Keep calm & recycle.",
    "Money grows on trees: Recycle paper.",
    "Recycle. Everybody’s doing it.",
    "When in doubt, don’t throw it out!"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("#text-array").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText.length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       document.querySelector("#text-array").innerHTML = '';
       StartTextAnimation(i + 1);
       
     });
    }
    else {
      let timeout = 3 * Math.random(2) + 5
      setTimeout(() => {
        StartTextAnimation(0)
      }, timeout)
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
const Footer = ()=> {
  return (
    <div className="typewriter container-fluid">
    <div className="row-fluid">
      <div id="text-array"> Do something drastic, cut the plastic!
      </div>

    </div>
    </div>
  )
}

export default Footer