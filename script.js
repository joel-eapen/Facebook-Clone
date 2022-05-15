$(document).ready(function(){
    $("#signup").validate({
        rules:{
            email:{
                required:true,
                minlength:10,
                email:true,
               
               
               
            },
            psswd:{
                required:true,
                minlength:6

            }
        },




    })
})