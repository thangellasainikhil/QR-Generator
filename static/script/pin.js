$('.digit-group').find('input').each(function() {  
    $(this).attr('maxlength', 1);  
    $(this).on('keyup', function(e) {  
         var parent = $($(this).parent());  
         if(e.keyCode === 8 || e.keyCode === 37) {  
              var prev = parent.find('input#' + $(this).data('previous'));  
              if(prev.length) {  
                   $(prev).select();  
              }  
         } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {  
              var next = parent.find('input#' + $(this).data('next'));  
              if(next.length) {  
                   $(next).select();  
              } else {  
                   if(parent.data('autosubmit')) {  
                        parent.submit();  
                   }  
              }  
         }  
    });  
});  

function showPassword(){

     let passwordType = document.getElementById("digit-1").type
 
     if(passwordType==='password'){
 
          passwordType='number'
         
          let i=1
          while(i<7){

               document.getElementById("digit-"+i).type=passwordType
               i++

          }
 
     }
 
     else{
 
          passwordType='password'
          let i=1
          while(i<7){

               document.getElementById("digit-"+i).type=passwordType
               i++

          }
 
     }
 
 }