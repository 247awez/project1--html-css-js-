
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

  // function animate(){
  //   var animates = document.querySelectorAll(".animates");
  //   for(var i=0;i<animates.length;i++){
  //     var windowHeight=window.innerHeight;
  //     var elementTop = animates[i].getBoundingClientRect().top;
  //     var elementAnimates=150;
  //     if(elementTop<windowHeight-elementAnimates){
  //       animates[i].classList.add("reverseanimateit");
  //     }
  //     else{
  //       animates[i].classList.add("animateit");

  //     }
  //   }
  // }
  // window.addEventListener("scroll",animate);





