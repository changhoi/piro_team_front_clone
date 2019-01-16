window.onscroll = function() {scrollFunction()};

window.addEventListener("resize", function(){
    if(window.innerWidth < 992){
       document.querySelector("nav.navbar").classList.add('nav_shrink');
    }
    else{
      if (document.body.scrollTop <= 80 && document.documentElement.scrollTop <= 80){
        document.querySelector("nav.navbar").classList.remove('nav_shrink');
      }
    }
 });

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
    document.querySelector("nav.navbar").classList.add('nav_shrink');
  } else {
    if (window.innerWidth >= 992) {
        document.querySelector("nav.navbar").classList.remove('nav_shrink');
    }
  }
}

document.body.scr