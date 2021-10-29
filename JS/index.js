function tombol(){
    $(".with").velocity("transition.bounceUpIn",{stagger:100,complete:function(){
             teks();
    }
  });
}

 function teks(){
   $("#check").velocity("transition.slideLeftIn",{stagger:150})

 }
$(document).ready(function(){
        tombol();

});